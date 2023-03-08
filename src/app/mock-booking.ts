import { Booking } from "./booking";

export const Bookings: Booking[] = [
    {
        id:1,
        name:"John Doe",
        roomNumber:100,
        startDate: new Date(),
        endDate: new Date("2023-03-24")
    },
    {
        id:2,
        name:"Gas Treibhaus",
        roomNumber:50,
        startDate: new Date("2023-09-05"),
        endDate: new Date("2023-09-19")
    },
    {
        id:3,
        name:"Franzl im Hioz",
        roomNumber:2,
        startDate: new Date("2023-07-01"),
        endDate: new Date("2023-07-08")
    },
    {
        id:4,
        name:"Traunstein Spitz",
        roomNumber:23,
        startDate: new Date("2023-05-02"),
        endDate: new Date("2023-05-16")
    },
    {
        id:5,
        name:"Franz Losahütte",
        roomNumber:33,
        startDate: new Date("2023-06-13"),
        endDate: new Date("2023-06-20")
    }
];