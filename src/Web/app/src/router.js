import VueRouter from 'vue-router';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { NotFoundComponent } from './components/notfound';
var Router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomeComponent, beforeEnter: BeforeEnter },
        { path: '/login', component: LoginComponent, beforeEnter: BeforeEnter },
        { path: '/register', component: RegisterComponent, beforeEnter: BeforeEnter },
        { path: '/not-found', component: NotFoundComponent },
        { path: '*', redirect: '/not-found' }
    ]
});
function BeforeEnter(route, from, next) {
    // In here you can perform checks, such as requiring the user to be logged in
    // and handle the navigation appropriatly
    next();
}
;
export default Router;
//# sourceMappingURL=router.js.map