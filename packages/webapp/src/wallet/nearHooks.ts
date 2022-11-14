import { Contract } from "near-api-js";
import { ContractMethods } from "near-api-js/lib/contract";
import * as React from "react";
import { NearContext } from "./nearProvider";

export const useNear = () => React.useContext(NearContext);

type ContractProps = {
  contractId: string;
  contractMethods: ContractMethods;
};

export const useContract = ({
  contractId,
  contractMethods,
}: ContractProps): Contract & {
  [key: string]: any;
} => {
  const { wallet } = useNear();
  return new Contract(wallet?.account(), contractId, contractMethods);
};
