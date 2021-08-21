// GENERIC
import { Address, ethereum } from "@graphprotocol/graph-ts";

// GENERATED
import { Withdrawal } from "../../generated/schema";

// UTILS
import { BIG_INT_ZERO, ADDRESS_ZERO } from "../utils/defaults";

export function loadOrCreateWithdrawal(event: ethereum.Event): Withdrawal {
  let withdrawal = Withdrawal.load(event.address.toHex()) as Withdrawal;

  if (withdrawal) {
    return withdrawal;
  }

  withdrawal = new Withdrawal(event.address.toHex());

  withdrawal.amount = BIG_INT_ZERO;
  withdrawal.timestamp = event.block.timestamp;
  withdrawal.depositor = ADDRESS_ZERO;
  withdrawal.save();

  return withdrawal;
}
