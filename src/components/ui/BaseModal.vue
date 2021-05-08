<template>
  <section class="modal__container" v-if="open" @click.self="closeModalWindow">
    <div class="modal">
      <div class="modal__header">
        <slot name="header"></slot>
      </div>
      <div class="modal__main">
        <slot name="main"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseModal",
  // props: {
  //   open: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   closeModalWindow() {
  //     this.$emit("close");
  //   },
  // },
};
</script>

<style scoped>
/* adjust styles!!!!!! */
.modal {
  padding: 24px;
  background-color: white;
  border-radius: 12px;
}

.modal__container {
  width: 100vw;
  min-height: 100vh;
  padding: 24px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(68, 68, 68, 0.7);
  display: flex;
  justify-content: center;
}

.modal__header {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 0 12px;
}
</style>
