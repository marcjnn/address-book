<template>
  <form action="" method="" @submit.prevent="onSubmit" class="form">
    <fieldset class="fieldset">
      <legend class="legend">Personal information</legend>
      <div class="input__container">
        <BaseInput
          v-model="entry.firstName"
          label="First name"
          placeholder="eg. Anthony..."
          type="text"
          :isRequired="true"
          @blur="v$.entry.firstName.$touch"
        />
        <template v-if="v$.entry.firstName.$error">
          <p v-if="v$.entry.firstName.required.$invalid" class="input__error">
            First name is required
          </p>
        </template>
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.lastName"
          label="Last name"
          placeholder="eg. Mallark..."
          type="text"
          :isRequired="true"
          @blur="v$.entry.lastName.$touch"
        />
        <template v-if="v$.entry.lastName.$error">
          <p v-if="v$.entry.lastName.required.$invalid" class="input__error">
            Last name is required
          </p>
        </template>
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.email"
          label="Email"
          placeholder="eg. anthony@mail.com..."
          type="text"
          :isRequired="true"
          @blur="v$.entry.email.$touch"
        />
        <template v-if="v$.entry.email.$error">
          <p v-if="v$.entry.email.required.$invalid" class="input__error">
            Email is required
          </p>
          <p v-if="v$.entry.email.email.$invalid" class="input__error">
            Enter a valid email address
          </p>
        </template>
      </div>
      <div class="input__container">
        <BaseSelect
          :options="countries"
          v-model="entry.country"
          label="Country"
          :isRequired="true"
          @blur="v$.entry.country.$touch"
        />
        <template v-if="v$.entry.country.$error">
          <p v-if="v$.entry.country.required.$invalid" class="input__error">
            Country is required
          </p>
        </template>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Add to address book</legend>
      <div class="buttons" v-if="!edit">
        <BaseButton
          type="button"
          :icon="['fas', 'times']"
          class="btn--danger btn--rect"
          @click="resetForm"
          title="reset form"
          >Reset form</BaseButton
        >
        <BaseButton
          type="submit"
          :icon="['fas', 'check']"
          class="btn--success btn--rect"
          title="add contact to address book"
          >Add contact</BaseButton
        >
      </div>
      <div class="buttons" v-else>
        <BaseButton
          type="button"
          :icon="['fas', 'times']"
          class="btn--danger btn--rect"
          @click="close"
          title="reset form"
          >Close without saving</BaseButton
        >

        <BaseButton
          type="submit"
          :icon="['fas', 'check']"
          class="btn--success btn--rect"
          title="add contact to address book"
          >Save changes</BaseButton
        >
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ContactItem } from "@/types/ContactItem";
import { getNames } from "country-list";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions } from "vuex";
import UniqueID from "@/features/UniqueID";

export default defineComponent({
  name: "ContactEdit",
  props: {
    contact: { type: Object as PropType<ContactItem> },
    edit: { type: Boolean, default: false },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      entry: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
      } as ContactItem,
      countries: getNames(),
    };
  },
  validations() {
    return {
      entry: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        country: { required },
      },
    };
  },
  mounted() {
    if (!this.contact) {
      const uuid = UniqueID();
      this.entry.id = uuid;
    } else {
      this.entry.id = this.contact.id;
      this.entry.firstName = this.contact.firstName;
      this.entry.lastName = this.contact.lastName;
      this.entry.email = this.contact.email;
      this.entry.country = this.contact.country;
    }
  },
  methods: {
    ...mapActions("contacts", ["upsertContact", "addNotification"]),
    goToContactList() {
      this.$router.push({
        name: "ContactList",
      });
    },
    onSubmit() {
      this.v$.$touch();
      if (this.v$.$error) return;
      this.upsertContact(this.entry);
      this.goToContactList();
      this.close();
    },
    resetForm() {
      this.entry.firstName = "";
      this.entry.lastName = "";
      this.entry.email = "";
      this.entry.country = "";
    },
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style scoped>
.form {
  padding: 24px;
  border: 1px solid #d8d8d8;
}
.fieldset {
  padding: 24px 0;
  border: none;
  border-top: 1px solid #d8d8d8;
  display: flex;
  flex-wrap: wrap;
}
.legend {
  margin-top: 20px;
  margin-bottom: -20px;
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
.input__container {
  margin: 12px 0;
  text-align: left;
  width: 50%;
}

.input__error {
  color: crimson;
}

.fieldset .buttons {
  width: 100%;
  margin-top: 12px;
}
</style>
