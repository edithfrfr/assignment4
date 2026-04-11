import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseItemComponent } from './expense-item.component';

describe('ExpenseItem', () => {
  let component: ExpenseItemComponent;
  let fixture: ComponentFixture<ExpenseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
