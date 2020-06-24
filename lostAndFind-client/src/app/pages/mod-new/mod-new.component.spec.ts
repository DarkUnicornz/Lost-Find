import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNewComponent } from './mod-new.component';

describe('ModNewComponent', () => {
  let component: ModNewComponent;
  let fixture: ComponentFixture<ModNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
