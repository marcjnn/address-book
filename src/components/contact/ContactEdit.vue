<template>
  <form action="" method="" @submit.prevent="upsertContact" class="form">
    <fieldset class="fieldset">
      <legend class="legend">Personal information</legend>
      <div class="input__container">
        <BaseInput
          v-model="entry.firstName"
          label="First name"
          placeholder="eg. Anthony..."
          type="text"
          :isRequired="true"
        />
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.lastName"
          label="Last name"
          placeholder="eg. Mallark..."
          type="text"
          :isRequired="true"
        />
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.email"
          label="Email"
          placeholder="eg. anthony@mail.com..."
          type="text"
          :isRequired="true"
        />
      </div>
      <div class="input__container">
        <BaseSelect
          :options="countries"
          v-model="entry.country"
          label="Country"
          :isRequired="true"
        />
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Add to address book</legend>
      <div class="buttons" v-if="!edit">
        <BaseButton
          type="button"
          :icon="['fas', 'times']"
          class="btn--danger"
          @click="resetForm"
          title="reset form"
          >Reset form</BaseButton
        >
        <BaseButton
          type="submit"
          :icon="['fas', 'check']"
          class="btn--success"
          title="add contact to address book"
          >Add contact</BaseButton
        >
      </div>
      <div class="buttons" v-else>
        <BaseButton
          type="button"
          :icon="['fas', 'times']"
          class="btn--danger"
          @click="close"
          title="reset form"
          >Close without saving</BaseButton
        >
        <BaseButton
          type="submit"
          :icon="['fas', 'check']"
          class="btn--success"
          title="add contact to address book"
          >Save changes</BaseButton
        >
      </div>
    </fieldset>
  </form>
</template>

<script>
import { getNames } from "country-list";
import UniqueID from "@/features/UniqueID";
export default {
  name: "ContactEdit",
  props: {
    contact: { type: Object },
    edit: { type: Boolean, default: false },
  },
  data() {
    return {
      entry: {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        country: "",
      },
      countries: getNames(),
    };
  },
  mounted() {
    if (!this.contact) {
      const uuid = UniqueID().getID();
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
    upsertContact() {
      console.log(this.entry);
      this.$store.dispatch("upsertContact", this.entry);
      this.close();
      this.$emit("show-msg");
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
};
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
  /* float: left; */
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
.input__container {
  margin: 12px 0;
  /* display: flex;
  flex-direction: column; */
  text-align: left;
  width: 50%;
}

.fieldset .buttons {
  width: 100%;
  margin-top: 12px;
}
</style>
