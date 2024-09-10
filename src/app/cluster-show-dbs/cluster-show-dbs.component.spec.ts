import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterShowDbsComponent } from './cluster-show-dbs.component';

describe('ClusterShowDbsComponent', () => {
  let component: ClusterShowDbsComponent;
  let fixture: ComponentFixture<ClusterShowDbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClusterShowDbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterShowDbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
