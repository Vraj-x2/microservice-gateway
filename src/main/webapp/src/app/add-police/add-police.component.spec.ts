import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliceComponent } from './add-police.component';

describe('AddPoliceComponent', () => {
  let component: AddPoliceComponent;
  let fixture: ComponentFixture<AddPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPoliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
