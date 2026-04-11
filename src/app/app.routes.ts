import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddExpenseComponent },
  { path: 'expenses', component: ExpenseListComponent },
];
