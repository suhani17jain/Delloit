import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/Services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public apiService: ApiService) { }
  tasks;
  filteredTitle: string;
  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.apiService.getTodoList().subscribe((data) => {
      this.tasks = data
    });
  }
}
