<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="100">
    <HelloHome msg="Vue3"/>

    <div class="counter">
      {{ counter }}
    </div>
    <div class="buttons">
      <button @click="minusCounter">-</button>
      <button @click="plusCounter">+</button>
    </div>

  </div>
</template>

<script>
import HelloHome from '@/components/HelloHome.vue'

export default {
  name: 'Home',
  components: {
    HelloHome
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    plusCounter() {
      this.counter++
    },
      minusCounter() {
      this.counter--
    },
    startOne(){
      alert('Page start')
    }
  },
  created() {
    //this.startOne();
  }
}
</script>


<style scoped>
  .counter{
    font-size: 60px;
  }
  .buttons button{
    font-size: 30px; width: 100px; margin: 0 10px;
  }
</style>
