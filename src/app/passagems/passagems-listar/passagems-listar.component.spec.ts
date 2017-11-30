import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemsListarComponent } from './passagems-listar.component';

describe('PassagemsListarComponent', () => {
  let component: PassagemsListarComponent;
  let fixture: ComponentFixture<PassagemsListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemsListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemsListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
