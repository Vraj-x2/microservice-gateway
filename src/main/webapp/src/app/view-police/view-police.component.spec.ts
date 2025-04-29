import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoliceComponent } from './view-police.component';

describe('ViewPoliceComponent', () => {
  let component: ViewPoliceComponent;
  let fixture: ComponentFixture<ViewPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPoliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
