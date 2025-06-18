import { Component, Input,OnChanges,SimpleChanges,OnInit,DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-car',
  imports: [CommonModule],
  templateUrl: './list-car.html',
  styleUrl: './list-car.css'
})
export class ListCar implements OnChanges,OnInit,DoCheck {
  @Input('parentData') cars:string[] = [];

  ngOnChanges(changes:SimpleChanges):void{
    console.log("LifeCycle:" , changes)
  }
  ngOnInit():void{
    console.log("Compoent Mounted");
  }
  ngDoCheck():void{
    console.log("Keyboard.mouse event happens!")
  }
}
