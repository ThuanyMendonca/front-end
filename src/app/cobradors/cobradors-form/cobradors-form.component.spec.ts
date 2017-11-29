import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobradorsFormComponent } from './cobradors-form.component';

describe('CobradorsFormComponent', () => {
  let component: CobradorsFormComponent;
  let fixture: ComponentFixture<CobradorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobradorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobradorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
