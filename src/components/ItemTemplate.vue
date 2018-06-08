<template lang="html">
  <div>
    <component
      :is="viewComponent"
      v-if="item"
      :item="item"
      :handleEdit="handleEdit"
      :handleDelete="handleDelete"
    />
    <button @click="navToListView">{{ navButtonText }}</button>
    <UpdateModal
      v-if="showUpdate"
      :onModalClose="closeAllModals"
      :header="updateHeader"
      :componentFile="modalComponent"
      :moduleName="moduleName"
      :chosen="item"
    />
    <DeleteModal
      v-if="showDelete"
      :onModalClose="closeAllModals"
      :header="updateHeader"
      :moduleName="moduleName"
      :chosen="item"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import UpdateModal from './crud/template/UpdateModal';
import DeleteModal from './crud/template/DeleteModal';

export default {
  name: 'ItemTemplate',
  created() {
    this.$store.dispatch(`${this.moduleName}/getItem`, this.$route.params.id);
  },
  props: {
    viewComponent: {
      type: Object,
      default: () => null,
    },
    modalComponent: {
      type: Object,
      default: () => null,
    },
    moduleName: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      showUpdate: false,
      showDelete: false,
    };
  },
  methods: {
    handleEdit() {
      this.showUpdate = true;
    },
    handleDelete() {
      this.showDelete = true;
    },
    closeAllModals() {
      this.showUpdate = false;
      this.showDelete = false;
    },
    navToListView() {
      this.closeAllModals();
      this.$router.push({ name: this.parent });
    },
  },
  computed: {
    updateHeader() {
      return `Update ${this.moduleName}`;
    },
    navButtonText() {
      return `Return to ${this.parent}`;
    },
    item() {
      return this.$store.state[this.moduleName].item;
    },
  },
  watch: {
    item(value) {
      if (value === null) {
        this.$router.push({ name: this.parent });
      }
    },
  },
  components: {
    UpdateModal,
    DeleteModal,
  }

};
</script>

<style lang="css">
</style>
