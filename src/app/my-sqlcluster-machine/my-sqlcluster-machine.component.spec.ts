import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySQLClusterMachineComponent } from './my-sqlcluster-machine.component';

describe('MySQLClusterMachineComponent', () => {
  let component: MySQLClusterMachineComponent;
  let fixture: ComponentFixture<MySQLClusterMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySQLClusterMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySQLClusterMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
