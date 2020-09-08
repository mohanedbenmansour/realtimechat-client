import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostMerchantComponent } from './view-post-merchant.component';

describe('ViewPostMerchantComponent', () => {
  let component: ViewPostMerchantComponent;
  let fixture: ComponentFixture<ViewPostMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
