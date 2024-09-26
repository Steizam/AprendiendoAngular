import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    standalone: true, // declaramos el componente como standalone
    templateUrl: './mi-componente.component.html',
})

export class MiComponente {

    // Podemos definir propiedades y definir su tipo
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        // Inicializamos las propiedades con valores 
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer COMENTARIO";
        this.year = new Date().getFullYear(); // función para obtener el año natural 
        console.log(this.titulo, this.comentario, this.year);
        console.log("Componente creado correctamente");
    }

}