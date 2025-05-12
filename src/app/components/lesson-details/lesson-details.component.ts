import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component ,Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [MatCardModule, NgClass,NgIf,NgStyle],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {

  @Input() lesson: any ;
  getCardClass(): string {
    switch (this.lesson?.day) {
      case 'Sunday':
        return 'day-sunday';
      case 'Monday':
        return 'day-monday';
      case 'Tuesday':
        return 'day-tuesday';
      case 'Wednesday':
        return 'day-wednesday';
      case 'Thursday':
        return 'day-thursday';
      case 'Friday':
        return 'day-friday';
      default:
        return 'day-default';
    }
  }
  isStartDatePast(): boolean {
    const today = new Date();
    return this.lesson?.StartDate < today;
  }
}
