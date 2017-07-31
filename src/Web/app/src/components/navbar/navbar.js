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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Link } from './link';
var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(NavbarComponent.prototype, "Links", {
        get: function () {
            return new (Array.bind.apply(Array, [void 0].concat([
                new Link('Login', '/login'),
                new Link('Register', '/register'),
            ])))();
        },
        enumerable: true,
        configurable: true
    });
    return NavbarComponent;
}(Vue));
NavbarComponent = __decorate([
    Component({
        template: require('./navbar.html')
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.js.map