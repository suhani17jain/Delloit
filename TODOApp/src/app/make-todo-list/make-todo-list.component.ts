import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/Services/api.service';

@Component({
  selector: 'app-make-todo-list',
  templateUrl: './make-todo-list.component.html',
  styleUrls: ['./make-todo-list.component.css']
})
export class MakeTodoListComponent implements OnInit {
  errorMessage: string;
  todoForm: any;
  @Output() valueChange = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.createTodoForm();
  }

  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]]
    })
  }

  onSubmit() {
    const todoList = {
      title: this.todoForm.value.title,
      text: this.todoForm.value.text,
    }

    this.apiService.addTododItem(todoList).subscribe((data: any) => {
      this.valueChange.emit(true);
      this.todoForm.reset();
    },
      error => {
        this.errorMessage = 'Something went wrong!!';
        alert(this.errorMessage);
        this.valueChange.emit(false);
        this.todoForm.reset();
      }
    )

  }

}
