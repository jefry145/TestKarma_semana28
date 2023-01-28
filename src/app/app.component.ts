import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  loggeduser!:string
  title = 'actividad28';

  constructor(private formBuilder : FormBuilder,
              private _snackbar : MatSnackBar){}
  
  

  public formLogin= new FormGroup({
    email:new FormControl("" ,[ Validators.required , Validators.email , Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_]+(\\.[c][o][m]+)+")]),
    pass:new FormControl("",[Validators.required , Validators.minLength(6)])

  });
//    = this.formBuilder.group({
//     email: new FormControl["" ,[ Validators.required , Validators.email , Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_]+(\\.[c][o][m]+)+")]],
//     pass:["",[Validators.required , Validators.minLength(6)]]
// });

  ngOnInit():void{
    
  }
  enviar():void{
    this.loggeduser="user pass"

    this._snackbar.open(`Bienvenido ${this.formLogin.value.email}`,"hecho")
    
    console.log(this.formLogin.value)
  }
 
}
