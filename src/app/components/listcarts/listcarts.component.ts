import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Photos } from 'src/app/models/Photos';

@Component({
  selector: 'app-listcarts',
  templateUrl: './listcarts.component.html',
  styleUrls: ['./listcarts.component.scss']
})
export class ListcartsComponent implements OnInit {
list:Photos[]
  constructor(private fotos:ConsultasService) { }

  ngOnInit(){
    this.fotos.getPhotos()
    .subscribe(data=>{
      console.log(data)
      this.list=data
    },err=>{
      console.log(err)
    })
    /*this.fotos.getUsuarios()
    .subscribe(data=>{
      console.log(data)
    })*/
  }

}
