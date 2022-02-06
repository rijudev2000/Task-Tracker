import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../Task'
import { Observable} from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='https://my-json-server.typicode.com/rijudev2000/Task-Tracker/db';


  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
     return this.http.delete<Task>(this.apiUrl + task.id);
  }

  updateTaskReminder(task: Task): Observable<Task>{
        return this.http.put<Task>(this.apiUrl+task.id,task, httpOptions);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

} 


