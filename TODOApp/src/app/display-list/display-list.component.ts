import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/Services/api.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  tasks: any;
  addFlag: boolean = false;
  edit: boolean = false;
  errorMessage: string;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getTodoList();
  }
  getTodoList() {
    this.apiService.getTodoList().subscribe((data) => {
      this.tasks = data
      for (let data of this.tasks) {
        data['editing'] = false;
      }
    });
  }

  deleteTodoItem(id) {
    this.apiService.deleteododItem(id).subscribe((data) => {
      this.getTodoList();
    },
    error => {
      this.errorMessage = 'Something went wrong!!';
      alert(this.errorMessage);
    })
  }

  addItemToList(value) {
    this.getTodoList();
  }

  editListItem(task) {
    const editObj = {
      title: task.title,
      text: task.text,
    };
    this.apiService.updateTododItem(editObj, task.id).subscribe((data) => {
      this.getTodoList();
      task.editing = false;
    },
    error => {
      this.errorMessage = 'Something went wrong!!';
      alert(this.errorMessage);
    });
  }
}
