import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRegistradoListComponent } from './producto-registrado-list.component';

describe('ProductoRegistradoListComponent', () => {
  let component: ProductoRegistradoListComponent;
  let fixture: ComponentFixture<ProductoRegistradoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoRegistradoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRegistradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
