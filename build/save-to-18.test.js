// 規格例 1–3。倒推月繳四捨五入後回帶，到期估值是公式結果，不是把目標再印一次。
const assert = require('assert');
const calc = require('../assets/save-to-18.js');

function fv(rate, value, gap) {
  const r = calc.solve({ mode: 'fv', monthly: 3000, age: 0, annualRate: rate });
  assert.strictEqual(r.months, 216);
  assert.strictEqual(r.contributed, 648000);
  assert.strictEqual(r.value, value);
  assert.strictEqual(r.gap, gap);
  assert.strictEqual(r.rows.length, 18);
  assert.strictEqual(r.rows[17].age, 18);
  assert.strictEqual(r.rows[17].value, value);
}

fv(0, 648000, 0);
fv(0.03, 857821, 209821);
fv(0.05, 1047606, 399606);
fv(0.07, 1292163, 644163);

const mid = calc.solve({ mode: 'fv', monthly: 3000, age: 6, annualRate: 0.05 });
assert.strictEqual(mid.months, 144);
assert.strictEqual(mid.contributed, 432000);
assert.strictEqual(mid.value, 590291);
assert.strictEqual(mid.gap, 158291);
assert.strictEqual(mid.rows[0].age, 7);
assert.strictEqual(mid.rows[mid.rows.length - 1].age, 18);

const goal = calc.solve({ mode: 'goal', target: 1000000, age: 0, annualRate: 0.05 });
assert.strictEqual(goal.monthly, 2864);
assert.ok(Math.abs(goal.monthlyExact - 2863.67185331037) < 1e-6);
assert.strictEqual(goal.contributed, 2864 * 216);
assert.strictEqual(goal.value, 1000115);
assert.strictEqual(goal.targetGap, 115);
assert.strictEqual(goal.paymentRounded, true);

const goal0 = calc.solve({ mode: 'goal', target: 1000000, age: 0, annualRate: 0 });
assert.strictEqual(goal0.monthly, 4630);
assert.strictEqual(goal0.value, 4630 * 216);

const late = calc.solve({ mode: 'fv', monthly: 3000, age: 17, annualRate: 0.05 });
assert.strictEqual(calc.monthsLeft(17), 12);
assert.strictEqual(late.months, 12);
assert.strictEqual(late.rows.length, 1);
assert.strictEqual(late.rows[0].age, 18);
assert.strictEqual(late.contributed, 36000);
assert.strictEqual(late.value, 36837);

assert.strictEqual(calc.clampAge(18), 17);
assert.strictEqual(calc.clampAge(17), 17);
assert.strictEqual(calc.clampAge(0), 0);
assert.strictEqual(calc.clampAge(-1), 0);
assert.strictEqual(calc.monthsLeft(calc.clampAge(18)), 12);

const neg = calc.solve({ mode: 'fv', monthly: 3000, age: 0, annualRate: -0.05 });
assert.strictEqual(neg.value, 427820);
assert.ok(neg.value < neg.contributed);
assert.strictEqual(neg.gap, neg.value - neg.contributed);

const y1 = calc.solve({ mode: 'fv', monthly: 3000, age: 0, annualRate: 0.05 }).rows[0];
assert.strictEqual(y1.age, 1);
assert.strictEqual(y1.contributed, 36000);
assert.strictEqual(y1.value, 36837);

console.log('save-to-18 self-test', JSON.stringify({
  fv0: 648000,
  fv3: 857821,
  fv5: 1047606,
  fv7: 1292163,
  age6fv5: 590291,
  pmt5: goal.monthly,
  pmt5exact: goal.monthlyExact,
  back5: goal.value,
  contribRounded: goal.contributed,
  targetGap: goal.targetGap,
  pmt0: goal0.monthly,
  neg5: neg.value
}));
