import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder) { }

  booking: Booking = {
    id: 120,
    name: "Hallo Name",
    roomNumber: 15,
    startDate: new Date(),
    endDate: new Date()
  }

  bookingForm = this.formBuilder.group({
    id: ['',Validators.required],
    name: ['',Validators.compose([Validators.required, Validators.minLength(5)])],
    roomNumber: ['',Validators.required],
    startDate: ['',Validators.required],
    endDate: ['',Validators.required]
  });

  ngOnInit(): void {
    if (this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
        this.bookingForm.setValue({
          id: this.booking.id.toString(),
          name: this.booking.name,
          roomNumber: this.booking.roomNumber.toString(),
          startDate: this.booking.startDate.toString(),
          endDate: this.booking.endDate.toString()
        });
      });
    }
  }

  save(): void {
    this.booking.id = Number(this.bookingForm.get('id')?.value);
    this.booking.name = this.bookingForm.get('name')?.value!;
    this.booking.roomNumber = Number(this.bookingForm.get('roomNumber')?.value);
    var dateString = this.bookingForm.get('startDate')?.value!;
    this.booking.startDate = new Date(dateString);
    dateString = this.bookingForm.get('endDate')?.value!;
    this.booking.endDate = new Date(dateString);

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean): void {
    //console.log("Change Date");
    var val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }

}
