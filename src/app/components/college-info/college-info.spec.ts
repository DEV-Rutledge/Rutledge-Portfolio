import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeInfo } from './college-info';

describe('CollegeInfo', () => {
  let component: CollegeInfo;
  let fixture: ComponentFixture<CollegeInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
