// GENERIC
import { ethereum } from "@graphprotocol/graph-ts";

// GENERATED
import { Deposit } from "../../generated/schema";

// UTILS
import { BIG_INT_ZERO, ADDRESS_ZERO } from "../utils/defaults";

export function loadOrCreateDeposit(event: ethereum.Event): Deposit {
  let deposit = Deposit.load(event.address.toHex()) as Deposit;

  if (deposit) {
    return deposit;
  }

  deposit = new Deposit(event.address.toHex());

  deposit.amount = BIG_INT_ZERO;
  deposit.timestamp = event.block.timestamp;
  deposit.depositor = ADDRESS_ZERO;
  deposit.save();

  return deposit;
}
