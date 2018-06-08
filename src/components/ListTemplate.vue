<template lang="html">
  <div>
    <component
      :is="viewComponent"
      :handleEdit="handleEdit"
      :handleDelete="handleDelete"
    />
    <button @click="handleCreate">{{ createHeader }}</button>
    <NavBar category article recipe/>
    <CreateModal
      v-if="showCreate"
      :onModalClose="closeAllModals"
      :header="createHeader"
      :componentFile="modalComponent"
      :moduleName="moduleName"
    />
    <UpdateModal
      v-if="showUpdate"
      :onModalClose="closeAllModals"
      :header="updateHeader"
      :componentFile="modalComponent"
      :moduleName="moduleName"
      :chosen="currentElem"
    />
    <DeleteModal
      v-if="showDelete"
      :onModalClose="closeAllModals"
      :header="updateHeader"
      :moduleName="moduleName"
      :chosen="currentElem"
    />
  </div>
</template>

<script>
import CreateModal from './crud/template/CreateModal';
import UpdateModal from './crud/template/UpdateModal';
import DeleteModal from './crud/template/DeleteModal';
import NavBar from './decorate/NavBar';

export default {
  name: 'ListTemplate',
  data() {
    return {
      currentElem: null,
      showCreate: false,
      showUpdate: false,
      showDelete: false,
    };
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
  },
  computed: {
    createHeader() {
      return `Create ${this.moduleName}`;
    },
    updateHeader() {
      return `Update ${this.moduleName}`;
    },
    // dynamic import example
    // componentLoader() {
    //  return () => import(`./presentation/${this.viewComponent}`);
    // },
  },
  methods: {
    handleEdit(elem) {
      this.showUpdate = true;
      this.currentElem = elem;
    },
    handleDelete(elem) {
      this.showDelete = true;
      this.currentElem = elem;
    },
    handleCreate() {
      this.showCreate = true;
    },
    closeAllModals() {
      this.showCreate = false;
      this.showUpdate = false;
      this.showDelete = false;
    }
  },
  components: {
    UpdateModal,
    DeleteModal,
    CreateModal,
    NavBar,
  }

};
</script>

<style lang="css">
</style>
