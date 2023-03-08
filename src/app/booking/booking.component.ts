import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
//import { Booking } from '../booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private bookingService:BookingService){}
  //Liste von mehreren Bookings
  bookings : Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }

  remove(currentBooking: Booking): void {
    this.bookingService.remove(currentBooking).subscribe();
    this.bookings = this.bookings.filter(b => b != currentBooking);
  }
}
