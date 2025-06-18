import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'my-root',
  imports: [RouterOutlet,HelloWorld,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular Learning';
}
