import path from 'path';
import prompts from 'prompts';

import { getData } from './utils';
import { Config } from './types';

const CONFIG_PATH = path.join(__dirname, '../hadouken.json');

const deployNetworkCommand = async () => {
  const data = getData<Config>(CONFIG_PATH);
  const networks = data?.networks ?? [];

  const { contract } = await prompts({
    type: 'select',
    name: 'contract',
    choices: networks.map(({ id }) => ({ title: id, value: id })),
    message: 'Select contract',
  });

  console.log('contract', contract);
};

const contractCommand = async () => {
  const { command } = await prompts({
    type: 'select',
    choices: [
      { title: 'deploy', value: 'deploy-network' },
    ],
    name: 'command',
    message: 'Select command',
  });

  switch (command) {
    case 'deploy-network':
      await deployNetworkCommand();
      break;
    default:
  }
};

export default contractCommand;
