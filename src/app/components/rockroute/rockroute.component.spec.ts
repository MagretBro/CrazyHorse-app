import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockrouteComponent } from './rockroute.component';

describe('RockrouteComponent', () => {
  let component: RockrouteComponent;
  let fixture: ComponentFixture<RockrouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RockrouteComponent]
    });
    fixture = TestBed.createComponent(RockrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
