// 首頁 100 萬目標。與存到 18 歲共用 futureValue／paymentForTarget，不另寫一套複利。
const assert = require('assert');
const calc = require('../assets/save-to-18.js');

function accumulate(monthly, months, annual) {
  const r = annual / 12;
  let value = 0;
  for (let i = 0; i < months; i++) value = r === 0 ? value + monthly : value * (1 + r) + monthly;
  return value;
}

// 0%：目標 ÷ 每月金額。100 萬 / 10,000 = 100 個月。
assert.strictEqual(1000000 / 10000, 100);
const zero = calc.monthsToReach(10000, 1000000, 0);
assert.strictEqual(zero.ok, true);
assert.strictEqual(zero.months, 100);
assert.strictEqual(calc.formatDuration(100), '8 年 4 個月');
const zeroReach = calc.reachTarget({ monthly: 10000, target: 1000000, annualRate: 0 });
assert.strictEqual(zeroReach.months, 100);
assert.strictEqual(zeroReach.contributed, 1000000);
assert.strictEqual(zeroReach.value, 1000000);
assert.strictEqual(zeroReach.gap, 0);

// 除不盡就進到下一個月：333 個月是 999,000，還沒到 100 萬。
assert.strictEqual(333 * 3000, 999000);
assert.strictEqual(334 * 3000, 1002000);
assert.strictEqual(calc.monthsToReach(3000, 1000000, 0).months, 334);

// 0 或非正數不計算，也不會是無限大。
for (const monthly of [0, -1, NaN, Infinity]) {
  const bad = calc.monthsToReach(monthly, 1000000, 0);
  assert.strictEqual(bad.ok, false);
  assert.ok(bad.months == null);
}
assert.strictEqual(calc.parseGoalMoney('').blank, true);
assert.strictEqual(calc.parseGoalMoney('0').blank, true);
assert.strictEqual(calc.parseGoalMoney(' 0 ').blank, true);
assert.strictEqual(calc.parseGoalMoney('10,000').value, 10000);
assert.strictEqual(calc.monthsToReach(10000, 0, 0.05).ok, false);

// 手算 1：每月 10,000、年報酬 5%、目標 100 萬。
// 月底投入：餘額 = 上月餘額 × (1 + 0.05/12) + 10,000。
// 第 83 個月仍低於 100 萬，第 84 個月超過。84 個月 = 7 年。
const hand5 = accumulate(10000, 84, 0.05);
const before5 = accumulate(10000, 83, 0.05);
assert.ok(before5 < 1000000);
assert.ok(hand5 >= 1000000);
assert.strictEqual(Math.round(hand5), 1003287);
assert.strictEqual(Math.round(before5), 989165);
const at5 = calc.reachTarget({ monthly: 10000, target: 1000000, annualRate: 0.05 });
assert.strictEqual(at5.months, 84);
assert.strictEqual(at5.value, 1003287);
assert.strictEqual(at5.contributed, 840000);
assert.strictEqual(at5.gap, 163287);
assert.strictEqual(calc.formatDuration(84), '7 年');
assert.ok(Math.abs(calc.futureValue(10000, 0.05, 84) - hand5) < 0.01);

// 手算 2：目標 100 萬、10 年、年報酬 5%。月數 120。
// 係數 = ((1 + 0.05/12)^120 − 1) / (0.05/12)
// 每月 = round(1,000,000 / 係數) = 6,440
// 再用同一條月底遞迴滾 120 期，四捨五入 1,000,018。
const r = 0.05 / 12;
const factor = (Math.pow(1 + r, 120) - 1) / r;
assert.strictEqual(Math.round(1000000 / factor), 6440);
assert.strictEqual(Math.round(accumulate(6440, 120, 0.05)), 1000018);
const pay = calc.monthlyForYears({ target: 1000000, years: 10, annualRate: 0.05 });
assert.strictEqual(pay.monthly, 6440);
assert.strictEqual(pay.monthly, calc.roundYuan(calc.paymentForTarget(1000000, 0.05, 120)));
assert.strictEqual(pay.contributed, 772800);
assert.strictEqual(pay.value, 1000018);
assert.strictEqual(pay.gap, 227218);
assert.strictEqual(pay.targetGap, 18);

// 對照表跟著目標重算，格子用同一個 monthsToReach，不寫死年數。
const rows = calc.compareRows(1000000);
assert.deepStrictEqual(rows.map(row => row.amount), [3000, 5000, 10000, 20000]);
assert.deepStrictEqual(rows[0].cells.map(cell => cell.rate), [0.03, 0.05, 0.07]);
for (const row of rows) {
  for (const cell of row.cells) {
    const byHand = (() => {
      let value = 0;
      let months = 0;
      const step = cell.rate / 12;
      while (value < 1000000) {
        months += 1;
        value = value * (1 + step) + row.amount;
        if (months > 100000) throw new Error('對照表手算過長');
      }
      return months;
    })();
    assert.strictEqual(cell.months, byHand);
    assert.strictEqual(cell.months, calc.monthsToReach(row.amount, 1000000, cell.rate).months);
  }
}
assert.strictEqual(rows[2].cells[1].months, 84);
const bigger = calc.compareRows(2000000);
assert.ok(bigger[2].cells[1].months > 84);

// 負報酬若數學上到不了目標，不要算出無限大。
const unreachable = calc.monthsToReach(100, 1000000, -0.1);
assert.strictEqual(unreachable.ok, false);
assert.ok(unreachable.months == null);

console.log('goal-1m self-test', JSON.stringify({
  zeroMonths: zero.months,
  months5: at5.months,
  value5: at5.value,
  gap5: at5.gap,
  monthly10y: pay.monthly,
  value10y: pay.value,
  grid10k5: rows[2].cells[1].months
}));
