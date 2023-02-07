import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs';
import { Reservar } from '../entidades/reservar';
import { ReservarService } from '../servicios/reservar.service';

@Component({
  selector: 'app-tab2c',
  templateUrl: './tab2c.page.html',
  styleUrls: ['./tab2c.page.scss'],
})
export class Tab2cPage implements OnInit {

  reservadas:Reservar[]=[]
  libros1:any=[]
  handlerMessage = '';
  roleMessage = '';
  constructor(
    private alertController: AlertController,
  
    private reservarService: ReservarService,
    private router: Router,) { }

  ngOnInit() {
   
    this.listAllCitas()
  }

  listAllCitas(){
   
    this.reservarService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {


      this.reservadas = data;
      //console.log(this.citas);
      for (let index = 0; index <this.reservadas?.length; index++) {
        if(this.reservadas[index].uid==""+localStorage.getItem("idC")){
          
          
           this.libros1.push(this.reservadas[index])
         
       }
    
     }

      
    console.log(""+localStorage.getItem("uid"))
    console.log(this.reservadas);
   
  console.log(this.libros1);
      
    });
    
}

}
