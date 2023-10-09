import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allCourses:any[]=[]
  filterBy:any

  constructor(private _ApiService:ApiService , private _ActivatedRoute:ActivatedRoute ){}
  
  ngOnInit(): void {
    this._ApiService.getCourses().subscribe({
      next:(data)=>{
        this.allCourses = data
      }
    })
  }
   filter() {
    if (this.filterBy == '') {
      this.allCourses = this.allCourses;
    } else {
      this.allCourses = [...this.allCourses.filter(course => course.Course_name.includes(this.filterBy))];
    }
  }
  


}
