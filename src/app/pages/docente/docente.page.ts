import { createAnimation, NavController } from '@ionic/angular';
import { Component,  } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage  {


  value ="RegistrApp";
  
  options: BarcodeScannerOptions;
    encodeText: string='';
    encodedData: any={};
    scannedData: any={};
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner) {

  }


  
encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
      this.encodedData = data;
      console.log(" trying to encode ");
      
    } , 
    (err) => {
    console.log("Error is: ", err);
    })
        }

  

  // funcion de generar codigo QR
  // generarQR() {
  //   console.log("estamos dados")
  // }


  
  // // funcion
  // animacion(){

  //   const animation = createAnimation()
  //       .addElement(document.querySelector('#card'))
  //       .duration(2000)
  //       .iterations(Infinity)
  //       .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  //       .fromTo('opacity', '1', '0.2');
  //       animation.play();
        
  //   }
    


}
