# My address book

Take home test: a SPA to keep your email addresses all in one place.

Created with Vue 3 and written in TypeScript:

- use of vue router and vuex 4
- additional dependencies: [vuelidate](https://vuelidate-next.netlify.app/), [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate), [country-list](https://www.npmjs.com/package/country-list), [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome), [uuid](https://www.npmjs.com/package/uuid)
- vuex store using modules
- form validation with vuelidate (required, email)
- component features: Base components globally registered, mixins for form fields
- unit tests for components
- responsive design based on grid & flexbox, mobile-first

## Functionality

- presents a list of all contacts (full name, email, country)
- possibility to add, edit, delete contact
- 'add contact' opens under separate route, 'edit contact' in a modal window
- button to reset all fields of the form
- notifications about changes dismounted automatically

## How to set up the project?

### Installs dependencies

`npm install`

### Compiles and hot-reloads for development

`npm run serve`

### Compiles and minifies for production

`npm run build`

### Run unit tests

`npm run test:unit`

### Lints and fixes files

`npm run lint`
