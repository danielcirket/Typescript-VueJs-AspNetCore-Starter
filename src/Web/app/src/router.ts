import VueRouter, { Route } from 'vue-router';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { NavbarComponent } from './components/navbar';
import { NotFoundComponent } from './components/notfound';

let Router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomeComponent, beforeEnter: <any>BeforeEnter },
        { path: '/login', component: LoginComponent, beforeEnter: <any>BeforeEnter },
        { path: '/register', component: RegisterComponent, beforeEnter: <any>BeforeEnter },
        { path: '/not-found', component: NotFoundComponent },
        { path: '*', redirect: '/not-found' }
    ]
});

function BeforeEnter(route: Route, from: Route, next: Function): void {

    // In here you can perform checks, such as requiring the user to be logged in
    // and handle the navigation appropriatly

    next();
};

export default Router;