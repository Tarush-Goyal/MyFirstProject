import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorMenuComponent } from './outdoor-menu.component';

describe('OutdoorMenuComponent', () => {
  let component: OutdoorMenuComponent;
  let fixture: ComponentFixture<OutdoorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
