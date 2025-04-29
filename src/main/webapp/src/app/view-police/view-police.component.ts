import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  standalone: true,
  selector: 'app-view-police',
  templateUrl: './view-police.component.html',
  imports: [CommonModule]
})
export class ViewPoliceComponent implements OnInit {
  policeList: Police[] = [];

  constructor(private policeService: PoliceService) {
    console.log("✅ ViewPoliceComponent loaded");
  }

  ngOnInit(): void {
    this.policeService.getAll().subscribe(data => {
      this.policeList = data;
    });
  }
}
