import { Component, Input } from '@angular/core';
import { CartesianElementModel } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-legend',
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.less',
  imports: [
    CommonModule
  ],
})
export class LegendComponent {
  @Input()
  public cartesianValues: CartesianElementModel[];

  @Input()
  public fontFamily: string;

  constructor() {
    this.fontFamily = 'Arial';
    this.cartesianValues = [];
  }
}
