import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNumbersComponent } from './get-numbers.component';

describe('GetNumbersComponent', () => {
  let component: GetNumbersComponent;
  let fixture: ComponentFixture<GetNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
