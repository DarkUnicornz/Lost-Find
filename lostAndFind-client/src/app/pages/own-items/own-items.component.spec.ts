import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnItemsComponent } from './own-items.component';

describe('OwnItemsComponent', () => {
  let component: OwnItemsComponent;
  let fixture: ComponentFixture<OwnItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
