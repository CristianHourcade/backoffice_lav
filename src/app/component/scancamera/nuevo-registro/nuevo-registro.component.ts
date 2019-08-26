import { Component, OnInit } from '@angular/core';
import { GetDataCloudFirestoreService } from 'src/app/services/get-data-cloud-firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss']
})

export class NuevoRegistroComponent implements OnInit {

  clientScanner : any;
  products : any;
  cantidad : number;
  productSelected : any;

  constructor(
    private CloudFirestoreDatabase : GetDataCloudFirestoreService,
    private ActivedRoute : ActivatedRoute
    ) { 
      this.clientScanner= {
        email:""
      }
      this.cantidad = null;
    }

  ngOnInit() {

    alert("HOLAAAA ESTAS POR AGREGAR VENTA")

    this.CloudFirestoreDatabase.getProductos()
    .subscribe(data => {  
      this.products = data;
    });

    const slug = this.ActivedRoute.snapshot.params["idcliente"]

    this.CloudFirestoreDatabase.getClientes()
    .subscribe(data => {
      data.map(element => {
        if(element['uid'] === slug){
          this.clientScanner = element;
        }
      });
    })
  }

  agregarVenta(){
    
    /** Value of product */
    let valorPrecio = 0;
    this.products.forEach(element => {
      if(element.nombre.toUpperCase() === this.productSelected.toUpperCase()){
        valorPrecio = element.precio;
      }
    });

    /** Date of today */
    var f = new Date();
    var fechaHoy = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 
    
    /** Calculate points */
    if(this.clientScanner.puntos === undefined){
      this.clientScanner.puntos = ((valorPrecio*10)/100) * this.cantidad;
    }else{
      this.clientScanner.puntos = (((valorPrecio*10)/100) * this.cantidad)+this.clientScanner.puntos;
    }

    console.log(this.clientScanner.puntos);
    console.log((((valorPrecio*10)/100) * this.cantidad));
    alert("la cantidad: "+ this.cantidad);
    alert("%"+(valorPrecio*10)/100);
    alert(this.clientScanner.puntos);
    /** Ultimate payment */
    this.clientScanner.ultimaCompra = fechaHoy;


    /** Venta register */
    let venta = {
      email: this.clientScanner.email,
      precio: valorPrecio * this.cantidad,
      producto: this.productSelected,
      cantidad: this.cantidad,
      uid:this.clientScanner.uid,
      fecha: fechaHoy
    }

    /** Services Call */
    this.CloudFirestoreDatabase.agregarVenta(venta);
    this.CloudFirestoreDatabase.agregarPuntos(this.clientScanner);   
  }
}
