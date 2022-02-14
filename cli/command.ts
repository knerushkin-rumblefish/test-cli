import prompts from 'prompts';

import accountCommand from './accounts';
import networkCommand from './network';
import contractCommand from './contract';

const domainCommand = async () => {
  const { command } = await prompts({
    type: 'select',
    choices: [
      { title: 'account', value: 'account' },
      { title: 'network', value: 'network' },
      { title: 'contract', value: 'contract' },
    ],
    name: 'command',
    message: 'Select domain',
  });

  switch (command) {
    case 'account':
      await accountCommand();
      break;
    case 'network':
      await networkCommand();
      break;
    case 'contract':
      await contractCommand();
      break;
    default:
  }
};

export default domainCommand;
