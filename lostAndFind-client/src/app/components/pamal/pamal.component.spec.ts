import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PamalComponent } from './pamal.component';

describe('PamalComponent', () => {
  let component: PamalComponent;
  let fixture: ComponentFixture<PamalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PamalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
