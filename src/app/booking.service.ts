import { Injectable } from '@angular/core';
import { Bookings } from './mock-booking';
import { Booking } from './booking';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  bookingUrl = "/api/bookings";

  //List of Bookings async
  getBookings() : Observable<Booking[]>{
    var response = this.httpClient.get<Booking[]>(this.bookingUrl);
    return response;
  }
  //delete booking async
  remove(currentBooking: Booking): Observable<Booking> {
    var response = this.httpClient.delete<Booking>(this.bookingUrl+"/"+currentBooking.id);
    console.log(response);
    return response;
  }
  //edit booking async
  getBookingById(editId: number) : Observable<Booking> {
    var response = this.httpClient.get<Booking>(this.bookingUrl+"/"+editId);
    return response;
  }

  //add booking async
  addBooking(newBooking:Booking): Observable<Booking> {
    var response = this.httpClient.post<Booking>(this.bookingUrl, newBooking);
    return response;
  }

}
