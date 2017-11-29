import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobradorsListarComponent } from './cobradors-listar.component';

describe('CobradorsListarComponent', () => {
  let component: CobradorsListarComponent;
  let fixture: ComponentFixture<CobradorsListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobradorsListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobradorsListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
