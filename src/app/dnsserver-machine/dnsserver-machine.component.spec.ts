import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNSServerMachineComponent } from './dnsserver-machine.component';

describe('DNSServerMachineComponent', () => {
  let component: DNSServerMachineComponent;
  let fixture: ComponentFixture<DNSServerMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DNSServerMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DNSServerMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
