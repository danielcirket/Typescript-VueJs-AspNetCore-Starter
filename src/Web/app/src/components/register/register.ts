import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./register.html')
})
export class RegisterComponent extends Vue {
    
    public HasError: boolean = false;
    public Email: string = '';
    public Password: string = '';
    public Password2: string = '';

    public get DisableRegister(): boolean {
        if (!this.Email.length) {
            return true;
        }

        if (!this.Password.length) {
            return true;
        }

        if (!this.Password2.length) {
            return true;
        }

        if (this.Password.length !== this.Password2.length) {
            return true;
        }

        return this.Password !== this.Password2;
    }

    public async Register(): Promise<void> {
        console.log('Register clicked');
        console.log('Email: \'' + this.Email + '\', Password: \'' + this.Password + '\'');
        
    }

    constructor() {
        super();
    }
}
