import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNSComponent } from './dns.component';

describe('DNSComponent', () => {
  let component: DNSComponent;
  let fixture: ComponentFixture<DNSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DNSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DNSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
