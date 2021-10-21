import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';
import { LoginfoService } from 'src/app/loginfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  title1:string;
  

  

  constructor(private router: Router,private formBuilder: FormBuilder, public logininfoservice : LoginfoService) { 
    console.log("loginmodule works")
  }

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
    this.router.navigateByUrl('/TODOS');

    this.logininfoservice.setinfo(this.registerForm.controls['email'].value);
    
    
  };
}
