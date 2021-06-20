import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'from': ['', Validators.email],
      'name': ['', Validators.required],
      'subject': ['', Validators.required],
      'body': ['', Validators.required]
    });

   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void{
    console.log('Poruka je poslata: ', value);
  }

}
