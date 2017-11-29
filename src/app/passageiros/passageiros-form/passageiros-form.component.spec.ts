import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageirosFormComponent } from './passageiros-form.component';

describe('PassageirosFormComponent', () => {
  let component: PassageirosFormComponent;
  let fixture: ComponentFixture<PassageirosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageirosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageirosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
