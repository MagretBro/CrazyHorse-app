import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedescribeComponent } from './routedescribe.component';

describe('RoutedescribeComponent', () => {
  let component: RoutedescribeComponent;
  let fixture: ComponentFixture<RoutedescribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedescribeComponent]
    });
    fixture = TestBed.createComponent(RoutedescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
