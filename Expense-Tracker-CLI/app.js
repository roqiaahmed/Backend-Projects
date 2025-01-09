#!/usr/bin/env node
import { program } from 'commander';
import Add from './commands/add.js';
import List from './commands/list.js';
import Delete from './commands/delete.js';
import Summary from './commands/summary.js';
import Update from './commands/update.js';

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
    const deleteExpense = new Delete(Number(expense.id));
    deleteExpense.deleteExpense();
  });

program
  .command('summary')
  .option('--month <number>', 'Month of the summary')
  .action((data) => {
    const summary = new Summary(data.month);
    summary.getSummary();
  });

program
  .command('update')
  .description('Update an expense')
  .option('--id <number>', 'ID of the expense')
  .option('--description <string>', 'Description of the expense')
  .option('--amount <number>', 'Amount of the expense')
  .action((data) => {
    const update = new Update(Number(data.id));
    update.updateExpense(data.description, data.amount);
  });

program.parse(process.argv);
