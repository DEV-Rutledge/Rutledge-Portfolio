import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProjects } from './dev-projects';

describe('DevProjects', () => {
  let component: DevProjects;
  let fixture: ComponentFixture<DevProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
