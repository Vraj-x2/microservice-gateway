import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlushieComponent } from './add-plushie.component';

describe('AddPlushieComponent', () => {
  let component: AddPlushieComponent;
  let fixture: ComponentFixture<AddPlushieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlushieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlushieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
