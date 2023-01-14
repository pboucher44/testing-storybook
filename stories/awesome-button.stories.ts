// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AwesomeButtonComponent} from "../projects/trying-angular-lib/src/lib/awesome-button/awesome-button.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/AwesomeButtonComponent',
  component: AwesomeButtonComponent,

} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AwesomeButtonComponent> = (args: AwesomeButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  buttonText: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: 'Button 2 large',
};

export const Large = Template.bind({});
Large.args = {
  buttonText: 'large',
};

export const Small = Template.bind({});
Small.args = {
  buttonText: '42',
};
