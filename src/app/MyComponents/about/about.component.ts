import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private router: Router,private formBuilder: FormBuilder) { }

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
};






}
