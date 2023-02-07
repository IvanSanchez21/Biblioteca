import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/paginas/entidades/User';
import { NavController, ToastController } from '@ionic/angular';
//import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  datos: User = { 
    id:"",
    correo:"",
    password:"",
    perfil:'cliente'
  }
  constructor(private toastController: ToastController,
              public navController: NavController,) { }

  ngOnInit() {
  }

  async registrar(){
    console.log(this.datos)
    // const res = await this.base.registrarUser(this.datos.correo, this.datos.password).catch(error =>{
    //   this.mostrarMensaje("Ha ocurrido un error")
    // })
    // if(res){
    //   this.mostrarMensaje("Se registro el usuario con exito!!")
    //   const path = 'Clientes';
    //   const id = res.user?.uid
    //   this.base.crearDocumeneto(this.datos, path, id)
      
    // }
  }

  async mostrarMensaje(mensaje: any){
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration:3000
    });
    toast.present();
  }

}
