import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahanComponent } from './sahan.component';

describe('SahanComponent', () => {
  let component: SahanComponent;
  let fixture: ComponentFixture<SahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
