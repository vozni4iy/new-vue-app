<template lang="html">
  <form
    v-if="list[0]"
    v-bind="$attrs"
    v-on="formListeners"
  >
    <div class="form-wrapper">
      <h2>{{ header }}</h2>
      <BasicInput v-model.lazy="formValues.title" :placeholder="'title'"></BasicInput>
      <BasicInput v-model.lazy="formValues.text" :placeholder="'text'"></BasicInput>
      <BasicSelect
        v-model.lazy="formValues.categoryId"
        :options="list"
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'RecipeForm',
  created() {
    this.list[0] ? this.$emit('show') : this.getList();
  },
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
          text: '',
          categoryId: null,
        });
      }
    }
  },
  watch: {
    list(value) {
      this.$emit('show');
    },
  },
  computed: {
    formListeners() {
      const vm = this;
      return Object.assign({},
        this.$listeners,
        {
          submit(event) {
            event.preventDefault();
            const { formValues, list } = vm;
            if (!formValues.categoryId && list[0]) {
              formValues.categoryId = list[0]._id;
            }
            vm.$emit('update:formValues', vm.formValues);
          }
        }
      );
    },
    ...mapState('category', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('category', [
      'getList',
    ]),
  },
};
</script>

<style lang="css">
</style>
