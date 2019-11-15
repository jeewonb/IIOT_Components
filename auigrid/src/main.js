import Vue from 'vue';
import auigrid from './components/auigrid/auigrid.vue';
import model_auigrid from './components/auigrid/model_auigrid.js';

Vue.component('auigrid', auigrid);

export default {
  install: function (Vue, options) {
 
  },
  componentVue: function () {
    return auigrid;
  },
  componentModel: function () {
    return model_auigrid;
  }
};