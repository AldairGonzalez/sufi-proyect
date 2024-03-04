import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custome-button',
  standalone: true,
  imports: [],
  templateUrl: './custome-button.component.html',
  styleUrl: './custome-button.component.css'
})
export class CustomeButtonComponent {
  @Output() btnClick = new EventEmitter<void>();
  @Input() isDownload: boolean = false;
  @Input() showText: boolean = false;
  @Input() buttonText: string = '';
  @Input() typeButton: string = '';

  onClick() {
    this.btnClick.emit();
  }
}

