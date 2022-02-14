import path from 'path';
import prompts from 'prompts';

import { getData } from './utils';
import { Config } from './types';

const CONFIG_PATH = path.join(__dirname, '../hadouken.json');

const selectNetworkCommand = async () => {
  const data = getData<Config>(CONFIG_PATH);
  const networks = data?.networks ?? [];

  const { network } = await prompts({
    type: 'select',
    name: 'network',
    choices: networks.map(({ id }) => ({ title: id, value: id })),
    message: 'Select network',
  });

  console.log('network', network);
};

const networkCommand = async () => {
  const { command } = await prompts({
    type: 'select',
    choices: [
      { title: 'select', value: 'select-network' },
    ],
    name: 'command',
    message: 'Select command',
  });

  switch (command) {
    case 'select-network':
      await selectNetworkCommand();
      break;
    default:
  }
};

export default networkCommand;
