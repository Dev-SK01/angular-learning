import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight';



@Component({
  selector: 'app-hello-world',
  imports: [FormsModule,CommonModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css',
  standalone:true,
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
    pipeDate = new Date();
    pipeMessage = "hello i'm an message for pipe";

    
    clickMe(){
      this.count++;
      console.log(this.count)
    }

    handleEventPayload(event:any){
      this.eventPayload = (event.target as HTMLInputElement).value
    }
}
