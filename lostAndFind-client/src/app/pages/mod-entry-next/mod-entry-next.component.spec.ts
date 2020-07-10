import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEntryNextComponent } from './mod-entry-next.component';

describe('ModEntryNextComponent', () => {
  let component: ModEntryNextComponent;
  let fixture: ComponentFixture<ModEntryNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEntryNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModEntryNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
