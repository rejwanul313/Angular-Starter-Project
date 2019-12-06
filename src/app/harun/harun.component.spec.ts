import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarunComponent } from './harun.component';

describe('HarunComponent', () => {
  let component: HarunComponent;
  let fixture: ComponentFixture<HarunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
