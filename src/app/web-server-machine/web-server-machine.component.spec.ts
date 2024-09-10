import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServerMachineComponent } from './web-server-machine.component';

describe('WebServerMachineComponent', () => {
  let component: WebServerMachineComponent;
  let fixture: ComponentFixture<WebServerMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebServerMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebServerMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
