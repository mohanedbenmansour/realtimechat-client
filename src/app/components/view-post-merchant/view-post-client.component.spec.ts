import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostClientComponent } from './view-post-client.component';

describe('ViewPostClientComponent', () => {
  let component: ViewPostClientComponent;
  let fixture: ComponentFixture<ViewPostClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
