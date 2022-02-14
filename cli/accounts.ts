import path from 'path';
import prompts from 'prompts';

import { getData, overrideData } from './utils';
import { Config } from './types';

const CONFIG_PATH = path.join(__dirname, '../hadouken.json');

const addAccountCommand = async () => {
  const { privKey } = await prompts({
    type: 'text',
    name: 'privKey',
    message: 'Type private key',
  });
  const { name } = await prompts({
    type: 'text',
    name: 'name',
    message: 'Account name',
  });

  const account = {
    name,
    privKey,
  };

  const data = getData<Config>(CONFIG_PATH);
  const overriddenData = {
    accounts: [
      ...(data?.accounts ?? []),
      account,
    ],
  };
  overrideData<Config>(CONFIG_PATH, overriddenData);
};

const selectAccountCommand = async () => {
  const data = getData<Config>(CONFIG_PATH);
  const accounts = data?.accounts ?? [];

  const { account } = await prompts({
    type: 'select',
    name: 'account',
    choices: accounts.map(({ name, privKey }) => ({ title: name, value: privKey })),
    message: 'Select account',
  });

  console.log('account', account);
};

const accountCommand = async () => {
  const { command } = await prompts({
    type: 'select',
    choices: [
      { title: 'add', value: 'add-account' },
      { title: 'select', value: 'select-account' },
    ],
    name: 'command',
    message: 'Select command',
  });

  switch (command) {
    case 'add-account':
      await addAccountCommand();
      break;
    case 'select-account':
      await selectAccountCommand();
      break;
    default:
  }
};

export default accountCommand;
