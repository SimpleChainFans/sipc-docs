---
id: docs_25
title: Sipc API
sidebar_label: Sipc API
---

#### API方法

- [`web3_clientVersion`](#web3_clientVersion)
- [`web3_sha3`](#web3_sha3)
- [`net_version`](#net_version)
- [`net_listening`](#net_listening)
- [`net_peerCount`](#net_peerCount)
- [`eth_syncing`](#eth_syncing)
- [`eth_mining`](#eth_mining)
- [`eth_hashrate`](#eth_hashrate)
- [`eth_gasPrice`](#eth_gasPrice)
- [`eth_accounts`](#eth_accounts)
- [`eth_getBalance`](#eth_getBalance)
- [`eth_getStorageAt`](#eth_getTransactionCount)
- [`eth_getBlockTransactionCountByHash`](#eth_getBlockTransactionCountByHash)
- [`eth_getBlockTransactionCountByNumb`](#eth_getBlockTransactionCountByNumb)
- [`eth_getUncleCountByBlockHash`](#eth_getUncleCountByBlockHash)
- [`eth_getCode`](#eth_getCode)
- [`eth_sendTransaction`](#eth_sendTransaction)
- [`eth_sendRawTransaction`](#eth_sendRawTransaction)
- [`eth_getTransactionReceipt`](#eth_getTransactionReceipt)
- [`eth_call`](#eth_call)
- [`eth_estimateGas`](#eth_estimateGas)
- [`eth_getBlockByHash`](#eth_getBlockByHash)
- [`eth_getTransactionByHash`](#eth_getTransactionByHash)
- [`eth_getTransactionReceipt`](#eth_getTransactionReceipt)
- [`eth_getTransactionByHash`](#eth_getTransactionByHash)
- [`eth_getUncleByBlockHashAndIndex`](#eth_getUncleByBlockHashAndIndex)
- [`eth_getBlockByHash`](#eth_getBlockByHash)
- [`eth_getBlockByHash`](#eth_getBlockByHash)
- [`eth_getBlockByHash`](#eth_getBlockByHash)
- [`eth_newBlockFilter`](#eth_newBlockFilter)
- [`eth_newPendingTransactionFilter`](#eth_newPendingTransactionFilter)
- [`eth_getFilterChanges`](#eth_getFilterChanges)
- [`eth_getFilterLogs`](#eth_getFilterLogs)
- [`eth_getFilterChanges`](#eth_getFilterChanges)
- [`eth_getLogs`](#eth_getLogs)
- [`eth_getFilterChanges`](#eth_getFilterChanges)
- [`eth_getWork`](#eth_getWork)
- [`eth_submitWork`](#eth_submitWork)
- [`eth_submitHashrate`](#eth_submitHashrate)
- [`eth_blockNumber`](#eth_blockNumber)
---

#### web3_clientVersion

返回当前的客户端版本

**参数**

`无`

**返回**

`string:` 当前客户端版本

**示例**

```javascript
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'

//Result
{
   "id":67,
   "jsonrpc":"2.0",
   "result": "Mist/v0.9.3/darwin/go1.4.1" 
}
```

#### web3_sha3

返回指定数据的 Keccak-256(不同于标准的SHA3-256算法)哈希值。

**参数**

`string:` 要计算 SHA3 哈希的数据

**返回值**

`string:` 指定字符串的 SHA3 结果

**示例**

```javascript
  // Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_sha3","params":["0x68656c6c6f20776f726c64"],"id":64}'

//Result
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad" 
}
 ```
 #### net_version

返回当前连接网络的 ID。 

**参数**

`无`

**返回值**

`string:` 当前连接网络的ID

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'

//Response
{
   "id":67,
   "jsonrpc": "2.0",
   "result": "3" 
}
```
#### net_listening

返回客户端是否处于监听网络连接状态。

**参数**

`无`

**返回值**

`bool:` 客户端处于监听状态时返回 true，否则返回 false

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":67}'

//Response
{
   "id":67,
   "jsonrpc":"2.0",
   "result":true 
}
```

#### net_peerCount

返回当前客户端所连接的对端节点数量。

**参数**

`无`
  
**返回值**

`quantity:` 整数，所连接对端节点旳数量

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}'

//Response
{
  "id":74,
  "jsonrpc": "2.0",
  "result": "0x2" 
}
```
 #### eth_syncing

对于已经同步的客户端，该调用返回一个描述同步状态的对象;对于未同步的客户 端，返回 false。

**数参**

`无`

**返回值**

`Object|Boolean`, 同步状态对象或 false。同步对象的结构如下: 
- `startingBlock:` QUANTITY - 开始块
- `currentBlock:` QUANTITY - 当前块，同eth_blockNumber 
- `highestBlock:` QUANTITY - 预估最高块

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'
//Response
{
   "id":1,
   "jsonrpc": "2.0", 
   "result": {
       startingBlock: '0x384',
       currentBlock: '0x386',
       highestBlock: '0x454' 
   }
}
//如果未同步则结果如下:
{
   "id":1,
   "jsonrpc": "2.0",
   "result": false 
}
```
#### eth_coinbase

返回客户端的 coinbase 地址。 

**参数**

`无`

**返回值**

`data:`20 bytes - 当前 coinbase 地址

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":64}'
//Response
{
"id":64,
"jsonrpc": "2.0",
"result": "0x407d73d8a49eeb85d32cf465507dd71d507100c1" }
```

#### eth_mining

如果客户端在挖矿则返回 true。 

**参数**

`无`

**返回值**

`boolean` 当客户端在挖矿时返回 true，否则返回 false

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_mining","params":[],"id":71}'

//Response
{
   "id":71,
   "jsonrpc": "2.0",
   "result": true 
}
```

#### eth_hashrate

返回节点挖矿时每秒可算出的哈希数量。
 
**参数**

`无`

**返回**

`quantity:` 每秒算出的哈希数量

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_hashrate","params":[],"id":71}'
//Response
{
"id":71,
"jsonrpc": "2.0",
"result": "0x38a" }
```
#### eth_gasPrice
 
返回当前的 gas 价格，单位:wei。 

**参数**

`无`

**返回值**

`quantity:`整数，以 wei 为单位的当前 gas 价格

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
//Response
{
"id":73,
"jsonrpc": "2.0",
"result": "0x09184e72a000" // 10000000000000 }
```

#### eth_accounts

返回客户端持有的地址列表。

**参数**

`无`

**返回**

`string:`客户端持有的地址字符串列表

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"] }
 ```
 #### eth_getBalance

返回指定地址账户的余额。
 
**参数**

`string:`20 字节，要检查余额的地址
`quantity|tag` - 整数块编号，或者字符串"latest", "earliest" 或 "pending"

**返回值**

`quantity:`当前余额，单位:wei

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x407d73d8a 49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}'
//Response
{
"id":1,
 "jsonrpc": "2.0",
"result": "0x0234c8a3397aab58" // 158972490234375000 }
 ```

 #### eth_getStorageAt

返回指定地址存储位置的值。

**参数**

`DATA:` 20 字节，存储地址
`QUANTITY:` 存储中的位置号
`QUANTITY|TAG` 整数块号，或字符串"latest"、"earliest" 或"pending" 

**返回值**

`DATA:` 指定存储位置的值

**示例**

根据存储计算正确的地址。下面的合约是由上的:`0x391694e7e0b0cce554cb130d723a9d27458f9298`部署在地址`0x295a70b2de5e3953354a6a8344e616ed314d7251`上的
  
    contract Storage { 
        uint pos0;
        mapping(address => uint) pos1;
        function Storage() { 
           pos0 = 1234;
           pos1[msg.sender] = 5678; 
        }
    }

直接提取 pos0 的值:

```javascript
//Resquest
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295 a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"], "id": 1}' localhost:8545
//Response
{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000 0000000000000004d2"}
```

要提取映射表中的成员就难一些了。映射表中成员位置的计算如下:

    keccack(LeftPad32(key, 0), LeftPad32(map position, 0))

这意味着为了提取`pos1["0x391694e7e0b0cce554cb130d723a9d27458f9298"]`的值， 我们需要如下计算:

    keccak(decodeHex("000000000000000000000000391694e7e0b0cce554cb130d723a9d27 458f9298" + "000000000000000000000000000000000000000000000000000000000000 0001"))

geth 控制台自带的 web3 库可以用来进行这个计算:

    > var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9 298" + "0000000000000000000000000000000000000000000000000000000000000001"
    
    undefined

    > web3.sha3(key, {"encoding": "hex"}) 
    "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"

现在可以提取指定地址的值了:

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295
 a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd5 1ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"], "id": 1}' localhost:8545
//Response
{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000 00000000000000162e"}
```
#### eth_getTransactionCount

返回指定地址发生的交易数量。

**参数**

`DATA:` 20 字节，地址
`QUANTITY|TAG` 整数块编号，或字符串"latest"、"earliest"或"pending"
 
**返回**

`QUANTITY` 从指定地址发出的交易数量，整数

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x4 07d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x1" // 1 }
```

#### eth_getBlockTransactionCountByHash

返回指定块内的交易数量，使用哈希来指定块。

**参数**

`DATA:` 32 字节，块哈希

**返回**

`QUANTITY` 指定块内的交易数量，整数

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash"," params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce56823 8"],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0xb" 
}
```
 
#### eth_getBlockTransactionCountByNumb 

返回指定块内的交易数量，使用块编号指定块。

**参数**

`QUANTITY|TAG:` 整数块编号，或字符串"earliest"、"latest"或"pending" 

**返回**

`QUANTITY:` 指定块内的交易数量

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber ","params":["0xe8"],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0xa" 
}
```
#### eth_getUncleCountByBlockHash

返回指定块的叔数量，使用哈希指定块。
 
**参数**

- `string` DATA, 32 字节，块哈希

**返回值**

- `string:` QUANTITY，指定块的叔数量，整数

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","param s":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id ":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x1"
}
```

#### eth_getCode

返回指定地址的代码。

**参数**

- `string:` DATA ,20 字节，地址
- `string`  QUANTITY|TAG, 整数块编号，或字符串"latest"、"earliest" 或"pending"

**返回**

- `string` DATA: 指定地址处的代码

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xa94f5374fce5 edbc8e2a8697c15331677e6ebf0b", "0x2"],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```
#### eth_sign

使用如下公式计算签名:`sign(keccak256("\x19 Signed Message:\n" + len(message) + message)))`
通过给消息添加一个前缀，可以让结果签名被识别为签名。这可以组织恶意 DApp 签名任意数据(例如交易)并使用签名冒充受害者。需要指出的是，进行签名的地址必须是解锁的。

**参数**

- `string` DATA 20 字节，地址
- `string` 要签名的消息

**返回值**

- `string` DATA: 签名

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x9b2055d370f73ec
 7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

#### eth_sendTransaction

创建一个新的消息调用交易，如果数据字段中包含代码，则创建一个合约。

**参数**

- `from:` DATA, 20 字节 - 发送交易的源地址
- `to:` DATA, 20 字节 - 交易的目标地址，当创建新合约时可选
- `gas:` QUANTITY - 交易执行可用 gas 量，可选整数，默认值 90000，未用 gas 将返还。
- `gasPrice:` QUANTITY - gas 价格，可选，默认值:待定(To-Be-Determined)
- `value:` QUANTITY - 交易发送的金额，可选整数
- `data:` DATA - 合约的编译代码或被调用方法的签名及编码参数
- `nonce:` QUANTITY - nonce，可选。可以使用同一个 nonce 来重写挂起的交易

**返回**

- `string:` DATA, 32 字节 - 交易哈希，如果交易还未生效则返回 0 值哈希。当创建合约时，在交易生效后，使用 eth_getTransactionReceipt 调用获取合约地址。

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see ab ove}],"id":1}'
//Response
{
"id":1,
 "jsonrpc": "2.0",
"result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

#### eth_sendRawTransaction

为签名交易创建一个新的消息调用交易或合约。

**参数**

- `string:` DATA, 签名的交易数据

**返回值**

- `string:` DATA ,32字节，交易哈希，如果交易未生效则返回全0哈希。当创建合约时，在交易生效后，使用eth_getTransactionReceipt获取合约地址。

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675" ],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```
#### eth_call

立刻执行一个新的消息调用，无需在区块链上创建交易。

**参数**

- `from:` DATA, 20 Bytes - 发送交易的原地址，可选
- `to:` DATA, 20 Bytes - 交易目标地址
- `gas:` QUANTITY - 交易可用 gas 量，可选。eth_call 不消耗 gas，但是某些 执行环节需要这个参数
- `gasPrice:` QUANTITY - gas 价格，可选
- `value:` QUANTITY - 交易发送的 sipc 数量，可选
- `data:` DATA - 方法签名和编码参数的哈希，可选
- `string:` QUANTITY|TAG - 整数块编号，或字符串"latest"、"earliest"或"pending" 

**返回值**

- `result:` DATA- 所执行合约的返回值

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675" ],"id":1}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x" }
```
####  eth_estimateGas

执行并估算一个交易需要的 gas 用量。该次交易不会写入区块链。注意，由于多 种原因，例如 EVM 的机制及节点的性能，估算的数值可能比实际用量大的多。

**参数**

- `from:` DATA, 20 Bytes - 发送交易的原地址，可选
- `to:` DATA, 20 Bytes - 交易目标地址
- `gas:` QUANTITY - 交易可用 gas 量，可选。eth_call 不消耗 gas，但是某些 执行环节需要这个参数
- `gasPrice:` QUANTITY - gas 价格，可选
- `value:` QUANTITY - 交易发送的 sipc 数量，可选
- `data:` DATA - 方法签名和编码参数的哈希，可选
- `string:` QUANTITY|TAG - 整数块编号，或字符串"latest"、"earliest"或"pending"

**返回值**

- `result:` QUANTITY - gas用量估算值

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see abov e}],"id":1}'
//response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x5208" // 21000
 }
 ```

#### eth_getBlockByHash

返回具有指定哈希的块。

**参数**

- DATA, 32 字节 - 块哈希
- Boolean - 为 true 时返回完整的交易对象，否则仅返回交易哈希

**返回值**

- `number:` QUANTITY - 块编号，挂起块为 null
- `hash:` DATA, 32 Bytes - 块哈希，挂起块为 null
- `parentHash:` DATA, 32 Bytes - 父块的哈希
- `nonce:` DATA, 8 Bytes - 生成的 pow 哈希，挂起块为 null
- `sha3Uncles:` DATA, 32 Bytes - 块中叔数据的 SHA3 哈希
- `logsBloom:` DATA, 256 Bytes - 块日志的 bloom 过滤器，挂起块为null
- `ansactionsRoot:` DATA, 32 Bytes - 块中的交易树根节点
- `stateRoot:` DATA, 32 Bytes - 块最终状态树的根节点
- `receiptsRoot:` DATA, 32 Bytes - 块交易收据树的根节点 
- `miner:` DATA, 20 Bytes - 挖矿奖励的接收账户
- `difficulty`: QUANTITY - 块难度，整数
- `totalDifficulty:` QUANTITY - 截止到本块的链上总难度 
- `extraData:` DATA - 块额外数据
- `size:` QUANTITY - 本块字节数
- `gasLimit:` QUANTITY - 本块允许的最大 gas 用量
- `gasUsed:` QUANTITY - 本块中所有交易使用的总 gas 用量
- `timestamp:` QUANTITY - 块时间戳
- `transactions:` Array - 交易对象数组，或 32 字节长的交易哈希数组
- `uncles:` Array - 叔哈希数组

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xe670 ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true],"id":1}'
//Response
{
"id":1, 
"jsonrpc":"2.0",
"result": {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a", "difficulty": "0x027f07", // 163591
    "totalDifficulty": "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000 000000000",
    "size": "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145 
    "gasUsed": "0x9f759", // 653145 
    "timestamp": "0x54e34e8e" // 1424182926 
    "transactions": [{...},{ ... }]
    "uncles": ["0x1606e5...", "0xd5145a9..."] 
    }
}
```

#### eth_getTransactionByHash

返回指定哈希对应的交易。

**参数**

- DATA ,32 字节 - 交易哈希

**返回值**
 
- `hash:` DATA, 32 字节 - 交易哈希
- `nonce:` QUANTITY - 本次交易之前发送方已经生成的交易数量
- `blockHash:` DATA, 32 字节 - 交易所在块的哈希，对于挂起块，该值为 null 
- `blockNumber:` QUANTITY - 交易所在块的编号，对于挂起块，该值为 null
- `transactionIndex:` QUANTITY - 交易在块中的索引位置，挂起块该值为 null
- `from:` DATA, 20 字节 - 交易发送方地址
- `to:` DATA, 20 字节 - 交易接收方地址，对于合约创建交易，该值为 null
- `value:` QUANTITY - 发送的 sipc 数量，单位:wei
- `gasPrice:` QUANTITY - 发送方提供的 gas 价格，单位:wei 
- `gas:` QUANTITY - 发送方提供的 gas 可用量
- `input:` DATA - 随交易发送的数据

示例代码

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0 xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
//Response
{
"id":1, 
"jsonrpc":"2.0", 
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d105 5b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex": "0x1", // 1 
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1", "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1", 
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464 
    "gasPrice":"0x09184e72a000", 
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360", 
    }
}
```

#### eth_getTransactionByBlockHashAndIn

返回指定块内具有指定索引序号的交易。

**参数**

- DATA, 32 字节 - 块哈希
- QUANTITY - 交易在块内的索引序号

**返回**

- `hash:` DATA, 32 字节 - 交易哈希
- `nonce:` QUANTITY - 本次交易之前发送方已经生成的交易数量
- `blockHash:` DATA, 32 字节 - 交易所在块的哈希，对于挂起块，该值为 null 
- `blockNumber:` QUANTITY - 交易所在块的编号，对于挂起块，该值为 null
- `transactionIndex:` QUANTITY - 交易在块中的索引位置，挂起块该值为 null
- `from:` DATA, 20 字节 - 交易发送方地址
- `to:` DATA, 20 字节 - 交易接收方地址，对于合约创建交易，该值为 null
- `value:` QUANTITY - 发送的 sipc 数量，单位:wei
- `gasPrice:` QUANTITY - 发送方提供的 gas 价格，单位:wei 
- `gas:` QUANTITY - 发送方提供的 gas 可用量
- `input:` DATA - 随交易发送的数据

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndInde x","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d10 55b", "0x0"],"id":1}'
//Response
{
"id":1, 
"jsonrpc":"2.0", 
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d105 5b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex": "0x1", // 1 
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1", "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1", 
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464 
    "gasPrice":"0x09184e72a000", 
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360", 
    }
}
```

### eth_getTransactionByBlockNumberAndIndex

返回指定编号的块内具有指定索引序号的交易。

**参数**

- QUANTITY|TAG - 整数块编号，或字符串"earliest"、"latest" 或"pending" 
- QUANTITY - 交易索引序号

**返回值**

- `hash:` DATA, 32 字节 - 交易哈希
- `nonce:` QUANTITY - 本次交易之前发送方已经生成的交易数量
- `blockHash:` DATA, 32 字节 - 交易所在块的哈希，对于挂起块，该值为 null 
- `blockNumber:` QUANTITY - 交易所在块的编号，对于挂起块，该值为 null
- `transactionIndex:` QUANTITY - 交易在块中的索引位置，挂起块该值为 null
- `from:` DATA, 20 字节 - 交易发送方地址
- `to:` DATA, 20 字节 - 交易接收方地址，对于合约创建交易，该值为 null
- `value:` QUANTITY - 发送的 sipc 数量，单位:wei
- `gasPrice:` QUANTITY - 发送方提供的 gas 价格，单位:wei 
- `gas:` QUANTITY - 发送方提供的 gas 可用量
- `input:` DATA - 随交易发送的数据

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIn dex","params":["0x29c", "0x0"],"id":1}'
//Response
{
"id":1, 
"jsonrpc":"2.0", 
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d105 5b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex": "0x1", // 1 
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1", "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1", 
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464 
    "gasPrice":"0x09184e72a000", 
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360", 
    }
}
```

#### eth_getTransactionReceipt

返回指定交易的收据，使用哈希指定交易。需要指出的是，挂起的交易其收据无效

**参数**

- DATA, 32字节，交易哈希

**返回**

-  `transactionHash:` DATA, 32 字节 - 交易哈希
-  `transactionIndex:` QUANTITY - 交易在块内的索引序号
-  `blockHash:` DATA, 32 字节 - 交易所在块的哈希
-  `blockNumber:` QUANTITY - 交易所在块的编号
-  `from:` DATA, 20 字节 - 交易发送方地址
-  `to:` DATA, 20 字节 - 交易接收方地址，对于合约创建交易该值为 null
-  `cumulativeGasUsed:` QUANTITY - 交易所在块消耗的 gas 总量
-  `gasUsed:` QUANTITY - 该次交易消耗的 gas 用量
-  `contractAddress:` DATA, 20 字节 - 对于合约创建交易，该值为新创建的合 约地址，否则为 null
-  `logs:` Array - 本次交易生成的日志对象数组
-  `logsBloom:` DATA, 256 字节 - bloom 过滤器，轻客户端用来快速提取相关日志
-  `root:` DATA 32 字节，后交易状态根(pre Byzantium) 
-  `status:` QUANTITY ，1 (成功) 或 0 (失败)

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0x b903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'
//Response
{
"id":1,
"jsonrpc":"2.0", 
"result": {
  transactionHash: '0xb903239f8543d04b5dc1ba6579132b143087c68db1b216878640 8fcbce568238',
  transactionIndex: '0x1', // 1
  blockNumber: '0xb', // 11
  blockHash: '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1 d1055b',
  cumulativeGasUsed: '0x33bc', // 13244
  gasUsed: '0x4dc', // 1244
  contractAddress: '0xb60e8dd61c5d32be8058bb8eb970870f07233155', // or null, if none was created logs: [{
// logs as returned by getFilterLogs, etc. }, ...],
logsBloom: "0x00...0", // 256 byte bloom filter
status: '0x1' }
}
```
#### eth_getUncleByBlockHashAndIndex

根据指定的块哈希和索引位置查找的叔块。

**参数**

- DATA, 32 字节 - 块哈希 
- QUANTITY - 叔索引位置

**返回值**


**示例**
```javascript
//Request

//Response

 
示例

**参数**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","par ams":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", " 0x0"],"id":1}'
//Response
```

#### eth_getUncleByBlockNumberAndIndex

根据制定的编号和索引序号查找叔块

**参数**

- QUANTITY|TAG - 整数块编号，或字符串"earliest"、"latest" 或"pending"
- QUANTITY – 叔块在块内的索引序号

**返回**

-
**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex"," params":["0x29c", "0x0"],"id":1}'
//Response

```

#### eth_newFilter

基于给定的选项创建一个过滤器对象，接收状态变化时的通知。要检查状态是否变化，请调用`eth_getFilterChanges`。

关于特定主题过滤器的说明:主题是顺序相关的。如果一个交易的日志有主题[A, ，那么将被以下的主题过滤器匹配:

- []任何主题
- [A]先匹配A主题
- [null,B]先匹配其他主题，再匹配B主题
- [A,B]先匹配A主题，再匹配B主题，最后匹配其他主题
- [[A,B][A,B]"先匹配A主题或B主题，再匹配A主题或B主题,最后匹配其他主题"]

**参数**

- `fromBlock:` QUANTITY|TAG - 可选，默认值:"latest"。整数块编号，或字符串
"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。 
- `toBlock:` QUANTITY|TAG - 可选，默认值:"latest"。整数块编号，或字符串
"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。 
- `address:` DATA|Array, 20 字节 - 可选，合约地址或生成日志的一组地址
- `topics:` Array of DATA, - 可选，32 字节主题数组，每个主题可以是数组或使用 or 选项连接

**返回值**

 - QUANTITY，过滤器编号

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":73}'
//Response
{
"id":1,
"jsonrpc": "2.0", "result": "0x1" // 1
}
```
#### eth_newBlockFilter

在节点中创建一个过滤器，以便当新块生成时进行通知。要检查状态是否变化，请调用`eth_getFilterChanges`.

**参数**

`无`

**返回**

- QUANTITY 过滤器编号

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":73}'
//Response
{
"id":1,
"jsonrpc": "2.0", "result": "0x1" // 1
}
```

#### eth_newPendingTransactionFilter

在节点中创建一个过滤器，以便当产生挂起交易时进行通知。要检查状态是否发生变化，请调用`eth_getFilterChanges`。

**参数**

`无`

**返回值**

- QUANTITY 过滤器编号

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","para ms":[],"id":73}'
//Response
{
"id":1,
"jsonrpc": "2.0",
"result": "0x1" // 1 
}
```
#### eth_uninstallFilter

卸载具有指定编号的过滤器。当不在需要监听时，总是需要执行该调用。另外，过滤器如果在一定时间内未接收到`eth_getFilterChanges`调用会自动超时。

**参数**

- QUANTITY, 过滤器编号

**返回**

- Boolean, 如果成功卸载则返回true,否则返回false

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0xb"],"id":7 3}'
//Response
{
  "id":1,
  "jsonrpc": "2.0",
  "result": true 
}
```

#### eth_getFilterChanges

轮询指定的过滤器，并返回自上次轮询之后新生成的日志数组。

**参数**

- QUANTITY, 过滤器编号
 
**返回值**

- Array, 日志对象数组，如果没有新生成的日志，则返回空数组。使用`eth_newBlockerFilter`创建的过滤器将返回块哈希(32 字节)，例如[")x3454645634534"]。
使用`eth_newPendingTransactionFilter`创建的过滤器将返回交易哈希 (32 字节)，例如["0x6345343454645..."]。使用`eth_newFilter`创建的过滤器，日志对象具有如下数参数：

- `removed:` TAG - 如果日志已被删除则返回 true，如果是有效日志则返回false
- `logIndex:` QUANTITY - 日志在块内的索引序号。对于挂起日志，该值为 null
- `transactionIndex:` QUANTITY - 创建日志的交易索引序号，对于挂起日志，该值为 null
- `transactionHash:` DATA, 32 字节 - 创建该日志的交易的哈希。对于挂起日志，该值为 null
- `blockHash:` DATA, 32 字节 - 该日志所在块的哈希。对于挂起日志，该值为null
- `blockNumber:` QUANTITY - 该日志所在块的编号。对于挂起日志，该值为 null
- `address:` DATA, 20 字节 - 该日志的源地址
- `data:` DATA - 包含该日志的一个或多个 32 字节无索引参数
- `topics:` Array of DATA -0~4 个 32 字节索引日志参数的数据。在 `solidity` 中，第一个主题是事件签名，例如 `Deposit(address,bytes32,uint256)`，除非你声明的是匿名事件

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x16"]," id":73}'
//Response
{
  "id":1,
  "jsonrpc":"2.0", "result": [{
  "logIndex": "0x1", // 1
  "blockNumber":"0x1b4", // 436
  "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "transactionHash": "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562f f41e2dcf",
  "transactionIndex": "0x0", // 0
  "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "data":"0x0000000000000000000000000000000000000000000000000000000000000 000",
  "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"] },{... }]
}  
```

#### eth_getFilterLogs

返回指定编号过滤器中的全部日志。

**参数**

- QUANTITY, 过滤器编号

**返回**

- `removed:` TAG - 如果日志已被删除则返回true，如果是有效日志则返回false
- `logIndex:` QUANTITY - 日志在块内的索引序号。对于挂起日志，该值为null
- `transactionIndex:` QUANTITY - 创建日志的交易索引序号，对于挂起日志，该值为null
- `transactionHash:` DATA, 32 字节 - 创建该日志的交易的哈希。对于挂起日志，该值为null
- `blockHash:` DATA, 32 字节 - 该日志所在块的哈希。对于挂起日志，该值为null
- `blockNumber:` QUANTITY - 该日志所在块的编号。对于挂起日志，该值为null
- `address:` DATA, 20 字节 - 该日志的源地址
- `data:` DATA - 包含该日志的一个或多个32字节无索引参数
- `topics:` Array of DATA -0~4 个 32字节索引日志参数的数据。在 `solidity` 中，第一个主题是事件签名，例如 `Deposit(address,bytes32,uint256)`，除非你声明的是匿名事件

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x16"],"id": 74}'
//Response
{
  "id":1,
  "jsonrpc":"2.0", "result": [{
  "logIndex": "0x1", // 1
  "blockNumber":"0x1b4", // 436
  "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "transactionHash": "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562f f41e2dcf",
  "transactionIndex": "0x0", // 0
  "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "data":"0x0000000000000000000000000000000000000000000000000000000000000 000",
  "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"] },{... }]
}  
```
 
#### eth_getLogs

返回指定过滤器中的所有日志。

**参数**

- `fromBlock:` QUANTITY|TAG - 可选，默认值:"latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。 
- `toBlock:` QUANTITY|TAG - 可选，默认值:"latest"。整数块编号，或字符串"latesr"表示最后挖出的块，"pending"或"earliest"用于未挖出的交易。 
- `address:` DATA|Array, 20 字节 - 可选，合约地址或生成日志的一组地址
- `topics:` Array of DATA, - 可选，32字节主题数组，每个主题可以是数组或使用or选项连接

**返回值**

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x0000 00000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'
//Response
{
  "id":1,
  "jsonrpc":"2.0", "result": [{
  "logIndex": "0x1", // 1
  "blockNumber":"0x1b4", // 436
  "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "transactionHash": "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562f f41e2dcf",
  "transactionIndex": "0x0", // 0
  "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
  "data":"0x0000000000000000000000000000000000000000000000000000000000000 000",
  "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"] },{... }]
}  

```
#### eth_getWork

返回当前块的哈希、种子哈希，以及要满足的边界条件，即目标。

**参数**

无

**返回值**

- `DATA`, 32 字节 - 当前块头的 pow-hash
- `DATA`, 32 字节 - 用于 DAG 的种子哈希
- `DATA`, 32 字节 - 边界条件，目标， 2^256 / difficulty
 
```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getWork","params":[],"id":73}'
//Response
{
   "id":1,
   "jsonrpc":"2.0", 
   "result": [
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", 
      "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
      "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
   ] 
}
```

#### eth_submitWork

用于提交POW解决方案。
 
**参数**

- `DATA`, 8 字节 - nonce，64 位
- `DATA`, 32 字节 - 头部的 pow 哈希，256 位  DATA, 32 字节 - 混合摘要，256 位

**返回**

- `Boolean`, 如果提交的方案有效则返回true，否则返回false

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0", "method":"eth_submitWork", "params":["0x000000 0000000001", "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890a bcdef", "0xD1GE5700000000000000000000000000D1GE5700000000000000000000000 000"],"id":73}'
//Response
{
  "id":73,
  "jsonrpc":"2.0",
  "result": true 
}

```

#### eth_submitHashrate

用于提交挖矿的哈希速率。
 
**参数**

- `hashRate` - 哈希速率，采用 16 进制字符串表示，32 字节
- `ID`, String - 随机 16 进制字符串，32 字节，用于标识客户端的编号

**返回**

- `Boolean`, 如果提交成功则返回 true，否则返回 false
**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0", "method":"eth_submitHashrate", "params":["0x000 0000000000000000000000000000000000000000000000000000000500000", "0x59daa2 6581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"],"id":73}'
//Response
{
   "id":73,
   "jsonrpc":"2.0",
   "result": true 
}
```

#### eth_blockNumber

返回最新块的编号。

**参数**

无

**返回值**

- QUANTITY, 节点当前块编号

**示例**

```javascript
//Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'
//Response
{
"id":83,
"jsonrpc": "2.0",
"result": "0x4b7" // 1207 
}
```
