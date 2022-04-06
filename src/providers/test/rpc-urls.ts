export const fakeUrls = {
  notRPCButRealHttp: 'https://httpstat.us/200',
} as const;

export const rpcUrls = {
  mainnet: `${process.env.RPC_ORIGIN}/api/eth`,
  gno: `${process.env.RPC_ORIGIN}/api/gno`,
  bnb: `${process.env.RPC_ORIGIN}/api/bnb`,
};