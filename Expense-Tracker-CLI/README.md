# Expense Tracker CLI

- expense tracker is application to manage your finances. The application should allow users to add, delete, and view their expenses. The application should also provide a summary of the expenses.

## Setup Instructions

1. **Clone the Repository**:

```bash
     git clone https://github.com/roqiaahmed/Backend-Projects.git
```

2. **Install Dependencies**:

```bash
   cd Expense-Tracker-CLI
   npm install
```

## Features

- Users can add an expense with a description and amount.
- Users can update an expense.
- Users can delete an expense.
- Users can view all expenses.
- Users can view a summary of all expenses.
- Users can view a summary of expenses for a specific month (of current year).

## How to use

```bash
$ expense-tracker add --description "Lunch" --amount 20
# Expense added successfully (ID: 1)

$ expense-tracker add --description "Dinner" --amount 10
# Expense added successfully (ID: 2)

$ expense-tracker list
# ID  Date       Description  Amount
# 1   2024-08-06  Lunch        $20
# 2   2024-08-06  Dinner       $10

$ expense-tracker summary
# Total expenses: $30

$ expense-tracker delete --id 2
# Expense deleted successfully

$ expense-tracker summary
# Total expenses: $20
$ expense-tracker update --id 3 --description "test" --amount 90
# Expense updated
$ expense-tracker summary --month 8
# Total expenses for August: $20
```
