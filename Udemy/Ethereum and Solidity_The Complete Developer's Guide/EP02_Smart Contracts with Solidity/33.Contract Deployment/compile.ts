// 匯入 path 和 fs 模組
import path from "path";
import fs from "fs";

// 匯入 solc 套件
const solc = require("solc");

// 建立常數 inboxPath，用來儲存 Inbox.sol 的路徑
// __dirname 是 Node.js 中的全域變數，代表當前執行檔案所在的目錄路徑
const inboxPath = path.resolve(__dirname, "Contracts", "Inbox.sol"); // 使用此套件確保各種環境都可執行，例如 Windows 或 Linux

// 讀取 Inbox.sol 檔案
const source = fs.readFileSync(inboxPath, "utf8");

// 設定 solc 編譯的輸入
const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// console.log(
//   JSON.parse(solc.compile(JSON.stringify(input))).contracts["Inbox.sol"].Inbox
// );

// 編譯並將 Inbox.sol 的 ABI 輸出
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
].Inbox;
