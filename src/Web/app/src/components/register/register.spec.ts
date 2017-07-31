import { expect } from 'chai';
import { RegisterComponent } from './register';
import { ComponentTest } from '../../util/component-test';

describe('Register component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><register></register></div>', { 'register': RegisterComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      expect(vm.$el.querySelector('.panel-title').textContent).to.equal('Register');
    });
  });
});
