---
id: docs_29
title: Equity介绍
sidebar_label: Equity介绍
---

Equity是用于表达合约程序的高级语言，专门用来编写运行在[Bytom](https://github.com/Bytom/bytom)上的合约程序，Equity智能合约主要用于描述对`Bytom`上的各类资产的操作管理。

合约的主要特征如下：

- `Bytom`采用`BUTXO`结构，区块链上记录着由多种不同类型的`UTXO`构成的账本。每一笔`UTXO`都有两个重要属性：资产编号`assetID`和资产数量`amount`，一般将指定数量`amount`的资产`assetID`抽象地指代一笔`UTXO`。
- 比原链上的所有资产都是锁定在合约`program`中，`valueAmount`数量的`valueAsset`资产(即`UTXO`）一旦被一个合约解锁，仅仅是为了被一个或多个其他合约来进行锁定
- 合约保护资产`valueAmount of valueAsset`的方式是只有用户输入正确的解锁参数才能使合约程序在虚拟机中执行成功

因此，用`Equity`语言编写的智能合约，其目的就是 “描述用智能合约锁定哪些资产，以及定义在哪些条件下可以解锁指定的资产”。
