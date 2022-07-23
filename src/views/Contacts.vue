<template>
  <div>
    <ul>
      <li @click="btn('/contacts/allcontacts', 'allcontacts')">All_contacts</li>
      <li @click="btn('/contacts/alice', 'alice')">Alice</li>
      <li @click="btn('/contacts/bob', 'bob')">Bob</li>
    </ul>
    <button @click="clickFn">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: "T-Contacts",
  data() {
    return {
      arr:[
        {
          path : '/contacts/allcontacts',
          name :'allcontacts'
        },
        {
          path : '/contacts/alice',
          name :'alice',
        },
        {
          path : '/contacts/bob',
          name :'bob'
        },
      ]
    }
  },
  methods: {
    btn(a,b) {
      this.$router.push({
        path : a,
        name : b
      })
    },
    clickFn() {
      const num = parseInt(Math.random() * 3)
      console.log(num);
      this.$router.push({
        path : this.arr[num].path,
        name : this.arr[num].name
      })
    }
  },
};
</script>

<style>
li {
  cursor: pointer;
}
</style>
