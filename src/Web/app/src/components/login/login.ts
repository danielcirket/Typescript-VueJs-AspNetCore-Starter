import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./login.html')
})
export class LoginComponent extends Vue {
    
    public HasError: boolean = false;
    public Email: string = '';
    public Password: string = '';

    public get DisableLogin(): boolean {
        return !this.Email.length || !this.Password.length;
    }

    public async Login(): Promise<void> {
        console.log('Login clicked');
        console.log('Email: \'' + this.Email + '\', Password: \'' + this.Password + '\'');
    }
    
    public constructor() {
        super();
    }
}
