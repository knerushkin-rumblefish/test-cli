import { program } from 'commander';

import domainCommand from './command';
import accountCommand from './accounts';
import networkCommand from './network';
import contractCommand from './contract';

program
  .name('cli')
  .description('CLI to manage Hadoken contracts and config')
  .action(() => {
    domainCommand();
  });

program
  .command('account')
  .description('Manage accounts registry. Accounts used to deploy or interact with contracts')
  .action(() => {
    accountCommand();
  });

program
  .command('network')
  .description('Network registry. Register network to interact with')
  .action(() => {
    networkCommand();
  });

program
  .command('contract')
  .description('Split a string into substrings and display as an array')
  .action(() => {
    contractCommand();
  });

program.parse();
