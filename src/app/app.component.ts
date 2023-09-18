import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  cities = ["Bucharest", "Barcelona", "London", "Paris", "Berlin", "Rome", "Lisbon"];

  cityControl= new FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
  }

  ngOnDestroy() {}
}