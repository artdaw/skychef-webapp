import { SkyChefNFTContract } from ".";
import { restoreOwners } from "./internal";
import { JsonToken } from "./meta";
import { internalNftToken } from "./nftCore";

//Query for the total supply of NFTs on the contract
export function internalTotalSupply({
  contract,
}: {
  contract: SkyChefNFTContract;
}): number {
  //return the length of the token metadata by ID
  return contract.tokenMetadataById.length;
}

//Query for nft tokens on the contract regardless of the owner using pagination
export function internalNftTokens({
  contract,
  fromIndex,
  limit,
}: {
  contract: SkyChefNFTContract;
  fromIndex?: string;
  limit?: number;
}): JsonToken[] {
  const tokens = [];

  //where to start pagination - if we have a fromIndex, we'll use that - otherwise start from 0 index
  const start = fromIndex ? parseInt(fromIndex) : 0;
  //take the first "limit" elements in the array. If we didn't specify a limit, use 50
  const max = limit ? limit : 50;

  const keys = contract.tokenMetadataById.toArray();
  // Paginate through the keys using the fromIndex and limit
  for (let i = start; i < keys.length && i < start + max; i++) {
    // get the token object from the keys
    const jsonToken = internalNftToken({ contract, tokenId: keys[i][0] });
    tokens.push(jsonToken);
  }
  return tokens;
}

//get the total supply of NFTs for a given owner
export function internalSupplyForOwner({
  contract,
  accountId,
}: {
  contract: SkyChefNFTContract;
  accountId: string;
}): number {
  //get the set of tokens for the passed in owner
  const tokens = restoreOwners(contract.tokensPerOwner.get(accountId));
  //if there isn't a set of tokens for the passed in account ID, we'll return 0
  if (tokens == null) {
    return 0;
  }

  //if there is some set of tokens, we'll return the length
  return tokens.length;
}

//Query for all the tokens for an owner
export function internalTokensForOwner({
  contract,
  accountId,
  fromIndex,
  limit,
}: {
  contract: SkyChefNFTContract;
  accountId: string;
  fromIndex?: string;
  limit?: number;
}): JsonToken[] {
  //get the set of tokens for the passed in owner
  const tokenSet = restoreOwners(contract.tokensPerOwner.get(accountId));

  //if there isn't a set of tokens for the passed in account ID, we'll return 0
  if (tokenSet == null) {
    return [];
  }

  //where to start pagination - if we have a fromIndex, we'll use that - otherwise start from 0 index
  const start = fromIndex ? parseInt(fromIndex) : 0;
  //take the first "limit" elements in the array. If we didn't specify a limit, use 50
  const max = limit ? limit : 50;

  const keys = tokenSet.toArray();
  const tokens: JsonToken[] = [];
  for (let i = start; i < max; i++) {
    if (i >= keys.length) {
      break;
    }
    const token = internalNftToken({ contract, tokenId: keys[i] as string });
    tokens.push(token);
  }
  return tokens;
}
