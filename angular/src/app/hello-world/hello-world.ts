import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgFor,NgSwitch,NgSwitchCase,NgIf,NgClass,NgStyle } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule,NgFor,NgSwitch,NgSwitchCase,NgIf,NgClass,NgStyle],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})

export class HelloWorld {
    title:string = "hello world Component";
    oneWay:string = "one way data binding";
    twoWay:string = "two way binding";
    isDisabled:boolean = true;
    count:number = 0;
    eventPayload:string = '';
    movies:string[] = ["movie1","movie2","movie3", "movie4"];
    ngSwitch:number = 1;
    ngIf:boolean = true;
    color:string = 'blue';
    clickMe(){
      this.count++;
      console.log(this.count)
    }

    handleEventPayload(event:any){
      this.eventPayload = (event.target as HTMLInputElement).value
    }
}
