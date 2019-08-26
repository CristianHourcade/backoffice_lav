import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScancameraComponent } from './scancamera.component';

describe('ScancameraComponent', () => {
  let component: ScancameraComponent;
  let fixture: ComponentFixture<ScancameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScancameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScancameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
