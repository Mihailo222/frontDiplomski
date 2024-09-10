import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterShowUsersComponent } from './cluster-show-users.component';

describe('ClusterShowUsersComponent', () => {
  let component: ClusterShowUsersComponent;
  let fixture: ComponentFixture<ClusterShowUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClusterShowUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterShowUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
