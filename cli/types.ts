export interface Account {
  name: string
  privKey: string
}

export interface Network {
  id: string
}

export interface Config {
  accounts: Account[]
  networks: Network[]
}
