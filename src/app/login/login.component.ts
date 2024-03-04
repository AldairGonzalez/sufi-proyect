import { Component } from '@angular/core';
import {CustomeButtonComponent} from '../custome-button/custome-button.component';
import {CampoTextComponent} from '../campo-text/campo-text.component';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CustomeButtonComponent, CampoTextComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  login(){
    this.router.navigate(['/default']);
  }
}
