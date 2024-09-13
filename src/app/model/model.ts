export interface IAPIResponse{
    message:String;
    result:boolean;
    data:any;
}

export interface IEvent {
    eventId: number;
    eventName: string;
    startDate: any;
    startTime: string;
    endDate: any;
    organizerName: string;
    userId: number;
    price: number;
    location: string;
    imageUrl: string;
  }
  