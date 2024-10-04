import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveComponent } from './massive.component';

describe('MassiveComponent', () => {
  let component: MassiveComponent;
  let fixture: ComponentFixture<MassiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
