import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plushie } from '../plushie';
import { PlushieService } from '../plushie.service';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  standalone: true,
  selector: 'app-add-plushie',
  templateUrl: './add-plushie.component.html',
  imports: [CommonModule, FormsModule]
})
export class AddPlushieComponent implements OnInit {
  plushie: Plushie = {};
  policeList: Police[] = [];

  constructor(
    private plushieService: PlushieService,
    private policeService: PoliceService
  ) {
    console.log("✅ AddPlushieComponent loaded");
  }

  ngOnInit(): void {
    this.policeService.getAll().subscribe((data: Police[]) => {
      this.policeList = data;
    });
  }

  save(): void {
    if (
      this.plushie.name?.trim() &&
      this.plushie.price !== undefined &&
      this.plushie.quantity !== undefined &&
      this.plushie.employeeName?.trim()
    ) {
      this.plushieService.create(this.plushie).subscribe(() => {
        this.plushie = {};
      });
    }
  }
}
