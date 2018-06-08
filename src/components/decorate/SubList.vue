<template lang="html">
  <div>
    <h3>{{ header }}</h3>
    <ul class="listWrapper">
      <li v-for="option in options" :key="option._id">
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubList',
  props: {
    header: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="css">
</style>
