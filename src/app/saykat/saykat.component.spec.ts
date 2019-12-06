import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaykatComponent } from './saykat.component';

describe('SaykatComponent', () => {
  let component: SaykatComponent;
  let fixture: ComponentFixture<SaykatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaykatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaykatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
