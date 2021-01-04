import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'progress-component',
  styleUrl: 'progress-component.css',
  shadow: true,
})
export class ProgressComponent {
  @Prop() percentage: string;

  render() {
    const barStyle = {
      backgroundColor: '#298BFE',
      width: this.percentage,
    };

    return (
      <div class="progress-item">
        <div class="progress-item__content">
          <div class="progress-item__bar">
            <div class="bar" style={barStyle}></div>
          </div>
        </div>
      </div>
    );
  }
}
