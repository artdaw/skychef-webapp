/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { Wallet } from "./nearWallet";

export class NftNEAR {
  contractId: string;
  wallet: Wallet;

  constructor({ contractId, wallet }: { contractId: string; wallet: Wallet }) {
    this.contractId = contractId;
    this.wallet = wallet;
  }

  async getGreeting() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_greeting",
    });
  }

  async setGreeting(greeting: string) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: "set_greeting",
      args: { message: greeting },
    });
  }
}
