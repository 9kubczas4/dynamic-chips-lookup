import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersSidebarComponent } from './manage-users-sidebar.component';

describe('ManageUsersSidebarComponent', () => {
  let component: ManageUsersSidebarComponent;
  let fixture: ComponentFixture<ManageUsersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
