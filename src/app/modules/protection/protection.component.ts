import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Protection")
  }

}
