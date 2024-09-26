import { Component } from '@angular/core';
import { PruebasComponent } from "../pruebas/pruebas.component";

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [PruebasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

}
