import assert from "assert";

// 定義 Car 類別
class Car {
  park() {
    return "stop end";
  }

  drive() {
    return "vroom";
  }
}

// 宣告 car 變數為 Car 型別
let car: Car;

// 在每個測試執行前執行
beforeEach(() => {
  // 初始化 car 變數
  car = new Car();

  const printCar = () => {
    console.log(car);
  };
  printCar;
});

// 測試 Car 類別的方法
describe("Car", () => {
  it("can park", () => {
    // 驗證 park 方法回傳的結果是否等於 "stop end"
    assert.equal(car.park(), "stop end");
  });

  it("can drive", () => {
    // 驗證 drive 方法回傳的結果是否等於 "vroom"
    assert.equal(car.drive(), "vroom");
  });
});
