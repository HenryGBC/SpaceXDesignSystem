import { html } from 'lit-html';

export default {
  title: 'Components/Chart component',
  component: 'chart-component', // which is also found in the `custom-elements.json`
  argTypes: {
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    unit: { control: { type: 'text' } },
    percentage: { control: { type: 'text' } },
    color: { control: { type: 'text' } },
  },
};

export const basic = ({ name, value, unit, percentage, color }) =>
  html`<chart-component name="${name}" value="${value}" unit="${unit}" percentage="${percentage}" color="${color}"></chart-component>`;
basic.args = {
  name: 'Cabin Temp',
  value: '12.41',
  unit: '°C',
  percentage: '20%',
  color: '#E72D2D',
};
