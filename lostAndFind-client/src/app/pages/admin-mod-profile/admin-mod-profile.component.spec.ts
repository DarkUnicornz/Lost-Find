import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModProfileComponent } from './admin-mod-profile.component';

describe('AdminModProfileComponent', () => {
  let component: AdminModProfileComponent;
  let fixture: ComponentFixture<AdminModProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
