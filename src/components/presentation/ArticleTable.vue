<template lang="html">
  <ul class="listWrapper">
    <li v-for="item in list" :key="item._id">
      <div>{{ item.title }}</div>
      <button @click="() => {
        $router.push({ name: 'Article', params: { id: item._id } });
      }">View</button>
      <button @click="() => { handleEdit(item); }">Edit</button>
      <button @click="() => { handleDelete(item); }">Delete</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ArticleTable',
  created() {
    this.getList();
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
  },
  computed: {
    ...mapState('article', [
      'list',
    ]),
  },
  methods: {
    ...mapActions('article', [
      'getList',
    ]),
  }
};
</script>

<style lang="css">
</style>
