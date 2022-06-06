import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  apiURL=" https://api.themoviedb.org/3/";

  getMovieforActor(nombre:string){
    return this.http.get<any>(this.apiURL+"search?q="+nombre);
  }

  getdetallepelicula(idalbum:number){
  
    return this.http.get<any>(this.apiURL+"album/"+idpelicula+"/tracks");
  }



}
