import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpModalComponent } from './set-up-modal.component';

describe('SetUpModalComponent', () => {
  let component: SetUpModalComponent;
  let fixture: ComponentFixture<SetUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
