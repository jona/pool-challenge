// GENERIC
import { Address, ethereum } from "@graphprotocol/graph-ts";

// GENERATED
import { Depositor } from "../../generated/schema";

// UTILS
import { ADDRESS_ZERO } from "../utils/defaults";

export function loadOrCreateDepositor(address: Address): Depositor {
  let depositor = Depositor.load(address.toHex()) as Depositor;

  if (depositor) {
    return depositor;
  }

  depositor = new Depositor(address.toHex());

  depositor.address = Address.fromString(ADDRESS_ZERO);
  depositor.save();

  return depositor;
}
