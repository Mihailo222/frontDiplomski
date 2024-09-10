import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterInsertDbComponent } from './cluster-insert-db.component';

describe('ClusterInsertDbComponent', () => {
  let component: ClusterInsertDbComponent;
  let fixture: ComponentFixture<ClusterInsertDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClusterInsertDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterInsertDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
