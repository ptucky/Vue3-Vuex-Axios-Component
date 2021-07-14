<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png" width="100">
    <HelloHome msg="Vue3 + Vuex + Component"/>

    <div class="counter" :style="{color: $store.state.colorCode}">
        {{ $store.state.counter }}
    </div>

    <div class="counter-getter">
        [$store.getters]
        {{ $store.state.counter }}
        <sup>2</sup> =
        {{ $store.getters.counterSquared }}
    </div>
    
    <div class="div">
        <div :style="{height: '20px'}" />
        <!-- 
        // will not use direct $store.state.colorCode but use get/set
        <input 
        v-model="$store.state.colorCode"
        placeholder="[$store.state] color name" 
        type="text"> 
        -->

        <input 
        v-model="colorCodeFromStore"
        placeholder="[$store.state] color name" 
        type="text">
    </div>

    <div :style="{height: '50px'}" />

    <div class="buttons">
      <p>use vuex "mutations:{}" commit method</p>
      <button @click="$store.commit('minusCounter')">-</button>
      <button @click="$store.commit('plusCounter')">+</button>
    </div>

     <div class="buttons">
      <p>use vuex "actions:{}" dispatch method</p>
      <button @click="$store.dispatch('minusCounterAction')">Rondom -</button>
      <button @click="$store.dispatch('plusCounterAction')">Random +</button>
    </div>

  </div>
</template>

<script>
import HelloHome from '@/components/HelloHome.vue'

export default {
  name: 'HomeVuex',
  components: {
    HelloHome
  },
  computed: {
      colorCodeFromStore: {
          get() {
              return this.$store.state.colorCode
          },
          set(setValue) {
            // use commit() call direct to mutations
            // this.$store.commit('setColorCode', setValue)

            // use dispatch() call actions:{}
            this.$store.dispatch('setColorCode', setValue)
          }
      }
  }
}
</script>


<style scoped>
  .counter{
    font-size: 60px;
  }
  .buttons button{
    font-size: 30px; width: 200px; margin: 0 10px;
  }
  input { height: 30px;}
</style>
 