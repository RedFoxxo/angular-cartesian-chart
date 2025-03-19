import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PointerPositionModel, RectModel } from '../models';

@Directive({
  selector: '[libPointerPosition]'
})
export class PointerPositionDirective {
  @Input()
  public area?: RectModel;

  @Output()
  public position = new EventEmitter<PointerPositionModel | undefined>();

  private isOut = true;
  private currentPosition?: PointerPositionModel;

  constructor() { }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent): void {
    if (!this.isOut && this.area) {
      const nextPosition = this.getPosition(event, this.area);

      if (nextPosition !== this.currentPosition) {
        this.currentPosition = nextPosition;
        this.position.emit(this.currentPosition);
      }
    }
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.isOut = true;
    this.position.emit(undefined);
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.isOut = false;
  }

  private getPosition(event: MouseEvent, area: RectModel): PointerPositionModel | undefined {
    const target = event.target as HTMLElement;

    if (target.classList.contains('dot')) {
      const xDot = target.getAttribute('x');
      const yDot = target.getAttribute('y');

      return {
        isDot: true,
        xDot: xDot ? Number(xDot) : undefined,
        yDot: yDot ? Number(yDot) : undefined,
        dotColor: (target.attributes as any)?.color?.value,
        x: target.offsetLeft - area.left,
        y: target.offsetTop - area.top
      }
    } else {
      const x = event.offsetX - area.left;
      const y = event.offsetY - area.top;

      return x < 0 || y < 0 || x > area.width || y > area.height
        ? undefined
        : { x, y, isDot: false };
    }
  }
}
