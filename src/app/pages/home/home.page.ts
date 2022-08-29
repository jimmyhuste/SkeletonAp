import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { AlertController, createAnimation, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // code de scanner 
  options: BarcodeScannerOptions;
  encodeText: string='';
  encodedData: any={};
  scannedData: any={};
  // 
  naci: Date = new Date();
  nombre: string;
  apellido : string;
  userHome: string;
  rut: number; 
  fecha_nacimiento: any;
  carrera: string;

  value = "RegistrApp";
  correo: NgModel;
  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private alertController:AlertController,
    public navCtrl: NavController, public scanner:BarcodeScanner
    
    ) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user; 
        console.log("Dato a mostrar" + this.userHome) 
        console.log(params);    
        }
      });
    }
    
    //Metodo para mostrar 
    Mostrar(){
      if ( this.nombre != null && this.apellido != null ) {
        this.presentAlert();
      }else{
        this.validData();
      }
     
    }

    async validLimpiar(){
      const alert = await this.alertController.create({
        header: 'Upps Error!',
        subHeader: 'Lo sentimos!',
        message: 'No se puede limpiar ya que no hay registro en el sistema   ¡Gracias!',
        buttons: ['Aceptar'],
      

      });
      await alert.present();
    }


    

  // codigo QR
  codigoQR(){

    if ( this.nombre != null && this.apellido != null ) {
    }else{
      this.codeQR();
  }
  
    this.options = {
               prompt:"Scan your QR or barcode"
                    };
    this.scanner.scan(this.options).then((data) =>{
    this.scannedData = data;
    }, (err) =>{
      console.log("Error : ", err);
    })
      }

  async codeQR(){
    const alert = await this.alertController.create({
      header: 'Upps Error!',
        subHeader: 'Lo sentimos!',
        message: 'No se puede ESCANEAR el código ya que no hay registro en el sistema   ¡Gracias!',
        buttons: ['Aceptar'],
      
    });
    await alert.present();
  }
    // metodo para marcar asistencia
    async asistencia(){
      const alert = await this.alertController.create({
        header: 'Información',
        subHeader: 'Estimado(a) ' + this.nombre,
        message: 'Su asistencia fue marcada exitosamente ¡Gracias!',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }

    async validData(){
      const alert = await this.alertController.create({
        header: 'Upps Error!',
        subHeader: 'Lo sentimos!',
        message: 'No hay datos que mostrar    ¡Gracias!',
        buttons: ['Aceptar'],
      

      });
      await alert.present();
    }
    

    //Metodo de alerta 
   async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Usuario:  ' + this.userHome,
      message: 'Nombre es : ' + this.nombre 
      + '  Apellido:'  + this.apellido + '  ' + 'Rut: ' + this.rut,
    
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

  

//   const fs = require("fs");
// const qrcode = require("qrcode");

// const urlCv = "https://image.shutterstock.com/image-vector/realistic-perspective-front-laptop-keyboard-600w-1898574319.jpg";

// const run = async() => {
//   const QR = await qrcode.toDataURL(urlCv)
//   const htmlContent =  `
//   <div style="display: flex; justify-content: center; align-items: center;">
//   <h2>DOCENTES</h2>
//   <img src="${QR}">
//   </div>
//   `;
//   fs.writeFileSync('./index.html', htmlContent)
// }

// run()

}
