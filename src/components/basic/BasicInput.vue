<template>
  <input
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    ></input>
</template>

<script>
  export default {
    name: 'BasicInput',
    props: {
      value: String,
      placeholder: String,
    }
  };
</script>

<style scoped>
input {
  font-weight: bold;
}
</style>
