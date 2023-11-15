import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDetailPage } from './perfil-detail.page';

describe('PerfilDetailPage', () => {
  let component: PerfilDetailPage;
  let fixture: ComponentFixture<PerfilDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
