import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEntryComponent } from './mod-entry.component';

describe('ModEntryComponent', () => {
  let component: ModEntryComponent;
  let fixture: ComponentFixture<ModEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
