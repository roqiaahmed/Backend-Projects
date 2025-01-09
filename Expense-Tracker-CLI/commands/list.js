import FileManager from '../fileManger.js';

export default class List {
  constructor() {
    this.fileManager = new FileManager();
    this.expenses;
  }

  async listExpenses() {
    try {
      await this.getExpenses();
      this.formatExpense(this.expenses);
    } catch (err) {
      console.log('Error reading file');
    }
  }

  async getExpenses() {
    return new Promise((resolve, reject) => {
      this.fileManager.readFile((data) => {
        this.expenses = data;
        resolve();
      });
    });
  }

  formatExpense(expenses) {
    if (!expenses) {
      console.log('No expenses to display');
      return;
    }
    console.log('ID \t Date \t \t Description \t Amount');
    expenses.forEach((expense) => {
      console.log(
        `${expense.id} \t ${expense.date} \t ${expense.description} \t ${expense.amount}`
      );
    });
  }

  // async getExpenseById(id) {
  //   new Promise((res, rej) => {
  //     this.getExpenses().then(() => {
  //       for (let i = 0; i < this.expenses.length; i++) {
  //         if (this.expenses[i].id === id) {
  //           console.log(this.expenses[i]);
  //           res(this.expenses[i]);
  //         }
  //       }
  //     });
  //   });
  // }
}
