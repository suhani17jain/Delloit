import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/Services/api.service';
import { Router } from '@angular/router';
import { ThemeService } from 'src/Services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public api: ApiService,
    private router: Router,
    public theme: ThemeService) { }
  dark: boolean = false;
  title = 'TODOApp';
  ngOnInit(): void { 
    this.theme.toggleLight()
  }

  displayPage(value) {
    this.router.navigate([`/${value}`]);
  }

  toggle(event) {
    event.currentTarget.checked ? this.theme.toggleDark() : this.theme.toggleLight();
  }

}
