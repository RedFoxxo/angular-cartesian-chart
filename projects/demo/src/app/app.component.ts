import { Component } from '@angular/core';
import { CartesianChartComponent, CartesianElementModel } from '@foxxo/cartesian-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [
    CartesianChartComponent
  ],
})
export class AppComponent {
  public data: CartesianElementModel[] = [
    {
      name: 'Minimum threshold',
      color: '#FF3D00',
      opacity: 0.8,
      type: 2,
      points: [
        {
          x: 0,
          y: -10,
        },
      ],
      dash: [5, 5],
      areDotsHidden: true,
    },
    {
      name: 'Maximum threshold',
      color: '#FF3D00',
      opacity: 0.8,
      type: 2,
      points: [
        {
          x: 0,
          y: 10,
        },
      ],
      dash: [5, 5],
      areDotsHidden: true,
    },
    {
      name: 'Data 1',
      color: '#13ACDC',
      type: 4,
      points: [
        { x: 1, y: 10 },
        { x: 2, y: 8 },
        { x: 3, y: 9 },
        { x: 4, y: 8 },
        { x: 5, y: 6 },
        { x: 6, y: 4 },
        { x: 7, y: 2 },
        { x: 8, y: -3 },
        { x: 9, y: -4 },
        { x: 10, y: -7 },
        { x: 11, y: -3 },
        { x: 12, y: 3 }
      ],
    },
    {
      name: 'Data 2',
      color: '#FF5722',
      type: 3,
      points: [
        { x: 1, y: 0.4 },
        { x: 2, y: 2 },
        { x: 3, y: 12 },
        { x: 4, y: 5 },
        { x: 5, y: 3 },
        { x: 6, y: 6 },
        { x: 7, y: 13 },
        { x: 8, y: -11 },
        { x: 9, y: -4 },
        { x: 10, y: 0 },
        { x: 11, y: -3 },
        { x: 12, y: -10 }
      ],
    },
  ];
}
