import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAddPage } from './perfil-add.page';

describe('PerfilAddPage', () => {
  let component: PerfilAddPage;
  let fixture: ComponentFixture<PerfilAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
