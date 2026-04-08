interface expense {
    id: string;
    title: string;
    amount: number;
    category: expenseCategory;
}
type expenseCategory = 'Work' | 'Personal' | 'Grocery' | 'Shopping' | 'Travel' | 'Food';