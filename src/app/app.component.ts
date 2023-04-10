import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = 'Mascarenhas';
  userData = {
    email: 'mattmascarenhas@gmail.com',
    cpf: '045.342.435-45',
  };
  title = 'curso-angular-yt';
}
