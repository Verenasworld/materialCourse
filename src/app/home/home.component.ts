import { Component, OnInit } from '@angular/core';
import {COURSES} from '../Model/db-data';
import {Course} from '../Model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private beginnerCourses: Course;
  private advancedCourses: Course;

  constructor() { }

  ngOnInit(): void {
    const courses: any = Object.values(COURSES);

    this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');

    this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
  }

}
