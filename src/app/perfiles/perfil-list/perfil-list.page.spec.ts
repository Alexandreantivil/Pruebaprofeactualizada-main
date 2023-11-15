import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilListPage } from './perfil-list.page';

describe('PerfilListPage', () => {
  let component: PerfilListPage;
  let fixture: ComponentFixture<PerfilListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
