import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/task'

  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl+'/all');
  }

  deleteTask(task : Task):Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/delete?id=${task.id}`)
  }

  updateReminder(task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/update`,task)
  }
}
