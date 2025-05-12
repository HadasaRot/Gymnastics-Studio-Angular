import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantsListComponent } from './registrants-list.component';

describe('RegistrantsListComponent', () => {
  let component: RegistrantsListComponent;
  let fixture: ComponentFixture<RegistrantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrantsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
