import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController,NavController,AnimationController,createAnimation} from '@ionic/angular';

@Component({
  selector: 'app-mipaginados',
  templateUrl: './mipaginados.page.html',
  styleUrls: ['./mipaginados.page.scss'],
})
export class MipaginadosPage  {
  value = "RegistrApp";

  animate : boolean;


// contraseña de alumno
  alumno_key: any = 2022;
// contraseña de docente
  docente_key: any = 1234;



  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.email, Validators.minLength(6),Validators.maxLength(30)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
  });

  constructor(private navCtrl: NavController,private router: Router, private alertController:AlertController) { }   
  
    // function de alumnos
  alumnos() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/home'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }

 // function de docentes

  docentes() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/docente'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }

  //Metodo para navegar desde un metodo llamado desde el html
  home(){
    if( this.alumno_key == this.usuario.value.pass){
      this.alumnos();
    }
    // condicion para redireccionar a los usuarios
    else if ( this.docente_key ==  this.usuario.value.pass) {
     this.docentes();
    }else{
      this.presentAlert();
    }
    
    // this.navCtrl.navigateForward('/home');
  }
  
 

  //Metodo de alerta 
   async presentAlert(){
     const alert = await this.alertController.create({
       header: 'Error Login',
       subHeader: 'Infomación : ',
       message: 'Usuario o contraseña son incorrecto',
       buttons: ['Aceptar'],
     });
     await alert.present();
   }

   animacion(){

    const animation = createAnimation()
        .addElement(document.querySelector('#card'))
        .duration(2000)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
        animation.play();
        
    }
    
    
    
    
}
