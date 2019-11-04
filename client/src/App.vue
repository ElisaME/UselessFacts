<template>
  <div id="app">
    <FactComponent/>
  </div>
</template>

<script>
import FactComponent from './components/FactComponent.vue'

export default {
  name: 'app',
  components:{FactComponent}
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
body{
  margin:0;
  padding: 0;
}
</style>
