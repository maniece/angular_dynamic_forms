import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      address: new FormArray([new FormControl(null)]),
    });
  }

  addAddress() {
    const control = <FormArray>this.registrationForm.get('address');
    control.push(new FormControl(null));
  }

  removeAddress(index) {
    (<FormArray>this.registrationForm.get('address')).removeAt(index);
  }

  OnSubmit() {
    console.log(this.registrationForm.value);
  }
}
