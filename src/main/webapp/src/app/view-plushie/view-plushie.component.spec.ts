import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlushieComponent } from './view-plushie.component';

describe('ViewPlushieComponent', () => {
  let component: ViewPlushieComponent;
  let fixture: ComponentFixture<ViewPlushieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPlushieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPlushieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
