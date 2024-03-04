import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-campo-text',
  standalone: true,
  imports: [],
  templateUrl: './campo-text.component.html',
  styleUrl: './campo-text.component.css'
})
export class CampoTextComponent {
  @Input() labelText: string = '';
  @Input() typeInput: string = '';
  @Input() idInput: string = '';
  @Input() nameInput: string = '';
}
