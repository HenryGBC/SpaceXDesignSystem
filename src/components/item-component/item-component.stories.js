import { html } from 'lit-html';

export default {
  title: 'Components/Item component',
  component: 'item-component', // which is also found in the `custom-elements.json`
  argTypes: {},
};

export const basic = () => html` <item-component></item-component> `;
// basic.args = {
//   first: 'Stencil',
//   middle: '😎',
//   last: "'Don't call me a framework' JS",
// };
