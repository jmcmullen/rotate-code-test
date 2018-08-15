import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
  cart: {
    type: 'Subscription',
    frequency: 'Weekly',
    quantity: '1',
  },
};

const store = () =>
  new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
  });

export default store;
