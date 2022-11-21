# SkyChef Smart Contract

## Mint NFT

### Login

1. `pnpm near login`
2. `pnpm near create-account skychef.artdaw.testnet --masterAccount artdaw.testnet --initialBalance 10`
3. `export NFT_CONTRACT_ID=skychef.artdaw.testnet`
4. `export MAIN_ACCOUNT=artdaw.testnet`

### Deploy & Initialize

1. `pnpm near deploy --accountId $NFT_CONTRACT_ID --wasmFile build/nft.wasm`
2. `pnpm near call $NFT_CONTRACT_ID init '{"owner_id": "'$NFT_CONTRACT_ID'"}' --accountId $NFT_CONTRACT_ID`
