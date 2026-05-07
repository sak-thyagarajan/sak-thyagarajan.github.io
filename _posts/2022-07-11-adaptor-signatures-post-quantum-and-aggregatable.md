---
layout: post
title: "Adaptor Signatures: Post Quantum and Aggregatable"
date: 2022-07-11 00:00:00 +0000
description: "Adaptor signatures for GPV signatures, post-quantum security, and aggregation."
tags: cryptography blockchains post-quantum lattice-based-cryptography adaptor-signatures
categories: tech-blog
math: true
---

**TL;DR:** We have a new paper, *[Lattice-Based SNARKs: Publicly Verifiable, Preprocessing, and Recursively Composable](https://eprint.iacr.org/2022/941)*, with [Martin R. Albrecht](https://malb.io), [Valerio Cini](https://sites.google.com/view/valeriocini/home), [Giulio Malavolta](https://sites.google.com/view/giuliomalavolta/), and [Russell W.F. Lai](https://russell-lai.hk), at IACR CRYPTO 2022. In this paper, we propose a new lattice-based vector commitment (VC) and subsequently a succinct non-interactive argument of knowledge (SNARK) proof that natively supports ring relations.

As applications, we show how one can aggregate GPV signatures, gaining in both compactness and verification. We also propose how one can build adaptor signatures for GPV signatures, which has several applications in blockchains and cryptocurrencies. For more details, you can check the [paper](https://eprint.iacr.org/2022/941). For simpler explanations on our SNARK, you can check out [Russell's post](https://russell-lai.hk/2022/07/11/lattice-based-snarks-from-krisis-of-knowledge/), and for details about new lattice techniques and a new assumption called kRISIS, you can check out [Martin's post](https://martinralbrecht.wordpress.com). In this post, we will see how we build adaptor signatures for GPV.

## Adaptor Signatures

Adaptor signatures have been around the past few years, originally proposed in a mailing list in the context of making conditional cryptocurrency payments. Several cryptocurrency applications like Payment Channel Networks, Atomic Swaps, and Coin mixing have since been developed using adaptor signatures. Using this cryptographic primitive, we no longer rely on HTLC scripts or smart contracts for conditional payments in the above mentioned applications. As a result of using adaptor signatures, we are able to get better fungibility and lower on-chain costs.

The idea of adaptor signatures is quite simple.

Let's say we are given a digital signature scheme

$$
\mathsf{DS} = (\mathsf{KGen}, \mathsf{Sign}, \mathsf{Verify})
$$

and an NP relation $R$. Using adaptor signatures, we can generate a partial signature referred to as a *pre-signature* $\hat{\sigma}$ on a transaction message $m$, using the signing key $\mathsf{sk}$ and a statement $Y$ in the NP language corresponding to the relation $R$. This is done using a pre-sign algorithm as follows:

$$
\hat{\sigma} \leftarrow \mathsf{pSign}(\mathsf{sk}, m, Y)
$$

The pre-signature itself is not a valid signature, but can be verified if it is a valid pre-signature using the pre-verify algorithm:

$$
0/1 \leftarrow \mathsf{PreVerify}(\mathsf{pk}, m, Y, \hat{\sigma})
$$

There are two crucial functionalities of interest for payment applications. First is that we can transform or adapt a pre-signature $\hat{\sigma}$ into a valid signature $\sigma$ on the message $m$, if we are given access to the witness $y$ such that

$$
(Y, y) \in R.
$$

To do this, we have the adapt algorithm:

$$
\sigma \leftarrow \mathsf{Adapt}(\hat{\sigma}, y)
$$

The second functionality is that, given the pre-signature $\hat{\sigma}$ and the signature $\sigma$ that was adapted from it, we can efficiently retrieve the witness $y$ using the extract algorithm:

$$
y \leftarrow \mathsf{Ext}(\hat{\sigma}, \sigma)
$$

Currently, we know how to build adaptor signatures for Schnorr and ECDSA. We also know how to do this for some lattice-based and isogeny-based signature schemes.

## GPV Signatures

Gentry, Peikert and Vaikuntanathan in 2008 proposed a lattice-based signature scheme which is conjectured to be post-quantum secure. An instantiation of the GPV signature paradigm is Falcon, which recently won the NIST post-quantum standardization process.

In this signature scheme, we have a matrix $\mathbf{A}$ which is the public key, and a trapdoor $\mathit{td}$ corresponding to $\mathbf{A}$ as the secret key. To sign a message $m$, we are able to use the trapdoor $\mathit{td}$ to sample a small vector $\mathbf{u}$ where

$$
\mathbf{A} \cdot \mathbf{u} = H(m) \bmod q.
$$

This signature scheme is interesting because the signature is set to be this short vector $\mathbf{u}$ and results in compact storage compared to many other lattice-based signature paradigms. One way to understand this compactness benefit is to roughly think of GPV signatures as the lattice analogue of BLS signatures. This is not entirely true, but the motivation here is just to grasp why the GPV signature scheme is an attractive candidate to be used in blockchain consensus and cryptocurrency payments. Moreover, given the looming threat of quantum computers, GPV signatures seem to fit the bill in more than one way.

## GPV and Adaptor

It seems it is only a matter of time for cryptocurrencies to start using GPV signatures for transaction authentication. So a natural question that pops up is whether we can equip GPV signatures with adaptor capability. This would mean we can have scriptless protocols for atomic swaps, payment channel networks, etc., on these cryptocurrencies as well.

Indeed, we can build adaptor signatures for GPV signatures as shown in our recent paper. Now, consider $\mathbf{A}$ to be part of the public parameters and individual public keys are set as

$$
\mathbf{Y} := \mathbf{A} \cdot \mathbf{X}
$$

where $\mathbf{X}$ is the secret key. Here entries of $\mathbf{X}$ are short.

The signature now consists of vectors $\sigma := (\mathbf{z}, \mathbf{c})$ such that the following equality holds during verification:

$$
\left[\mathbf{A} \mid (\mathbf{G} + \mathbf{Y})\right]
\cdot
\begin{bmatrix}
\mathbf{z} \\
-\mathbf{c}
\end{bmatrix}
=
H(m) \bmod q.
$$

We require the entries of $(\mathbf{z}, \mathbf{c})$ to be small similar to the GPV signatures. Notice that the verification is the same as we saw for the GPV signatures previously, except there is the additional $\mathbf{G} + \mathbf{Y}$. Here $\mathbf{G}$ is called the gadget matrix, which is a public fixed value

$$
\mathbf{G}
=
\begin{bmatrix}
g & 0 & \cdots & 0 \\
0 & g & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & g
\end{bmatrix}
$$

where

$$
g = [1 \quad 2 \quad 4 \quad \cdots \quad 2^{\lceil \log q \rceil - 1}].
$$

The inverse of the gadget matrix $\mathbf{G}^{-1}$ is easily computable and is defined as a function such that

$$
\mathbf{G} \cdot \mathbf{G}^{-1}(\mathbf{v}) = \mathbf{v}.
$$

This is essentially instantiating the GPV signatures with the trapdoor function from Micciancio and Peikert in 2012.

Specifically, the signing algorithm first samples a vector $\mathbf{u}$ whose entries are small, and computes the signature as $\sigma = (\mathbf{z}, \mathbf{c})$ as follows:

$$
\mathbf{v} := \mathbf{A} \cdot \mathbf{u} \bmod q
$$

$$
\mathbf{c} := \mathbf{G}^{-1}(\mathbf{v} - H(m))
$$

$$
\mathbf{z} := \mathbf{u} + \mathbf{X} \cdot \mathbf{c}
$$

Ok, so with this in mind, for adaptor capability, we consider the hard language

$$
\mathcal{L}
:=
\left\{
(\mathbf{A}, \mathbf{v}')
\mid
\exists \mathbf{u}' \ \text{s.t.} \ 
\mathbf{A} \cdot \mathbf{u}' = \mathbf{v}'
\land
\lVert \mathbf{u}' \rVert \leq \beta^*
\right\}
$$

where $\beta^*$ is some small bound.

A pre-signature is set as $\hat{\sigma} = (\hat{\mathbf{z}}, \mathbf{c})$, where the entries of $\hat{\mathbf{z}}$ and $\mathbf{c}$ are small such that during pre-verification it holds that

$$
\left[\mathbf{A} \mid (\mathbf{G} + \mathbf{Y})\right]
\cdot
\begin{bmatrix}
\hat{\mathbf{z}} \\
-\mathbf{c}
\end{bmatrix}
=
H(m) - \mathbf{v}' \bmod q.
$$

If we are able to do this, then the pre-signature $(\hat{\mathbf{z}}, \mathbf{c})$ can be adapted to a valid signature $(\mathbf{z}, \mathbf{c})$, by simply doing the following:

$$
\mathbf{z} = \hat{\mathbf{z}} + \mathbf{u}'.
$$

If we are given both the signature and the pre-signature, we can easily extract the witness $\mathbf{u}'$, simple subtraction:

$$
\mathbf{u}' = \mathbf{z} - \hat{\mathbf{z}}.
$$

The only two things to see is how such a pre-signature is generated and why is it correct with respect to the pre-verification. To see this, the pre-signature generation proceeds by first sampling a vector $\mathbf{u}$ with small entries and doing the following:

$$
\mathbf{v} := \mathbf{A} \cdot \mathbf{u} \bmod q
$$

$$
\mathbf{c} := \mathbf{G}^{-1}(\mathbf{v} + \mathbf{v}' - H(m))
$$

$$
\hat{\mathbf{z}} := \mathbf{u} + \mathbf{X} \cdot \mathbf{c}
$$

To see why this is correct, when verifying the adapted signature, we have

$$
\begin{aligned}
\mathbf{A} \cdot \mathbf{z} - (\mathbf{G} + \mathbf{Y}) \cdot \mathbf{c}
&=
\mathbf{A} \cdot (\hat{\mathbf{z}} + \mathbf{u}')
-
(\mathbf{G} + \mathbf{Y}) \cdot \mathbf{c} \\
&=
(\mathbf{A} \cdot \hat{\mathbf{z}} - (\mathbf{G} + \mathbf{Y}) \cdot \mathbf{c})
+
\mathbf{A} \cdot \mathbf{u}' \\
&=
(H(m) - \mathbf{v}') + \mathbf{v}' \\
&=
H(m) \bmod q.
\end{aligned}
$$

If the entries of $\hat{\mathbf{z}}$ and $\mathbf{u}'$ are small enough, we also have that the entries of $\mathbf{z}$ are also small.

## GPV Signatures and Aggregation

We also show how one can aggregate GPV signatures where:

1. we can aggregate signatures of many signers who have signed the same message, and
2. we can aggregate signatures of many signers who have signed different messages.

The former has found applications in proof-of-stake based consensus protocols and the latter allows one to compress the size of blockchains.

The SNARK from our paper natively supports the ring relations required for verifying GPV signatures, without having to encode any random oracles in the prover circuit. Therefore, to aggregate GPV signatures, the idea is simple: generate a SNARK proof for the knowledge of the aggregated signatures. The concrete benefit of our SNARK-based aggregation kicks in quite significantly for large statements, i.e., for example when aggregating a large number of signatures.

## So What is this all about?

Our new lattice assumption known as kRISIS of knowledge seems to activate new and powerful primitives in the lattice realm. Post-quantum signature schemes like GPV signatures can now be aggregated and are adaptor capable. Our work leaves open a whole line of research problems: more theoretical insight into the new assumption, other primitives where this assumption can be used, and building efficient post-quantum primitives for practical use, especially in blockchains and cryptocurrencies.