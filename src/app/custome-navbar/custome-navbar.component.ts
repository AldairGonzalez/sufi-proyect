import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custome-navbar',
  standalone: true,
  imports: [],
  templateUrl: './custome-navbar.component.html',
  styleUrl: './custome-navbar.component.css'
})
export class CustomeNavbarComponent {
  showText:boolean = true;
  minWidthRequired:number = 460;

  constructor(private router: Router) {}

  screenValidation(){
    if(window.innerWidth < this.minWidthRequired){
      this.showText = false;
    }else{
      this.showText = true;
    }
  }

  ngOnInit() {
    this.screenValidation();
    window.addEventListener('resize', () => {
      this.screenValidation();
    });
  }

  onClick() {
    this.router.navigate(['/login']);
  }
}
