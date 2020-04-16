import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMenuComponent } from './books-menu.component';

describe('BooksMenuComponent', () => {
  let component: BooksMenuComponent;
  let fixture: ComponentFixture<BooksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
