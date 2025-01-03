#!/usr/bin/env node
import { program } from 'commander';
import Add from './commands/add.js';
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
    console.log('Listing all expenses');
  });

program
  .command('delete')
  .description('Delete an expense')
  .option('--id <string>', 'ID of the expense')
  .action(() => {
    console.log('Deleting an expense');
  });

program
  .command('update')
  .description('Update an expense')
  .arguments('<id>')
  .option('--description <string>', 'Description of the expense')
  .option('--amount <number>', 'Amount of the expense')
  .action(() => {
    console.log('Updating an expense');
  });
program.parse(process.argv);
