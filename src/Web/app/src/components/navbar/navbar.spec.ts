import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { NavbarComponent } from './navbar';

let loggerSpy = spy();

@Component({
    template: require('./navbar.html')
})
class MockNavbarComponent extends NavbarComponent {
    constructor() {
        super();
        //this.logger = new MockLogger(loggerSpy);
    }
}

describe('Navbar component', () => {
    let directiveTest: ComponentTest;
    let router: VueRouter;

    before(() => {
        Vue.use(VueRouter);
        directiveTest = new ComponentTest('<div><navbar></navbar><router-view>loading...</router-view></div>', { 'navbar': MockNavbarComponent });

        let homeComponent = { template: '<div class="home">Home</div>' };
        //let aboutComponent = { template: '<div class="about">About</div>' };
        let loginComponent = { template: '<div class="login">Login</div>' };
        let registerComponent = { template: '<div class="register">Register</div>' };

        router = new VueRouter({
            routes: [
                { path: '/', component: homeComponent },
                //{ path: '/about', component: aboutComponent },
                { path: '/login', component: loginComponent },
                { path: '/register', component: registerComponent }
            ]
        });
    });

    it('should render correct contents', async () => {
        directiveTest.createComponent({ router: router });

        await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
            debugger;
            expect(vm.$el.querySelectorAll('ul.nav.navbar-right li').length).to.equal(2);
        });
    });

    // describe('When clicking the login link', () => {
    //     beforeEach(async () => {
    //         directiveTest.createComponent({ router: router });

    //         await directiveTest.execute((vm) => {
    //             let anchor = <HTMLAnchorElement>vm.$el.querySelector('.navbar-right a[href="/login"]');
    //             anchor.click();
    //         });
    //     });

    //     it('should render correct login contents', async () => {
    //         await directiveTest.execute((vm) => {
    //             expect(vm.$el.querySelector('.panel-title').textContent).to.equal('Please sign in');
    //         });
    //     });
    // });

    // describe('When clicking the register link', () => {
    //     beforeEach(async () => {
    //         directiveTest.createComponent({ router: router });

    //         await directiveTest.execute((vm) => {
    //             let anchor = <HTMLAnchorElement>vm.$el.querySelector('a[href="/register"]');
    //             anchor.click();
    //         });
    //     });

    //     it('should render correct register contents', async () => {
    //         await directiveTest.execute((vm) => {
    //             expect(vm.$el.querySelector('.register').textContent).to.equal('Register');
    //         });
    //     });
    // });
});
