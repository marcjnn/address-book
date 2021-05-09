<template>
  <section class="modal__container" @click.self="closeModalWindow">
    <div class="modal">
      <header class="modal__header">
        <h2>
          <slot name="header"></slot>
        </h2>
        <div class="modal__closeBtn">
          <BaseButton
            :icon="['far', 'window-close']"
            @click="closeModalWindow"
            title="close window"
          />
        </div>
      </header>
      <div class="modal__main">
        <slot name="main"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "BaseModal",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModalWindow() {
      this.$emit("close");
    },
  },
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
  align-items: center;
}

.modal__header {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 0 12px;
  color: darkblue;
}

.modal__closeBtn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
