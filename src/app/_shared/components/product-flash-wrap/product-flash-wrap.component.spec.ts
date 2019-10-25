import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashWrapComponent } from './product-flash-wrap.component';

describe('ProductFlashWrapComponent', () => {
  let component: ProductFlashWrapComponent;
  let fixture: ComponentFixture<ProductFlashWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFlashWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFlashWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
