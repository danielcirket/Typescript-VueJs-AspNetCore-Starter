import * as Vue from 'vue';
import VueRouter from 'vue-router';
import * as Router from './router';
import { NavbarComponent } from './components/navbar';
// Register plugins here...
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router: Router.default,
    components: {
        'navbar': NavbarComponent
    }
});
//# sourceMappingURL=main.js.map