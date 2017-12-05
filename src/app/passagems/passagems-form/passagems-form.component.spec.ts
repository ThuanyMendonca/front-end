import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemsFormComponent } from './passagems-form.component';

describe('PassagemsFormComponent', () => {
  let component: PassagemsFormComponent;
  let fixture: ComponentFixture<PassagemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
