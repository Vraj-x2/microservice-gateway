import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  standalone: true,
  selector: 'app-add-police',
  templateUrl: './add-police.component.html',
  imports: [CommonModule, FormsModule]
})
export class AddPoliceComponent {
  police: Police = {};

  constructor(private policeService: PoliceService) {
    console.log("✅ AddPoliceComponent loaded");
  }

  save(): void {
    if (this.police.name?.trim()) {
      this.policeService.create(this.police).subscribe(() => {
        this.police = {};
      });
    }
  }
}
