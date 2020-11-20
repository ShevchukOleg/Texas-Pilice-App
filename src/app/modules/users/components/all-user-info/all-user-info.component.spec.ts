import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllUserInfoComponent } from './all-user-info.component';

describe('AllUserInfoComponent', () => {
  let component: AllUserInfoComponent;
  let fixture: ComponentFixture<AllUserInfoComponent>;

  beforeEach(waitForAsync(() => {
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
