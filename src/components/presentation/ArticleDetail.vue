<template lang="html">
  <div class="listWrapper">
    <div>{{ item.title }}</div>
    <div>{{ item.text }}</div>
    <div>{{ item.description }}</div>
    <div>{{ categoryPath }}</div>
    <button @click="handleEdit">Edit article</button>
    <button @click="handleDelete">Delete article</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

function checkType(obj, params) {
  let checked = true;
  params.forEach((param) => {
    const paramArr = param.split(':');
    if (typeof obj[paramArr[0]] !== paramArr[1]) {
      checked = false;
    }
  });
  return checked;
}

export default {
  name: 'ArticleDetail',
  created() {
    this.getArticlePath(this.$route.params.id);
  },
  props: {
    handleEdit: {
      type: Function,
      required: true,
    },
    handleDelete: {
      type: Function,
      required: true,
    },
    item: {
      type: Object,
      required: true,
      validator: value => (
        checkType(value, [
          'title:string',
          'text:string',
          'description:string'
        ])
      ),
    },
  },
  computed: {
    ...mapGetters('article', [
      'categoryPath'
    ]),
  },
  methods: {
    ...mapActions({
      getArticlePath: 'article/getPath',
    }),
  },
};
</script>

<style lang="css">
</style>
