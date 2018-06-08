<template lang="html">
  <div>
    <Modal
      :onModalClose="onModalClose"
    >
      <div class="'form-wrapper'">
        <h2>{{ header }}</h2>
        <div>{{ message }}</div>
        <div class="button-wrapper">
          <button @click="handleSubmit">Submit</button>
          <button @click="onModalClose">Cancel</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Modal from '../../decorate/Modal';

export default {
  name: 'DeleteModal',
  props: {
    header: {
      type: String,
      required: true,
    },
    onModalClose: {
      type: Function,
      required: true,
    },
    moduleName: {
      type: String,
      required: true,
    },
    chosen: {
      type: Object,
      required: true,
      default() {
        return ({
          title: '',
        });
      }
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch(`${this.moduleName}/deleteItem`, this.chosen._id);
      this.onModalClose();
    },
  },
  computed: {
    message() {
      return `Are you sure to delete ${this.chosen.title}?`;
    },
  },
  components: {
    Modal,
  }
};
</script>

<style lang="css">
</style>
