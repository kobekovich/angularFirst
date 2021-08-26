import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePageComponent } from './blue-page.component';

describe('BluePageComponent', () => {
  let component: BluePageComponent;
  let fixture: ComponentFixture<BluePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
