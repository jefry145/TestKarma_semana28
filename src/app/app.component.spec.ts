import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators   } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppMaterial } from './angular.material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        AppMaterial,
        ReactiveFormsModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'actividad28'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('actividad28');
  });
  it("test de formulario invalido",() =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
     

    expect(app.formLogin.valid).toBe(false)
  });
  it('test de formulario valido',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let email=app.formLogin.controls['email'];
    let password=app.formLogin.controls['pass'];
    email.setValue('hola@gmail.com')
    password.setValue('123456')
    expect(app.formLogin.valid).toBe(true)
  });
  it('test de mensaje de exito de formulario',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let email=app.formLogin.controls['email'];
    let password=app.formLogin.controls['pass'];
    email.setValue('hola@gmail.com')
    password.setValue('123456')
    
    let button = fixture.debugElement.query(By.css(`#button`))
    button.nativeElement.click()

    expect(app.loggeduser).toEqual("user pass")
  })

});
