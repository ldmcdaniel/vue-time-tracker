import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Hello from './components/Hello';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/hello': {
    component: Hello,
  },
});

router.redirect({
  '*': '/hello',
});

router.start(App, '#a');
