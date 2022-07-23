<template>
  <div>
    <h1>Bob</h1>
    <ul>
      <li @click="btn('/contacts/bob/blog', 'blog')">blog</li>
      <li @click="btn('/contacts/bob/fax', 'fax')">fax</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name : 'C-Bob',
  methods: {
    btn(a,b) {
      this.$router.push({
      path :a ,
      name : b ,
    })
    }
  }

}
</script>

<style></style>
