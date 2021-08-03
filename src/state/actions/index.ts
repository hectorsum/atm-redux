import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.DEPOSIT,
  payload: number //optional
}
interface WithDrawAction {
  type: ActionType.WITHDRAW,
  payload: number //optional
}
interface BankruptAction {
  type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithDrawAction | BankruptAction;