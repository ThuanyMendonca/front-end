import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasFormComponent } from './linhas-form.component';

describe('LinhasFormComponent', () => {
  let component: LinhasFormComponent;
  let fixture: ComponentFixture<LinhasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
