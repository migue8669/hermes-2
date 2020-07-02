import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoListComponent } from './despacho-list.component';

describe('DespachoListComponent', () => {
  let component: DespachoListComponent;
  let fixture: ComponentFixture<DespachoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespachoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
