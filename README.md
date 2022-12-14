# darwinia-js-sdk

A library to help 
1. fetch internal substrate storages, and
2. dispatch calls

## Install
```shell
npm install darwinia-js-sdk
```

## Usage

### fetch storage

The returns of this lib's functions are all json string or null.


```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.JsonRpcProvider("https://pangolin-rpc.darwinia.network");
    // or
    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    const pangolin = clientBuilder.buildPangolinClient(provider);
  
    let result = await pangolin.storages.system.account('0x794BF0B66926D84CB735283D849f454A2A8d9a44');
    console.log(`${result}\n`);
}

main();
```
### dispatch call

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);
  
    await pangolin2.calls.session.setKeys(
      signer,
      { aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d" }, // keys
      "0x" // proof
    )
}

main();

```

### dispatch multiple calls in a single transaction

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    // prepare calls
    const setKeysCall = pangolin2.calls.session.setKeysCall(
        // keys
        { 
            aura: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"
        }, 
        // proof
        "0x"
    );

    const collectCall = pangolin2.calls.staking.collectCall({ commission: 12345 });

    // dispatch
    await pangolin2.calls.utility.batchAll(
        signer, 
        [
            setKeysCall,
            collectCall
        ]
    );
}

main();

```
### dispatch call with encoded input

```typescript
import { ethers } from "ethers";
import { clientBuilder } from "darwinia-js-sdk"

async function main(): Promise<void> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const pangolin2 = clientBuilder.buildPangolin2Client(provider);

    // call ended with `D` is the version that accept params encoded in scale codec  
    await pangolin2.calls.session.setKeysD(
      signer,
      "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00", // encoded (keys, proof)
    )
}

main();

```

more examples in [examples](./examples)

### TODO

- [ ] metadata check. automatically check whether the metadata carried by lib is outdated, prompting to upgrade

### Get the metadata static hex string from darwinia node
```shell
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":"1","method":"state_getMetadata","params":[]}' \
     https://darwinia-crab.api.onfinality.io/public/
```

