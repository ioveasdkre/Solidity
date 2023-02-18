import assert from "assert";
import { contractABI, contractBytecode } from "../compile";
const ganache = require("ganache");
const Web3 = require("web3");

let from: string;
let inbox: any;
const INITIAL_STRING: string = "Hi there!";

// 在每個測試前初始化
beforeEach(async () => {
  // 使用 Ganache provider 建立 web3
  const web3 = new Web3(ganache.provider());

  // 取得所有帳戶
  const fetchedAccounts = (await web3.eth.getAccounts()) as string[];

  // 從帳戶列表中選擇第一個帳戶作為合約 deploy 的帳戶
  [from] = fetchedAccounts;

  // 部署合約並將其存儲在變量中
  inbox = await new web3.eth.Contract(contractABI)
    .deploy({
      data: contractBytecode, // 合約代碼
      arguments: [INITIAL_STRING], // 參數對應 合約的建構子
    })
    .send({ from, gas: "1000000" }); // 人員帳號, 氣體限制
});

// 測試合約部署
describe("Index", () => {
  it("deploys a contract", () => {
    // console.log(fetchedAccounts);
    // console.warn(inbox);
    assert.ok(inbox.options.address); // 確認地址是否存在
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call(); // 使用合約的 message() 方法取得目前訊息
    assert.equal(message, INITIAL_STRING); // 驗證目前訊息是否等於預期的 INITIAL_STRING 值 "Hi there!"
  });

  it("can change the message", async () => {
    await inbox.methods.setMessage("goodbye").send({ from });

    const message = await inbox.methods.message().call();
    assert.equal(message, "goodbye");
  });
});
