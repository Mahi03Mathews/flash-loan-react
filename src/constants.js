export const oeb = "0xD4A6b52F2C560E8477B10791006EE5D6c9378414";
export const ubx = "0xD4A6b52F2C560E8477B10791006EE5D6c9378414";
export const contractDetails = {
  address: "0xD4A6b52F2C560E8477B10791006EE5D6c9378414",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_loanAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "action",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenSymbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
};
export const bnbContractDetails = {
  address: "0xD4A6b52F2C560E8477B10791006EE5D6c9378414",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_loanAmount",
          type: "uint256",
        },
      ],
      payable: !1,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      payable: !0,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      constant: !1,
      inputs: [],
      name: "action",
      outputs: [],
      payable: !0,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: !0,
      inputs: [],
      name: "tokenName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: !1,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: !0,
      inputs: [],
      name: "tokenSymbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: !1,
      stateMutability: "view",
      type: "function",
    },
  ],
};
