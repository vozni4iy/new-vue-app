<template lang="html">
  <div>
    <Modal
      :onModalClose="onModalClose"
    >
      <component
        :is="componentFile"
        :onModalClose="onModalClose"
        :header="header"
        :formValues.sync="formValues"
        @update:formValues="handleSubmit(formValues)"
      />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Modal from '../../decorate/Modal';

export default {
  name: 'CreateModal',
  data() {
    return {
      formValues: {},
    };
  },
  props: {
    onModalClose: {
      type: Function,
      required: true,
    },
    componentFile: {
      type: Object,
      default: () => null,
    },
    moduleName: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSubmit(values) {
      this.$store.dispatch(`${this.moduleName}/createItem`, values);
      this.onModalClose();
    },
  },
  components: {
    Modal,
  }
};
</script>

<style lang="css">
</style>
