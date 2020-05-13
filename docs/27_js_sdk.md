---
id: docs_27
title:  js_sdk
sidebar_label: js_sdk
---

# 介绍

`Node.js SDK <https://github.com/FISCO-BCOS/nodejs-sdk>`_ 提供了访问 `FISCO BCOS <https://github.com/FISCO-BCOS/FISCO-BCOS>`_ 节点的Node.js API，支持节点状态查询、部署和调用合约等功能，基于Node.js SDK可快速开发区块链应用，目前支持 `FISCO BCOS 2.0+  <../../../>`_ 

.. admonition:: **注意**
    :class: red

    **Node.js SDK目前仅处于个人开发者体验阶段，开发企业级应用请使用** `Web3SDK <../java_sdk.html>`_

.. admonition:: **主要特性**

    - 提供调用FISCO BCOS `JSON-RPC <../../api.html>`_ 的Node.js API
    - 提供部署及调用Solidity合约（支持Solidity 0.4.x 及Solidity 0.5.x）的Node.js API
    - 提供调用预编译（Precompiled）合约的Node.js API
    - 使用 `Channel协议 <../../design/protocol_description.html#channelmessage>`_ 与FISCO BCOS节点通信，双向认证更安全
    - 提供CLI（Command-Line Interface）工具供用户在命令行中方便快捷地与区块链交互

# 快速安装

## 环境要求

- Node.js开发环境
  - Node.js >= 8.10.0
  - npm >= 5.6.0

  如果您没有部署过Node.js环境，可以参考下列部署方式：
  - 如果您使用Linux或MacOS：

    推荐使用[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)快速部署，使用nvm同时也能够避免潜在的导致Node.js SDK部署失败的权限问题。以部署Node.js 8为例，部署步骤如下：

      ```bash
      # 安装nvm
      curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
      # 加载nvm配置
      source ~/.$(basename $SHELL)rc
      # 安装Node.js 8
      nvm install 8
      # 使用Node.js 8
      nvm use 8
      ```

  - 如果您使用Windows：

    请前往[Node.js官网](https://nodejs.org/en/download/)下载Windows下的安装包进行安装。

- 基本开发组件
  - Python 2（Windows、Linux及MacOS需要）
  - g++（Linux及MacOS需要）
  - make（Linux及MacOS需要）
  - Git（Windows、Linux及MacOS需要）
  - Git bash（仅Windows需要）
  - MSBuild构建环境（仅Windows需要）

- FISCO BCOS节点：请参考[FISCO BCOS安装](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/installation.html#fisco-bcos)搭建

## 部署Node.js SDK

### 拉取源代码

```bash
git clone https://github.com/FISCO-BCOS/nodejs-sdk.git
```

### 使用npm安装依赖项

*如果您的网络中使用了代理，请先为npm配置代理：*

```bash
npm config set proxy <your proxy>
npm config set https-proxy <your proxy>
```

*如果您所在的网络不便访问npm官方镜像，请使用其他镜像代替，如淘宝：*

```bash
npm config set registry https://registry.npm.taobao.org
```

```bash
# 部署过程中请确保能够访问外网以能够安装第三方依赖包
cd nodejs-sdk
npm install
npm run repoclean
npm run bootstrap
```

## Node.js CLI

Node.js SDK内嵌CLI工具，供用户在命令行中方便地与区块链进行交互。CLI工具在Node.js SDK提供的API的基础上开发而成，使用方式与结果输出对脚本友好，同时也是一个展示如何调用Node.js API进行二次开发的范例。

**快速建链（可选）**

*若您的系统中已经搭建了FISCO BCOS链，请跳过本节。*

```bash
# 获取开发部署工具
curl -LO https://github.com/FISCO-BCOS/FISCO-BCOS/releases/download/`curl -s https://api.github.com/repos/FISCO-BCOS/FISCO-BCOS/releases | grep "\"v2\.[0-9]\.[0-9]\"" | sort -u | tail -n 1 | cut -d \" -f 4`/build_chain.sh && chmod u+x build_chain.sh
# 在本地建一个4节点的FISCO BCOS链
bash build_chain.sh -l "127.0.0.1:4" -p 30300,20200,8545 -i
# 启动FISCO BCOS链
bash nodes/127.0.0.1/start_all.sh
```

**配置证书及Channel端口**

- 配置证书

    修改配置文件，证书配置位于`packages/cli/conf/config.json`文件的`authentication`配置项中。你需要根据您实际使用的证书文件的路径修改该配置项的`key`、`cert`及`ca`配置，其中`key`为SDK私钥文件的路径，`cert`为SDK证书文件的路径，`ca`为链根证书文件的路径，这些文件可以由[开发部署工具](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/manual/build_chain.html)或[运维部署工具](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/enterprise_tools/index.html)自动生成，具体的生成方式及文件位置请参阅上述工具的说明文档。

- 配置Channel端口

    修改配置文件，节点IP及端口配置位于`packages/cli/conf/config.json`文件的`nodes`配置项中。您需要根据您要连接FISCO BCOS节点的实际配置修改该配置项的`ip`及`port`配置，其中`ip`为所连节点的IP地址，`port`为节点目录下的 config.ini 文件中的`channel_listen_port`配置项的值。如果您使用了快速搭链，可以跳过此步。

配置完成后，即可开始使用CLI工具，CLI工具位于`packages/cli/cli.js`，所有操作均需要在`packages/cli/`目录下执行，您需要先切换至该目录：

```
cd packages/cli
```

**开启自动补全（仅针对bash及zsh用户，可选）**

为方便用户使用CLI工具，CLI工具支持在bash或zsh中进行自动补全，此功能需要手动启用，执行命令：

```bash
rcfile=~/.$(basename $SHELL)rc && ./cli.js completion >> $rcfile && source $rcfile
```

便可启用自动补全。使用CLI工具时，按下`Tab`键（依据系统配置的不同，可能需要按两下）便可弹出候选命令或参数的列表并自动补全。

**示例**

以下给出几个使用示例：

**查看CLI工具的帮助**

```bash
./cli.js --help
```

**查看CLI工具能够调用的命令及对应的功能**

```bash
./cli.js list
```

*以下示例中的输入、输出及参数仅供举例*

**查看所连的FISCO BCOS节点版本**

```bash
./cli.js getClientVersion
```

输出如下：

```JSON
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "Build Time": "20190705 21:19:13",
    "Build Type": "Linux/g++/RelWithDebInfo",
    "Chain Id": "1",
    "FISCO-BCOS Version": "2.0.0",
    "Git Branch": "master",
    "Git Commit Hash": "d8605a73e30148cfb9b63807fb85fa211d365014",
    "Supported Version": "2.0.0"
  }
}
```

**获取当前的块高**

```bash
./cli.js getBlockNumber
```

输出如下：

```JSON
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xfa"
}
```

**部署SDK自带的HelloWorld合约**

```bash
./cli.js deploy HelloWorld
```

输出如下：

```JSON
{
  "contractAddress": "0x11b6d7495f2f04bdca45e9685ceadea4d4bd1832"
}
```

**调用HelloWorld合约的set接口，请将合约地址改为实际地址**

```bash
./cli.js call HelloWorld 0x11b6d7495f2f04bdca45e9685ceadea4d4bd1832 set vita
```

输出如下：

```JSON
{
  "transactionHash": "0xa71f136107389348d5a092a345aa6bc72770d98805a7dbab0dbf8fe569ff3f37",
  "status": "0x0"
}
```

**调用HelloWorld合约的get接口，请将合约地址改为实际地址**

```bash
./cli.js call HelloWorld 0xab09b29dd07e003776d22566ae5c078f2cb2279e get
```

输出如下：

```JSON
{
  "status": "0x0",
  "output": {
    "0": "vita"
  }
}
```

**CLI帮助**

如果您想知道某一个命令该如何使用，可以使用如下的命令：

```bash
./cli.js <command> ?
```

其中command为一个命令名，使用`?`作为参数便可获取该命令的使用提示，如：

```bash
./cli.js call ?
```

会得到如下的输出：

```bash
cli.js call <contractName> <contractAddress> <function> [parameters...]

Call a contract by a function and parameters

位置：
  contractName     The name of a contract                        [字符串] [必需]
  contractAddress  20 Bytes - The address of a contract          [字符串] [必需]
  function         The function of a contract                    [字符串] [必需]
  parameters       The parameters(splited by a space) of a function
                                                             [数组] [默认值: []]

选项：
  --help     显示帮助信息                                                 [布尔]
  --version  显示版本号                                                   [布尔]
```

# 配置说明

Node.js SDK的配置文件为一个JSON文件，主要包括**通用配置**，**群组配置**，**通信配置**和**证书配置**。

## 通用配置

- `privateKey`: `object`，必需。外部账户的私钥，可以为一个256 bits的随机整数，也可以是一个pem或p12格式的私钥文件，后两者需要结合[get_account.sh](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/manual/account.html)生成的私钥文件使用。`privateKey`包含两个必需字段，一个可选字段：
  - `type`: `string`，必需。用于指示私钥类型。`type`的值必需为下列三个值之一：
    - `ecrandom`：随机整数
    - `pem`：pem格式的文件
    - `p12`：p12格式的文件
  - `value`：`string`，必需。用于指示私钥具体的值：
    - 如果`type`为`ecrandom`，则`value`为一个长度为256 bits 的随机整数，其值介于1 ~ 0xFFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFE BAAE DCE6 AF48 A03B BFD2 5E8C D036 4141之间。
    - 如果`type`为`pem`，则`value`为pem文件的路径，如果是相对路径，需要以配置文件所在的目录为相对路径起始位置。
    - 如果`type`为`p12`，则`value`为p12文件的路径，如果是相对路径，需要以配置文件所在的目录为相对路径起始位置。
  - `password`：`string`，可选。如果`type`为`p12`，则需要此字段以解密私钥，否则会忽略该字段。
- `timeout`: `number`。Node.js SDK所连节点可能会陷入停止响应的状态。为避免陷入无限等待，Node.js SDK的每一次API调用在`timeout`之后若仍没有得到结果，则强制返回一个错误对象。`timeout`的单位为毫秒。
- `solc`: `string`，可选。Node.js SDK已经自带0.4.26及0.5.10版本的Solidity编译器，如果您有特殊的编译器需求，可以设置本配置项为您的编译器的执行路径或全局命令

## 群组配置

- `groupID`: `number`。Node.js SDK访问的链的群组ID

## 通信配置

- `nodes`: `list`，必需。FISCO BCOS节点列表，Node.js SDK在访问节点时时会从该列表中随机挑选一个节点进行通信，要求节点数目必须 >= 1。在FISCO BCOS中，一笔交易上链并不代表网络中的所有节点都已同步到了最新的状态，如果Node.js SDK连接了多个节点，则可能会出现读取不到最新状态的情况，因此在对状态同步有较高要求的场合，请谨慎连接多个节点。每个节点包含两个字段：
  - `ip`: `string`，必需。FISCO BCOS节点的IP地址
  - `port`: `string`，必需，FISCO BCOS节点的Channel端口

## 证书配置
- `authentication`：`object`。必需，包含建立Channel通信时所需的认证信息，一般在建链过程中自动生成。`authentication`包含三个必需字段：
  - `key`: `string`，必需。私钥文件路径，如果是相对路径，需要以配置文件所在的目录为相对路径起始位置。
  - `cert`: `string`，必需。证书文件路径，如果是相对路径，需要以配置文件所在的目录为相对路径起始位置。
  - `ca`: `string`，必需。CA根证书文件路径，如果是相对路径，需要以配置文件所在的目录为相对路径起始位置。

# API




