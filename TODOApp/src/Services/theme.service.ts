import { Injectable } from '@angular/core';

export const darkTheme = {
  'background-color': '#1f2935',
  'text-color': '#555555',
  'heading-color':'#fff'
};

export const lightTheme = {
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'heading-color':'#000'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
