import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient: HttpClient) { }

  // headers= new HttpHeaders({
  //   'Access-Control-Allow-Origin': 'http://localhost:4200',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  //   'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  // })

  getCourses(): Observable<any> {
    return this._HttpClient.get(`assets/courses.json`)
  }

  chat:any = new BehaviorSubject(null) ;
  getReply(message:string): Observable<any> {
    const body = { message :message};
    return this._HttpClient.post(`https://mentor-z6wx.onrender.com//chatbot_text`,body)
  }

  getVoice(message:string): Observable<any> {
    const body = { message :message};
    return this._HttpClient.post(`https://mentor-z6wx.onrender.com//chatbot_text`,body)
  }

  
  getMyCourses(trackValue:number,levelValue:number): Observable<any> {
    return this._HttpClient.get(`http://mentor.somee.com/api/Courses/userCources?TrakId=${trackValue}&LevelId=${levelValue}`);
  }

  getQuiz():Observable<any>{
    return this._HttpClient.get(`assets/Quizs.json`);
  }

  score:any = new BehaviorSubject(null) ;
  postAnswers(score:any):Observable<any>{
    return this._HttpClient.post('http://quizapichatbot.somee.com/api/Scores' ,score)
  }

  // searchCourses(search: string): Observable<any> {
  //   return this._HttpClient.get(`http://educationchatbot.somee.com/api/Courses/allData?Search=${search}`, {
  //     params: { search }
  //   })
  // }

}
