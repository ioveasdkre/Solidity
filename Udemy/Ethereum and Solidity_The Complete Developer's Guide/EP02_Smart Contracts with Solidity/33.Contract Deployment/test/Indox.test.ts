// import assert from "assert";
const ganache = require("ganache");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts
  const fetchedAccounts = await web3.eth.getAccounts();
  console.log(fetchedAccounts);

  // Use one of those accounts to deploy the contract
});

describe("Index", () => {
  it("deploys a contract", () => {});
});
