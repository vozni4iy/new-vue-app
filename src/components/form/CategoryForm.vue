<template lang="html">
  <form
    v-bind="$attrs"
    v-on="formListeners"
  >
    <div class="form-wrapper">
      <h2>{{ header }}</h2>
      <BasicInput v-model.lazy="formValues.title"></BasicInput>
      <BasicSelect
        v-model.lazy="formValues.parentId"
        :options="categoryList"
      >
      </BasicSelect>
    </div>
    <div class="button-wrapper">
      <button type="submit">Submit</button>
      <button type="button" @click="onModalClose">Cancel</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CategoryForm',
  inheritAttrs: false,
  props: {
    header: {
      type: String,
      required: true,
    },
    onModalClose: {
      type: Function,
      required: true,
    },
    formValues: {
      type: Object,
      default() {
        return ({
          title: '',
          parentId: null,
        });
      }
    }
  },
  computed: {
    formListeners() {
      const vm = this;
      return Object.assign({},
        this.$listeners,
        {
          submit(event) {
            event.preventDefault();
            console.log('submit called');
            vm.$emit('update:formValues', vm.formValues);
          }
        }
      );
    },
    ...mapGetters('category', [
      'categoryList',
    ]),
  },
};
</script>

<style lang="css">
</style>
