// GENERIC
import { ethereum } from "@graphprotocol/graph-ts";

// GENERATED
import { Reward } from "../../generated/schema";

// UTILS
import { BIG_INT_ZERO } from "../utils/defaults";

export function loadOrCreateReward(event: ethereum.Event): Reward {
  let reward = Reward.load(event.address.toHex()) as Reward;

  if (reward) {
    return reward;
  }

  reward = new Reward(event.address.toHex());

  reward.amount = BIG_INT_ZERO;
  reward.depositedAt = event.block.number;
  reward.timestamp = event.block.timestamp;
  reward.save();

  return reward;
}
