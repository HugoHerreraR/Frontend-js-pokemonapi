<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
export default {
    created() {
    this.$router.push({ path:"pokemons"}).catch(err => {});
  },
}
</script>
<style>

</style>
