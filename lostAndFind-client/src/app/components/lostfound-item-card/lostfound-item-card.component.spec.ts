import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostfoundItemCardComponent } from './lostfound-item-card.component';

describe('LostfoundItemCardComponent', () => {
  let component: LostfoundItemCardComponent;
  let fixture: ComponentFixture<LostfoundItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostfoundItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostfoundItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
