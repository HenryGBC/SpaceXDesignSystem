import { Event, Component, Host, h, State, Listen, Method, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'toggle-component',
  styleUrl: 'toggle-component.css',
})
export class ToggleComponent {
  @State() isActive: boolean = false;
  @Prop() valueOne: string;
  @Prop() valueTwo: string;
  @Event() valueToggle: EventEmitter<any>;

  @Listen('click')
  handleClick() {
    this.isActive = !this.isActive;
    this.resultToggle();
  }

  @Method()
  async toggle() {
    this.isActive = !this.isActive;
    this.resultToggle();
  }

  resultToggle() {
    let values = {};
    values[this.valueOne] = !this.isActive;
    values[this.valueTwo] = this.isActive;
    this.valueToggle.emit(values);
  }

  render() {
    return (
      <Host>
        <div class="buttons">
          <button class={{ btn: true, active: !this.isActive }}>{this.valueOne}</button>
          <button class={{ btn: true, active: this.isActive }}>{this.valueTwo}</button>
        </div>
      </Host>
    );
  }
}
//  <button class="btn active" onClick={(event: UIEvent) => this.handleClick(event)}>
//             Systems
//           </button>
//           <button class="btn" onClick={(event: UIEvent) => this.handleClick(event)}>
//             Cabin
//           </button>
