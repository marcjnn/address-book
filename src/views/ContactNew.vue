<template>
  <form action="" method="" @submit.prevent="addNewContact" class="form">
    <fieldset class="fieldset">
      <legend class="legend">Personal information</legend>
      <div class="input__container">
        <BaseInput
          v-model="entry.firstName"
          label="First name"
          placeholder="eg. Anthony..."
          type="text"
        />
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.lastName"
          label="Last name"
          placeholder="eg. Mallark..."
          type="text"
        />
      </div>
      <div class="input__container">
        <BaseInput
          v-model="entry.email"
          label="Email"
          placeholder="eg. anthony@mail.com..."
          type="text"
        />
      </div>
      <div class="input__container">
        <BaseSelect
          :options="countries"
          v-model="entry.country"
          label="Country"
        />
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Add to address book</legend>
      <div class="buttons">
        <router-link :to="{ name: 'ContactList' }"
          ><BaseButton
            type="button"
            :icon="['fas', 'times']"
            class="btn--danger"
            title="cancel"
            >Cancel</BaseButton
          ></router-link
        >
        <BaseButton
          type="button"
          :icon="['fas', 'times']"
          class="btn--danger"
          @click="clearForm"
          title="reset form"
          >Reset</BaseButton
        >
        <BaseButton
          type="submit"
          :icon="['fas', 'check']"
          class="btn--success"
          title="add contact to address book"
          >Submit</BaseButton
        >
      </div>
    </fieldset>
  </form>
</template>

<script>
import { getNames } from "country-list";
export default {
  name: "ContactNew",
  data() {
    return {
      entry: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
      },
      countries: getNames(),
    };
  },
  methods: {
    addNewContact() {
      console.log("adding");
      console.log(this.entry.firstName);
      console.log(this.entry.lastName);
      console.log(this.entry.email);
      console.log(this.entry.country);
      // console.log(store);
      // store.commit('addNewContact', this.entry)
      // console.log(store.state.contacts);
    },
    clearForm() {
      console.log("deleting");
      this.entry.firstName = "";
      this.entry.lastName = "";
      this.entry.email = "";
      this.entry.country = "";
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
