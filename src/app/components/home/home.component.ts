import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {timeout} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // this.router.navigate(['/configuration']);
  }

}
