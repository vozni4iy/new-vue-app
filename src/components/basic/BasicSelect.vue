<template>
  <select
    :value="value"
    @change="$emit('input', $event.target.value)"
  >
    <option
      v-for="option in options"
      :key="option._id"
      :value="option._id"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'BasicSelect',
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: String,
    },
  };
</script>

<style scoped>
select {
  color: green;
}
</style>
