import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserInfoComponent } from './all-user-info.component';

describe('AllUserInfoComponent', () => {
  let component: AllUserInfoComponent;
  let fixture: ComponentFixture<AllUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
