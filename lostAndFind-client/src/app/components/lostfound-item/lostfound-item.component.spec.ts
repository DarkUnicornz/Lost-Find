import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostfoundItemComponent } from './lostfound-item.component';

describe('LostfoundItemComponent', () => {
  let component: LostfoundItemComponent;
  let fixture: ComponentFixture<LostfoundItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostfoundItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostfoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
