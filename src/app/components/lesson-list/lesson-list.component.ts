import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { S } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [NgFor,LessonDetailsComponent],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  gymLessons = [
    {
      lessonName: "Yoga for Beginners",
      teacherName: "Sarah Cohen",
      NumberSessions: 8,
      StartDate: new Date("2025-06-01"),
      price: 300,
      day: "Sunday",
      lessonTime: "18:00"
    },
    {
      lessonName: "Pilates Core",
      teacherName: "Dana Levi",
      NumberSessions: 10,
      StartDate: new Date("2025-06-03"),
      price: 350,
      day: "Tuesday",
      lessonTime: "19:00"
    },
    {
      lessonName: "HIIT Training",
      teacherName: "Yossi Mizrahi",
      NumberSessions: 12,
      StartDate: new Date("2025-06-02"),
      price: 400,
      day: "Monday",
      lessonTime: "20:00"
    },
    {
      lessonName: "Zumba Dance",
      teacherName: "Lina Abadi",
      NumberSessions: 8,
      StartDate: new Date("2025-06-05"),
      price: 320,
      day: "Thursday",
      lessonTime: "17:30"
    },
    {
      lessonName: "Strength & Conditioning",
      teacherName: "David Baruch",
      NumberSessions: 10,
      StartDate: new Date("2025-06-04"),
      price: 450,
      day: "Wednesday",
      lessonTime: "18:45"
    },
    {
      lessonName: "Stretching and Flexibility",
      teacherName: "Tamar Ben-Ami",
      NumberSessions: 6,
      StartDate: new Date("2025-06-06"),
      price: 250,
      day: "Friday",
      lessonTime: "08:00"
    },
    {
      lessonName: "Boxing Basics",
      teacherName: "Oren Cohen",
      NumberSessions: 10,
      StartDate: new Date("2025-06-07"),
      price: 370,
      day: "Saturday",
      lessonTime: "09:30"
    },
    {
      lessonName: "Cardio Kickboxing",
      teacherName: "Roni Levi",
      NumberSessions: 8,
      StartDate: new Date("2025-06-08"),
      price: 330,
      day: "Sunday",
      lessonTime: "10:00"
    },
    {
      lessonName: "Dance Cardio",
      teacherName: "Maya Cohen",
      NumberSessions: 12,
      StartDate: new Date("2025-06-09"),
      price: 380,
      day: "Monday",
      lessonTime: "11:00"
    },
    {
      lessonName: "Aqua Aerobics",
      teacherName: "Tali Barak",
      NumberSessions: 10,
      StartDate: new Date("2025-06-10"),
      price: 290,
      day: "Tuesday",
      lessonTime: "12:00"
    },
    {
      lessonName: "Indoor Cycling",
      teacherName: "Eli Cohen",
      NumberSessions: 8,
      StartDate: new Date("2024-06-11"),
      price: 360,
      day: "Wednesday",
      lessonTime: "13:00"
    },
    {
      lessonName: "Body Pump",
      teacherName: "Nir Levi",
      NumberSessions: 10,
      StartDate: new Date("2023-06-12"),
      price: 400,
      day: "Thursday",
      lessonTime: "14:00"
    },
    {
      lessonName: "Yoga Flow",
      teacherName: "Yael Cohen",
      NumberSessions: 6,
      StartDate: new Date("2025-06-13"),
      price: 280,
      day: "Friday",
      lessonTime: "15:00"
    },
    {
      lessonName: "Kickboxing for Fitness",
      teacherName: "Omer Barak",
      NumberSessions: 10,
      StartDate: new Date("2024-06-14"),
      price: 370,
      day: "Saturday",
      lessonTime: "16:00"
    }
  ];
  
  

}

