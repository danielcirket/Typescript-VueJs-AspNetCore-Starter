import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Link } from './link';

@Component({
    template: require('./navbar.html')
})
export class NavbarComponent extends Vue {

    public get Links(): Array<Link> {
        return new Array<Link>(...[
            new Link('Login', '/login'),
            new Link('Register', '/register'),
        ]);
    }

    public constructor() {
        super();
    }
}
