import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkithaComponent } from './akitha.component';

describe('AkithaComponent', () => {
  let component: AkithaComponent;
  let fixture: ComponentFixture<AkithaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkithaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkithaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
