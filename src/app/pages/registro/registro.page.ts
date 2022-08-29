import { NavController, AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, EmailValidator, NgModel } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  value = "RegistrApp";
  correo: string;

  email = new FormGroup({
    correo: new FormControl('',[Validators.required, Validators.minLength(8), Validators.email, Validators.maxLength(30)]),
  });


  constructor(private navCtrl: NavController,private router: Router, 
    private alertController:AlertController) { }   
  
    
  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: {correo: this.email.value.correo}
      };
      this.router.navigate(['/mipaginados'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }

  enviar() {
    let navigationExtras: NavigationExtras = {
      };

      if ( this.correo !=null && this.email.valid){
        this.router.navigate(['/mipaginados'],navigationExtras);
      }else{
        this.alerta();
      }
  }
  volver() {
    let navigationExtras: NavigationExtras = {
      };
      this.router.navigate(['/mipaginados'],navigationExtras);
  }
  
 

  //Metodo de alerta 
   async alerta(){
     const alert = await this.alertController.create({
       header: 'Error Email',
       subHeader: 'Warning! ',
       message: 'Debes ingresar un correo válido' +   ' ' + "Ej:  jimmy@gmail.com",
       buttons: ['Aceptar'],
     });
     await alert.present();
   }
  ngOnInit() {
  }
   


}
