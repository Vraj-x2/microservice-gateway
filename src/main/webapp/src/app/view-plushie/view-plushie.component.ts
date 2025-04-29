import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plushie } from '../plushie';
import { PlushieService } from '../plushie.service';

@Component({
  standalone: true,
  selector: 'app-view-plushie',
  templateUrl: './view-plushie.component.html',
  imports: [CommonModule]
})
export class ViewPlushieComponent implements OnInit {
  plushies: Plushie[] = [];

  constructor(private plushieService: PlushieService) {
    console.log("✅ ViewPlushieComponent loaded");
  }

  ngOnInit(): void {
    this.plushieService.getAll().subscribe(data => {
      this.plushies = data;
    });
  }

  delete(id: number): void {
    this.plushieService.delete(id).subscribe(() => {
      this.plushies = this.plushies.filter(p => p.id !== id);
    });
  }

  purchase(p: Plushie): void {
    if (p.quantity && p.quantity > 0) {
      p.quantity -= 1;
      this.plushieService.update(p).subscribe();
    }
  }
}
