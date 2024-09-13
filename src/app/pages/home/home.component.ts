import { Component,inject,OnInit} from '@angular/core';
import { EventService } from '../../service/event.service';
import { IAPIResponse, IEvent } from '../../model/model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  eventList:IEvent[]=[];
  eventService=inject(EventService);
  ngOnInit(): void {
    debugger;
    this.getEvents(); 
  }
  getEvents(){
    debugger;
    this.eventService.getAllEvents().subscribe((res:IAPIResponse)=>{
      debugger;
      this.eventList=res.data;

    })
  }

}
