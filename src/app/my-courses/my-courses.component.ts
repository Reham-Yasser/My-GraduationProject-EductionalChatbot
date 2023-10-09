import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  myCourses: any[] = []
  levelValue: any
  trackValue: any
  constructor(private _ApiService: ApiService) { }
  ngOnInit(): void {
    const track = localStorage.getItem('trackValue');
    if (track) {
      this.trackValue = track;
    } else {
      this.trackValue = 1; 
    }
    const level = localStorage.getItem('levelValue');
    if (level) {
      this.levelValue = level;
    } else {
      this.levelValue = 1; 
    }
    if (this.trackValue !== null && this.levelValue !== null) {
      this._ApiService.getMyCourses(this.trackValue, this.levelValue).subscribe({
        next: (data) => {
          this.myCourses = data
          console.log(this.myCourses)
        }
      })
    }


  }

}
