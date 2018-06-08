<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.form-wrapper > input, .form-wrapper > select {
  margin-top: 10px;
  width: 150px;
}

.button-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.listWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 100px;
}

.listWrapper > div, .listWrapper > li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
