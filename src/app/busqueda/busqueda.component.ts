import { Component } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  movies:any;
  pelicula:any;
  frmPersona:any;
  arryNuevoALbum:any=[];
  modal: any;
  

  constructor(private MovieService:MovieServiceService){}

  searchMovie(nombre:any){
    let d;
    if(nombre.value){
      d=nombre.value;
    }else{
      d=nombre;
    }
   this.MovieService.getMovieforActor(d).subscribe({
    next: (s) =>{
      this.movies=s.data;
     //this.getAlbumforartist(this.musicas[0].artist.id);
      //this.cargarAlbum();
    },
    error: (e)=>{
    },
   })
  }

  getDetalleMovie(id:number){
    this.MovieService.getdetallepelicula(id).subscribe({
      next: (s) =>{
        this.modal.open;
       this.pelicula=s.data;
       },
       error: (e)=>{
         debugger
       },
    })
  }
  

}
