import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPageComponent } from './merchant-page.component';

describe('MerchantPageComponent', () => {
  let component: MerchantPageComponent;
  let fixture: ComponentFixture<MerchantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
