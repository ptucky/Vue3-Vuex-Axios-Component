import { createStore } from 'vuex'
import axios from 'axios'

//Vuex store createStore
export default createStore({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  mutations: {
    // change data in state (but can not change state direct from here and)
    // Use from view page ex. <button @click="$store.commit('minusCounter')">-</button>
    // ** In mutations can not use Asynchronus only Synchronus
    // ** using action call commit()

    // direct comit from view page
    plusCounter(state) { //pass "state" above into this method
      state.counter++
    },
    minusCounter(state) { //pass "state" above into this method
      state.counter--
    },

    // comiit from actions:{}
    plusCounterMutation(state, ranNumber){
      state.counter += ranNumber
    },
    minusCounterMutation(state, ranNumber){
      state.counter -= ranNumber
    },
    setColorCodeMutation(state, setValue){
      state.colorCode = setValue
    }
  },
  actions: { // can Async/Await axios
    // Create method to use commit from mutations to set state
    // Use from view page ex. <button @click="$store.dispatch('minusCounterAction')">-</button>
    // *** In Action can use Asynchronus 
    // *** using action call dispatch()

    async plusCounterAction({ commit }) { //pass and object "{ commit }" commit method into this method
      try {
        await axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
        .then(res => {
          commit('plusCounterMutation', res.data)
        })
      } catch (error) {
        alert("Error! please check console")
        window.console.log(error)
      }
    },
    async minusCounterAction({ commit }) { //pass and object "{ commit }" commit method into this method
      try {
        await axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
        .then(res => {
          commit('minusCounterMutation', res.data)
        })
      } catch (error) {
        alert("Error! please check console")
        window.console.log(error)
      }
    },
    setColorCode({ commit }, setValue){
      commit('setColorCodeMutation', setValue)
    }

  },
  getters:{
    // allow get data from state, get all aroud the app
    // Use in view page ex.  {{ $store.getters.counterSquared }}

    counterSquared(state) { //pass "state" above into this method
      return state.counter * state.counter //multiply squard
    }

  },
  modules: {
    // each separate module 
  }
})
