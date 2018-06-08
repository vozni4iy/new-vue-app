<template lang="html">
  <div v-show="showModal">
    <Modal
      :onModalClose="onModalClose"
    >
      <component
        :is="componentFile"
        :onModalClose="onModalClose"
        :header="header"
        :formValues.sync="formValues"
        @update:formValues="handleSubmit(formValues)"
        @show="() => { this.showModal = true; }"
      />
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '../../decorate/Modal';

export default {
  name: 'UpdateModal',
  created() {
    this.formValues = {
      ...this.chosen,
    };
  },
  data() {
    return {
      showModal: false,
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
    chosen: {
      type: Object,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSubmit(values) {
      const data = {
        _id: this.chosen._id,
        ...values,
      };
      this.$store.dispatch(`${this.moduleName}/updateItem`, data);
      this.onModalClose();
    },
  },
  computed: {
    ...mapState('category', [
      'list',
    ]),
  },
  components: {
    Modal,
  }
};
</script>

<style lang="css">
</style>
