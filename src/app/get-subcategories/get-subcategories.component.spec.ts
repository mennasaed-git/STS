import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubcategoriesComponent } from './get-subcategories.component';

describe('GetSubcategoriesComponent', () => {
  let component: GetSubcategoriesComponent;
  let fixture: ComponentFixture<GetSubcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSubcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
