#!/usr/bin/env node
import { program } from 'commander';
import Add from './commands/add.js';
import List from './commands/list.js';

program
  .command('add')
  .description('Add a new expense')
  .option('--description <string>', 'Description of the expense')
  .option('--amount <number>', 'Amount of the expense')
  .action((data) => {
    const add = new Add(data.description, data.amount);
    add.addExpense();
  });

program
  .command('list')
  .description('List all expenses')
  .action(() => {
    const list = new List();
    list.listExpenses();
  });

program
  .command('delete')
  .description('Delete an expense')
  .option('--id <number>', 'ID of the expense')
  .action((expense) => {
    const deleteExpense = new DeleteExpense(expense.id);
    deleteExpense.delete();
  });

program.parse(process.argv);
