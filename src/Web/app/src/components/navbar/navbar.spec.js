var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy } from 'sinon';
import { expect } from 'chai';
import { ComponentTest } from '../../util/component-test';
import { NavbarComponent } from './navbar';
var loggerSpy = spy();
var MockNavbarComponent = (function (_super) {
    __extends(MockNavbarComponent, _super);
    function MockNavbarComponent() {
        return _super.call(this) || this;
        //this.logger = new MockLogger(loggerSpy);
    }
    return MockNavbarComponent;
}(NavbarComponent));
MockNavbarComponent = __decorate([
    Component({
        template: require('./navbar.html')
    }),
    __metadata("design:paramtypes", [])
], MockNavbarComponent);
describe('Navbar component', function () {
    var directiveTest;
    var router;
    before(function () {
        Vue.use(VueRouter);
        directiveTest = new ComponentTest('<div><navbar></navbar><router-view>loading...</router-view></div>', { 'navbar': MockNavbarComponent });
        var homeComponent = { template: '<div class="home">Home</div>' };
        //let aboutComponent = { template: '<div class="about">About</div>' };
        var loginComponent = { template: '<div class="login">Login</div>' };
        var registerComponent = { template: '<div class="register">Register</div>' };
        router = new VueRouter({
            routes: [
                { path: '/', component: homeComponent },
                //{ path: '/about', component: aboutComponent },
                { path: '/login', component: loginComponent },
                { path: '/register', component: registerComponent }
            ]
        });
    });
    it('should render correct contents', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    directiveTest.createComponent({ router: router });
                    return [4 /*yield*/, directiveTest.execute(function (vm) {
                            debugger;
                            expect(vm.$el.querySelectorAll('ul.nav.navbar-right li').length).to.equal(2);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
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
//# sourceMappingURL=navbar.spec.js.map