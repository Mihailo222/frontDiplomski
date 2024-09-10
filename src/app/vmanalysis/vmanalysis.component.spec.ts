import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMAnalysisComponent } from './vmanalysis.component';

describe('VMAnalysisComponent', () => {
  let component: VMAnalysisComponent;
  let fixture: ComponentFixture<VMAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VMAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
