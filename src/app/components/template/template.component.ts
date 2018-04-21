import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
    `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false,
    contrasena: null,
    confirmar: null
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },{
    codigo: "ESP",
    nombre: "Espana"
  },{
    codigo: "VZL",
    nombre: "Venezuela"
  }];

  constructor() { }

  guardar(forma:NgForm){
    console.log("formulario posteado");
    console.log("ngForm ",forma);
    console.log("valor", forma.value);
    console.log("Usuario", this.usuario);
  }

}
