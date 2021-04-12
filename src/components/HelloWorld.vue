<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <span>count_time:{{time}}</span>
</template>
<!--支持多个根标签-->
<script>
import AppVue from '../App.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  created(){
  },
  methods:{
  }
}
</script>
