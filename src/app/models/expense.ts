export interface expense {
    id: string;
    title: string;
    amount: number;
    category: expenseCategory;
}
export type expenseCategory = 'Work' | 'Personal' | 'Grocery' | 'Shopping' | 'Travel' | 'Food';