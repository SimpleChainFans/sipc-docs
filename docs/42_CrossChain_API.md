---
id: docs_42
title:  跨链 API
sidebar_label: 跨链 API
---

**API调用**

#### Sipc跨链API方法

- [`web3_clientVersion`](#web3_clientVersion)
- [`web3_sha3`](#web3_sha3)
- [`net_version`](#net_version)
- [`net_listening`](#net_listening)
- [`net_peerCount`](#net_peerCount)
- [`eth_syncing`](#eth_syncing)
- [`eth_mining`](#eth_mining)
- [`eth_hashrate`](#eth_hashrate)
- [`eth_gasPrice`](#eth_gasPrice)

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