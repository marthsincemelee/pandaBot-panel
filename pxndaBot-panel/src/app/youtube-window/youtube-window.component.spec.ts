import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeWindowComponent } from './youtube-window.component';

describe('YoutubeWindowComponent', () => {
  let component: YoutubeWindowComponent;
  let fixture: ComponentFixture<YoutubeWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
