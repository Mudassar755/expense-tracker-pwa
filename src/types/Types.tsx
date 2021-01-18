export type Transection = {
  id: number;
  description: string;
  amount: number;
};

export type AllTransections = {
  transactions: Transection[];
};

export type AddTransection = {
  transaction: Transection;
};

export type DeleteTransection = {
  id: number;
};

export type ActionType =
  | { type: "ADD_TRANSACTION"; payload: AddTransection }
  | { type: "DELETE_TRANSACTION"; payload: DeleteTransection };
