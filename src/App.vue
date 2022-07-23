<template>
  <div id="app">
    <div>
      <router-link to="/uirouter"> UI-Router </router-link>
      <router-link to="/contacts" style="margin-left: 10px"> Contacts </router-link>
      <router-link to="/about" style="margin-left: 10px"> About</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
