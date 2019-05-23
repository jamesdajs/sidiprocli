import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Photos } from '../models/Photos';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor( private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos?_limit=5')
  }
  getUsuarios(){
    return this.http.get('http://localhost:3000/usuarios')
  }
}
