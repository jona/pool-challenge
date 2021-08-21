import {
  Deposit,
  RewardsDeposited,
  Withdraw,
} from "../generated/Contract/Contract";

import { loadOrCreateDeposit } from "./entities/deposit";
import { loadOrCreateDepositor } from "./entities/depositor";
import { loadOrCreateReward } from "./entities/reward";
import { loadOrCreateWithdrawal } from "./entities/withdrawal";

export function handleDeposit(event: Deposit): void {
  const deposit = loadOrCreateDeposit(event);
  const depositor = loadOrCreateDepositor(event.params.from);

  depositor.address = event.params.from;
  depositor.save();

  deposit.amount = event.params.amount;
  deposit.depositor = event.params.from.toHexString();
  deposit.save();
}

export function handleRewardsDeposited(event: RewardsDeposited): void {
  const reward = loadOrCreateReward(event);

  reward.amount = event.params.amount;
  reward.save();
}

export function handleWithdraw(event: Withdraw): void {
  const withdrawal = loadOrCreateWithdrawal(event);

  withdrawal.amount = event.params.amount;
  withdrawal.depositor = event.params.from.toHexString();
  withdrawal.save();
}
