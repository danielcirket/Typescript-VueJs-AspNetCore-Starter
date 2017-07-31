import { expect } from 'chai';
import { LoginComponent } from './login';
import { ComponentTest } from '../../util/component-test';

describe('Login component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><login></login></div>', { 'login': LoginComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      
      expect(vm.$el.querySelector('.panel-title').textContent).to.equal('Please sign in');
    });
  });
});
