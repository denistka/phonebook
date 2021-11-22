import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import persons from './persons'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      persons
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
