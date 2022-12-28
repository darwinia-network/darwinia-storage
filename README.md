# darwinia-storage

A library to help fetch internal substrate storages via ethereum json-rpc `eth.call`.

You can use this lib to fetch all Darwinia storages allowed by [StateStorage precompile](https://docs.darwinia.network/builder/solidity-precompiles).

## Install
```shell
npm install darwinia-storage --save
```

## Usage

The returns of this lib's functions are all json string or null.


```typescript
import {ethers} from "ethers";
import { getStorage, buildPangolin2Client, pangolin2MetaStatic } from "darwinia-storage";

async function main(): Promise<void> {
    // web3 provider(eth compatible api endpoint)
    const provider = new ethers.providers.JsonRpcProvider("http://g1.dev.darwinia.network:10000");

    // a general storage function for a specific chain
    const getPangolin2Storage = getStorage(provider, pangolin2MetaStatic);

    // There are two ways to fetch a storage.
    //
    //  1. use storage specific functions predefined in this lib.
    const pangolin2 = buildPangolin2Client(getPangolin2Storage);
    let result = await pangolin2.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);

    //  2. the general way.
    result = await getPangolin2Storage(
        "System", 
        "Account",
        '0x794BF0B66926D84CB735283D849f454A2A8d9a44'
    );
    console.log(`${result}\n`);
}

main();
```
more examples in [examples.ts](./examples.ts)

### Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```

