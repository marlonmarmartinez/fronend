import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandoUsuarioComponent } from './creando-usuario.component';

describe('CreandoUsuarioComponent', () => {
  let component: CreandoUsuarioComponent;
  let fixture: ComponentFixture<CreandoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreandoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
