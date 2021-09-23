import { Component, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { LoginfoService } from 'src/app/loginfo.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  title1:string;
  

  

  constructor(private router: Router,private formBuilder: FormBuilder, public logininfoservice : LoginfoService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit () {
    this.submitted = true;

   
    if (this.registerForm.invalid) {
        return;
    }

    this.logininfoservice.info(this.registerForm.controls['email'].value)
    
       
    
    
    

    this.router.navigateByUrl('/TODOS');
    
};


   
  

}



