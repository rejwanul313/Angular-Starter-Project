import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbulComponent } from './bulbul.component';

describe('BulbulComponent', () => {
  let component: BulbulComponent;
  let fixture: ComponentFixture<BulbulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
