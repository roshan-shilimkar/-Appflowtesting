import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Model1Page } from './model1.page';

describe('Model1Page', () => {
  let component: Model1Page;
  let fixture: ComponentFixture<Model1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Model1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
