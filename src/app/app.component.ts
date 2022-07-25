import { Component } from '@angular/core';
interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOLA';

  public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void {
    this.ArregloTarjetas=[
    {titulo:'video', subtitulo:'subtitulo video 1', nro:5},
    {titulo:'video', subtitulo: 'subtitulo video 2', nro:6},
    {titulo:'video', subtitulo: 'subtitulo video 3', nro:7},
]
}
}
