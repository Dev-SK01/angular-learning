import { Component } from '@angular/core';
import { ListCar } from '../list-car/list-car';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-form',
  imports: [ListCar,FormsModule,CommonModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css'
})

export class CarForm {
   cars:string[] = [];
   carName:string = '';// two way binding

   addCar(){
    this.cars.push(this.carName);
    this.carName ='';
   }

   onSubmit(formData:NgForm){
      console.log(formData)
   }
}
