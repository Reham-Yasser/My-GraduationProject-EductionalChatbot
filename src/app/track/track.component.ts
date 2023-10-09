import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  error: string = ""
  message: string = ""
  level:any;
  track:any;

  trackForm:FormGroup = new FormGroup({
    track: new FormControl(null, [Validators.required]),
    level: new FormControl(null, [Validators.required]),
  })

  submitTrackForm(trackForm: FormGroup) {

      localStorage.setItem('levelValue', this.level);
      localStorage.setItem('trackValue', this.track);
    
      this._Router.navigate(['/login'])
  }

  ngOnInit(): void {

  }

}
