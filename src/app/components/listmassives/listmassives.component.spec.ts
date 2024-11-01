import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmassivesComponent } from './listmassives.component';

describe('ListmassivesComponent', () => {
  let component: ListmassivesComponent;
  let fixture: ComponentFixture<ListmassivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListmassivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmassivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
