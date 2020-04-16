import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionMenuComponent } from './fashion-menu.component';

describe('FashionMenuComponent', () => {
  let component: FashionMenuComponent;
  let fixture: ComponentFixture<FashionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
