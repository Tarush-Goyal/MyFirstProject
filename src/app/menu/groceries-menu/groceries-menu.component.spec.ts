import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesMenuComponent } from './groceries-menu.component';

describe('GroceriesMenuComponent', () => {
  let component: GroceriesMenuComponent;
  let fixture: ComponentFixture<GroceriesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
