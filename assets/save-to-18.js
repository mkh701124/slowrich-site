/* 月底投入、按月複利，兩頁共用同一套公式。
   r = 年報酬 / 12
   r = 0：FV = P × n
   r ≠ 0：FV = P × [(1 + r)^n − 1] / r
   存到 18 歲：n = (18 − 年齡) × 12。倒推 P = 目標 / 同一個係數，顯示金額四捨五入到元。
   首頁 100 萬：「算要多久」用同一個 FV，找第一個餘額 >= 目標的整數月。
   0% 且除得盡時就是目標 ÷ 每月金額。每月金額 <= 0 不計算。 */
(function (factory) {
  var api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  if (typeof document !== 'undefined') {
    var go = function () {
      if (document.getElementById('calc-out')) mount(api);
      if (document.getElementById('goal-out')) mountGoal(api);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
    else go();
  }

  function mount(api) {
    if (mount.done) return;
    mount.done = true;
    var modeFv = document.getElementById('mode-fv');
    var modeGoal = document.getElementById('mode-goal');
    var fieldAmount = document.getElementById('field-amount');
    var fieldTarget = document.getElementById('field-target');
    var amountInput = document.getElementById('amount');
    var targetInput = document.getElementById('target');
    var ageInput = document.getElementById('age');
    var ageDec = document.getElementById('age-dec');
    var ageInc = document.getElementById('age-inc');
    var rateInput = document.getElementById('rate-custom');
      var hintAmount = document.getElementById('hint-amount');
      var hintTarget = document.getElementById('hint-target');
      var hintAge = document.getElementById('hint-age');
      var hintRate = document.getElementById('hint-rate');
    var out = document.getElementById('calc-out');
    var monthlyBlock = document.getElementById('calc-monthly-block');
    var monthlyEl = document.getElementById('calc-monthly');
    var fvEl = document.getElementById('calc-fv');
    var contribEl = document.getElementById('calc-contrib');
    var gapEl = document.getElementById('calc-gap');
    var condEl = document.getElementById('calc-cond');
    var roundEl = document.getElementById('calc-round');
    var legendEl = document.getElementById('calc-legend');
    var svg = document.getElementById('calc-chart');
    var descEl = document.getElementById('calc-chart-desc');
    var rowsEl = document.getElementById('calc-rows');
    var last = { mode: 'fv', amount: 3000, target: 1000000, age: 0, ratePct: 5 };
    var HARD_MAX = 100000000;

    function money(n) {
      var v = Math.round(n);
      var sign = v < 0 ? '−' : '';
      return sign + Math.abs(v).toLocaleString('en-US') + ' 元';
    }
    function pctText(pct) {
      var n = Math.round(pct * 10) / 10;
      var body = Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.abs(Math.round(n))) : Math.abs(n).toFixed(1);
      return (n < 0 ? '−' : '') + body + '%';
    }
    function parseMoney(raw) {
      var s = String(raw == null ? '' : raw).replace(/[,\s]/g, '');
      if (!/^\d+$/.test(s)) return null;
      var n = Number(s);
      if (!Number.isInteger(n) || n < 1 || n > HARD_MAX) return null;
      return n;
    }
    function parseRate(raw) {
      var s = String(raw == null ? '' : raw).trim().replace(/%/g, '').replace(/％/g, '').replace(/−/g, '-');
      if (s === '' || s === '-' || s === '.' || s === '-.' || /^-?\d+\.$/.test(s)) return { pending: true };
      if (!/^-?\d+(\.\d)?$/.test(s)) return { error: true };
      var n = Number(s);
      if (n < -10 || n > 15) return { error: true };
      return { value: n };
    }
    function gapClass(gap) {
      if (gap > 0) return 'fv-up';
      if (gap < 0) return 'fv-down';
      return 'fv-flat';
    }
    function gapLabel(gap) {
      if (gap > 0) return '高出投入 ' + money(gap);
      if (gap < 0) return '低於投入 ' + money(-gap);
      return '與投入相同';
    }
    function setMode(mode) {
      var goal = mode === 'goal';
      modeFv.setAttribute('aria-pressed', goal ? 'false' : 'true');
      modeGoal.setAttribute('aria-pressed', goal ? 'true' : 'false');
      modeFv.classList.toggle('on', !goal);
      modeGoal.classList.toggle('on', goal);
      fieldAmount.hidden = goal;
      fieldTarget.hidden = !goal;
    }
    function setPreset(pct) {
      document.querySelectorAll('#calc-panel .rates button').forEach(function (b) {
        var on = Number(b.getAttribute('data-rate')) === pct;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    function applyUrl() {
      var q;
      try { q = new URLSearchParams(location.search); } catch (e) { return; }
      if (!q.toString()) return;
      var mode = q.get('mode');
      if (mode === 'goal' || mode === 'fv') setMode(mode);
      if (q.has('age') && /^\d+$/.test(String(q.get('age')).trim())) ageInput.value = String(api.clampAge(q.get('age')));
      if (q.has('amount')) {
        var amount = parseMoney(q.get('amount'));
        if (amount) amountInput.value = String(amount);
      }
      if (q.has('target')) {
        var target = parseMoney(q.get('target'));
        if (target) targetInput.value = String(target);
      }
      if (q.has('rate')) {
        var rate = parseRate(q.get('rate'));
        if (rate.value != null) {
          if (rate.value === 0 || rate.value === 3 || rate.value === 5 || rate.value === 7) {
            rateInput.value = '';
            rateInput.classList.remove('on');
            setPreset(rate.value);
          } else {
            rateInput.value = String(rate.value);
            rateInput.classList.add('on');
            setPreset(NaN);
          }
        }
      }
    }
    function writeUrl(state) {
      try {
        var q = new URLSearchParams();
        q.set('mode', state.mode);
        q.set('age', String(state.age));
        q.set('rate', String(state.ratePct));
        if (state.mode === 'goal') q.set('target', String(state.target));
        else q.set('amount', String(state.amount));
        var next = '?' + q.toString();
        if (location.search !== next) history.replaceState(null, '', next);
      } catch (e) {}
    }
    function hint(el, text) {
      el.hidden = !text;
      el.textContent = text || '';
    }
    function axisMoney(n) {
      if (n >= 10000) {
        var wan = Math.round((n / 10000) * 10) / 10;
        var text = Math.abs(wan - Math.round(wan)) < 0.05 ? String(Math.round(wan)) : wan.toFixed(1);
        return text + '萬';
      }
      return Math.round(n).toLocaleString('en-US');
    }
    function svgEl(name, attrs) {
      var node = document.createElementNS('http://www.w3.org/2000/svg', name);
      Object.keys(attrs).forEach(function (key) {
        if (key === 'text') node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
      return node;
    }
    function draw(rows, gap) {
      Array.from(svg.children).forEach(function (child) {
        var tag = child.tagName.toLowerCase();
        if (tag !== 'title' && tag !== 'desc') svg.removeChild(child);
      });
      if (!rows.length) return;
      var W = 640, H = 260, padL = 64, padR = 12, padT = 22, padB = 32;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var maxV = 1;
      rows.forEach(function (row) {
        if (row.value > maxV) maxV = row.value;
        if (row.contributed > maxV) maxV = row.contributed;
      });
      var valueColor = gap > 0 ? '#DC2626' : gap < 0 ? '#16A34A' : '#1E3A8A';
      var contribColor = '#1E3A8A';
      [0, 0.5, 1].forEach(function (t) {
        var y = padT + plotH * (1 - t);
        svg.appendChild(svgEl('line', { x1: padL, x2: W - padR, y1: y, y2: y, stroke: '#dbe4f3', 'stroke-width': '1' }));
        svg.appendChild(svgEl('text', { x: padL - 6, y: y + 4, 'text-anchor': 'end', fill: '#64748b', 'font-size': '12', 'font-family': 'Noto Sans TC, sans-serif', text: axisMoney(maxV * t) }));
      });
      var groupW = plotW / rows.length;
      var barW = Math.max(4, Math.min(16, groupW * 0.3));
      rows.forEach(function (row, i) {
        var cx = padL + groupW * i + groupW / 2;
        var hC = plotH * (row.contributed / maxV);
        var hV = plotH * (row.value / maxV);
        svg.appendChild(svgEl('rect', { x: cx - barW - 1, y: padT + plotH - hC, width: barW, height: Math.max(hC, row.contributed ? 1 : 0), fill: contribColor }));
        svg.appendChild(svgEl('rect', { x: cx + 1, y: padT + plotH - hV, width: barW, height: Math.max(hV, row.value ? 1 : 0), fill: valueColor }));
        var showLabel = rows.length <= 12 || row.age % 2 === 0 || i === 0 || i === rows.length - 1;
        if (showLabel) svg.appendChild(svgEl('text', { x: cx, y: H - 10, 'text-anchor': 'middle', fill: '#64748b', 'font-size': '12', 'font-family': 'Noto Sans TC, sans-serif', text: String(row.age) }));
      });
    }
    function drawLegend(gap) {
      legendEl.textContent = '';
      function item(cls, text) {
        var s = document.createElement('span');
        s.className = 'swatch ' + cls;
        s.textContent = text;
        legendEl.appendChild(s);
      }
      if (gap === 0) item('fv-flat', '累計投入與年底估值相同');
      else {
        item('fv-flat', '累計投入');
        item(gap > 0 ? 'fv-up' : 'fv-down', gap > 0 ? '年底估值（高出投入）' : '年底估值（低於投入）');
      }
    }
    function renderTable(rows) {
      rowsEl.textContent = '';
      rows.forEach(function (row) {
        var tr = document.createElement('tr');
        function cell(text, cls) {
          var td = document.createElement('td');
          if (cls) td.className = cls;
          td.textContent = text;
          return td;
        }
        tr.appendChild(cell(row.age + ' 歲'));
        tr.appendChild(cell(money(row.contributed)));
        var valueCell = cell(money(row.value), gapClass(row.gap));
        var note = document.createElement('div');
        note.className = 'calc-gaplab ' + gapClass(row.gap);
        note.textContent = row.gap > 0 ? '高出投入' : row.gap < 0 ? '低於投入' : '與投入相同';
        valueCell.appendChild(note);
        tr.appendChild(valueCell);
        rowsEl.appendChild(tr);
      });
    }
    function render() {
      var mode = modeGoal.getAttribute('aria-pressed') === 'true' ? 'goal' : 'fv';
      var amount = parseMoney(amountInput.value);
      var target = parseMoney(targetInput.value);
      var ageRaw = ageInput.value.trim();
      var ageOk = /^\d+$/.test(ageRaw);
      var age = ageOk ? api.clampAge(ageRaw) : null;
      if (ageOk && String(age) !== String(Number(ageRaw))) ageInput.value = String(age);
      ageDec.disabled = age === 0;
      ageInc.disabled = age === 17;
      var customRaw = rateInput.value.trim();
      var rateParsed = customRaw ? parseRate(customRaw) : null;
      var ratePct = null;
      var rateMsg = '';
      if (rateParsed && rateParsed.value != null) ratePct = rateParsed.value;
      else if (rateParsed && rateParsed.error) rateMsg = '自訂報酬請輸入 −10 到 15、最多一位小數。這次仍用上一個有效數字。';
      if (ratePct == null) {
        var pressed = document.querySelector('#calc-panel .rates button[aria-pressed="true"]');
        if (pressed) ratePct = Number(pressed.getAttribute('data-rate'));
      }
      if (ratePct == null || !Number.isFinite(ratePct)) ratePct = last.ratePct;
      var customActive = !!(rateParsed && rateParsed.value != null);
      rateInput.classList.toggle('on', customActive);
      if (!customActive) {
        setPreset(ratePct);
      } else {
        document.querySelectorAll('#calc-panel .rates button').forEach(function (b) {
          var on = Number(b.getAttribute('data-rate')) === ratePct;
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      }
      hint(hintRate, rateMsg || '建議範圍 −10%～15%。0% 表示只累積本金、沒有報酬。');
      if (mode === 'fv' && amount == null) {
        hint(hintAmount, '請輸入正整數。先保留上一次的試算。');
        return;
      }
      if (mode === 'goal' && target == null) {
        hint(hintTarget, '請輸入正整數。先保留上一次的試算。');
        return;
      }
      if (amount != null) hint(hintAmount, amount < 100 || amount > 100000 ? '建議範圍 100–100,000 元，仍會照這個數字試算。' : '');
      if (target != null) hint(hintTarget, target < 10000 || target > 10000000 ? '建議範圍 10,000–10,000,000 元，仍會照這個數字試算。' : '');
      if (!ageOk) {
        hint(hintAge, '請輸入 0 到 17 的整數。先保留上一次的試算。');
        return;
      }
      hint(hintAge, '0–17 歲。存到 18 歲，不能選 18。');
      var solved = api.solve({
        mode: mode,
        monthly: amount == null ? last.amount : amount,
        target: target == null ? last.target : target,
        age: age,
        annualRate: ratePct / 100
      });
      last = { mode: mode, amount: solved.mode === 'fv' ? solved.monthly : (amount || last.amount), target: solved.mode === 'goal' ? solved.target : (target || last.target), age: age, ratePct: ratePct };
      monthlyBlock.hidden = mode !== 'goal';
      monthlyEl.textContent = money(solved.monthly);
      fvEl.textContent = money(solved.value);
      contribEl.textContent = money(solved.contributed);
      gapEl.className = 'calc-gap ' + gapClass(solved.gap);
      gapEl.textContent = gapLabel(solved.gap);
      condEl.textContent = '假設從 ' + age + ' 歲存到 18 歲，共 ' + solved.months + ' 個月，年報酬 ' + pctText(ratePct) + '、按月複利、每月月底投入。';
      if (mode === 'goal' && solved.paymentRounded) {
        var d = solved.targetGap;
        roundEl.hidden = false;
        roundEl.textContent = '月繳已四捨五入到元。' + (d === 0 ? '回帶後與目標相同。' : d > 0 ? '回帶後高出目標 ' + money(d) + '。' : '回帶後低於目標 ' + money(-d) + '。');
      } else {
        roundEl.hidden = true;
        roundEl.textContent = '';
      }
      out.dataset.mode = mode;
      out.dataset.monthly = String(solved.monthly);
      out.dataset.value = String(solved.value);
      out.dataset.contributed = String(solved.contributed);
      out.dataset.gap = String(solved.gap);
      out.dataset.months = String(solved.months);
      out.dataset.rate = String(ratePct);
      descEl.textContent = condEl.textContent + '累計投入 ' + money(solved.contributed) + '，年底估值 ' + money(solved.value) + '，' + gapLabel(solved.gap) + '。';
      drawLegend(solved.gap);
      draw(solved.rows, solved.gap);
      renderTable(solved.rows);
      writeUrl(last);
    }
    function bump(input, delta, fallback) {
      var n = parseMoney(input.value);
      if (n == null) n = fallback;
      n = Math.min(HARD_MAX, Math.max(1, n + delta));
      input.value = String(n);
      render();
    }
    modeFv.addEventListener('click', function () { setMode('fv'); render(); });
    modeGoal.addEventListener('click', function () { setMode('goal'); render(); });
    document.querySelectorAll('#calc-panel [data-step]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-step');
        var input = document.getElementById(id);
        bump(input, Number(btn.getAttribute('data-d')), id === 'target' ? 1000000 : 3000);
      });
    });
    ageDec.addEventListener('click', function () {
      var n = /^\d+$/.test(ageInput.value.trim()) ? api.clampAge(ageInput.value) : 0;
      ageInput.value = String(api.clampAge(n - 1));
      render();
    });
    ageInc.addEventListener('click', function () {
      var n = /^\d+$/.test(ageInput.value.trim()) ? api.clampAge(ageInput.value) : 0;
      ageInput.value = String(api.clampAge(n + 1));
      render();
    });
    [amountInput, targetInput, ageInput, rateInput].forEach(function (input) {
      input.addEventListener('input', render);
    });
    document.querySelectorAll('#calc-panel .rates button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        rateInput.value = '';
        rateInput.classList.remove('on');
        setPreset(Number(btn.getAttribute('data-rate')));
        render();
      });
    });
    applyUrl();
    render();
  }

  function mountGoal(api) {
    if (mountGoal.done) return;
    mountGoal.done = true;
    var modeTime = document.getElementById('goal-mode-time');
    var modePay = document.getElementById('goal-mode-pay');
    var fieldAmount = document.getElementById('goal-field-amount');
    var fieldYears = document.getElementById('goal-field-years');
    var amountInput = document.getElementById('goal-amount');
    var targetInput = document.getElementById('goal-target');
    var yearsInput = document.getElementById('goal-years');
    var yearDec = document.getElementById('goal-year-dec');
    var yearInc = document.getElementById('goal-year-inc');
    var rateInput = document.getElementById('goal-rate');
    var hintAmount = document.getElementById('goal-hint-amount');
    var hintTarget = document.getElementById('goal-hint-target');
    var hintYears = document.getElementById('goal-hint-years');
    var hintRate = document.getElementById('goal-hint-rate');
    var out = document.getElementById('goal-out');
    var timeBlock = document.getElementById('goal-time-block');
    var payBlock = document.getElementById('goal-pay-block');
    var timeEl = document.getElementById('goal-time');
    var monthlyEl = document.getElementById('goal-monthly');
    var valueLabel = document.getElementById('goal-value-label');
    var fvEl = document.getElementById('goal-fv');
    var contribEl = document.getElementById('goal-contrib');
    var gapEl = document.getElementById('goal-gap');
    var condEl = document.getElementById('goal-cond');
    var roundEl = document.getElementById('goal-round');
    var resultHint = document.getElementById('goal-result-hint');
    var compareBody = document.getElementById('goal-compare-body');
    var lastRate = 5;
    var lastTarget = null;
    var MAX_MONEY = 100000000;

    function money(n) {
      var v = Math.round(n);
      var sign = v < 0 ? '−' : '';
      return sign + Math.abs(v).toLocaleString('en-US') + ' 元';
    }
    function pctText(pct) {
      var n = Math.round(pct * 10) / 10;
      var body = Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.abs(Math.round(n))) : Math.abs(n).toFixed(1);
      return (n < 0 ? '−' : '') + body + '%';
    }
    function parseRate(raw) {
      var s = String(raw == null ? '' : raw).trim().replace(/%/g, '').replace(/％/g, '').replace(/−/g, '-');
      if (s === '' || s === '-' || s === '.' || s === '-.' || /^-?\d+\.$/.test(s)) return { pending: true };
      if (!/^-?\d+(\.\d)?$/.test(s)) return { error: true };
      var n = Number(s);
      if (n < -10 || n > 15) return { error: true };
      return { value: n };
    }
    function gapClass(gap) {
      if (gap > 0) return 'fv-up';
      if (gap < 0) return 'fv-down';
      return 'fv-flat';
    }
    function gapLabel(gap) {
      if (gap > 0) return '高出投入 ' + money(gap);
      if (gap < 0) return '低於投入 ' + money(-gap);
      return '與投入相同';
    }
    function hint(el, text) {
      el.hidden = !text;
      el.textContent = text || '';
    }
    function setPressed(btn, on) {
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    function setMode(mode) {
      var pay = mode === 'pay';
      setPressed(modeTime, !pay);
      setPressed(modePay, pay);
      fieldAmount.hidden = pay;
      fieldYears.hidden = !pay;
    }
    function setPreset(pct) {
      document.querySelectorAll('#goal-panel .rates button').forEach(function (b) {
        setPressed(b, Number(b.getAttribute('data-rate')) === pct);
      });
    }
    function clearAnswer(message) {
      timeEl.textContent = '—';
      monthlyEl.textContent = '—';
      fvEl.textContent = '—';
      contribEl.textContent = '—';
      gapEl.className = 'calc-gap';
      gapEl.textContent = '';
      condEl.textContent = '';
      roundEl.hidden = true;
      roundEl.textContent = '';
      hint(resultHint, message);
      delete out.dataset.mode;
      delete out.dataset.months;
      delete out.dataset.monthly;
      delete out.dataset.value;
      delete out.dataset.contributed;
      delete out.dataset.gap;
    }
    function renderCompare(target) {
      if (target === lastTarget) return;
      lastTarget = target;
      compareBody.textContent = '';
      api.compareRows(target).forEach(function (row) {
        var tr = document.createElement('tr');
        var amountCell = document.createElement('td');
        amountCell.textContent = money(row.amount);
        tr.appendChild(amountCell);
        row.cells.forEach(function (cell) {
          var td = document.createElement('td');
          var label = String(Math.round(cell.rate * 100)) + '%';
          td.setAttribute('data-label', label);
          td.textContent = cell.months == null ? '到不了' : '約 ' + api.formatDuration(cell.months);
          tr.appendChild(td);
        });
        compareBody.appendChild(tr);
      });
    }
    function showSolved(mode, solved, ratePct, monthlyInput, target, years) {
      hint(resultHint, '');
      if (mode === 'time') timeEl.textContent = api.formatDuration(solved.months);
      else monthlyEl.textContent = money(solved.monthly);
      fvEl.textContent = money(solved.value);
      contribEl.textContent = money(solved.contributed);
      gapEl.className = 'calc-gap ' + gapClass(solved.gap);
      gapEl.textContent = gapLabel(solved.gap);
      if (mode === 'time') {
        condEl.textContent = '從 0 開始，每月月底投入 ' + money(monthlyInput) + '，年報酬 ' + pctText(ratePct) + '、按月複利。約 ' + api.formatDuration(solved.months) + '（' + solved.months + ' 個月）達標。';
      } else {
        condEl.textContent = '從 0 開始，目標 ' + money(target) + '，投 ' + years + ' 年（' + solved.months + ' 個月），年報酬 ' + pctText(ratePct) + '、按月複利、每月月底投入。';
      }
      if (mode === 'pay' && solved.paymentRounded) {
        var d = solved.targetGap;
        roundEl.hidden = false;
        roundEl.textContent = '月繳已四捨五入到元。用這個整數再算一次，' + (d === 0 ? '與目標相同。' : d > 0 ? '比目標多 ' + money(d) + '。' : '比目標少 ' + money(-d) + '。');
      } else {
        roundEl.hidden = true;
        roundEl.textContent = '';
      }
      out.dataset.mode = mode;
      out.dataset.months = String(solved.months);
      out.dataset.monthly = String(mode === 'pay' ? solved.monthly : monthlyInput);
      out.dataset.value = String(solved.value);
      out.dataset.contributed = String(solved.contributed);
      out.dataset.gap = String(solved.gap);
    }
    function render() {
      var mode = modePay.getAttribute('aria-pressed') === 'true' ? 'pay' : 'time';
      setMode(mode);
      timeBlock.hidden = mode !== 'time';
      payBlock.hidden = mode !== 'pay';
      valueLabel.textContent = mode === 'time' ? '達標時估值' : '到期估值';
      var targetParsed = api.parseGoalMoney(targetInput.value);
      var amountParsed = api.parseGoalMoney(amountInput.value);
      var yearsParsed = api.parseGoalYears(yearsInput.value);
      var customRaw = rateInput.value.trim();
      var rateParsed = customRaw ? parseRate(customRaw) : null;
      var ratePct = null;
      var rateMsg = '';
      if (rateParsed && rateParsed.value != null) ratePct = rateParsed.value;
      else if (rateParsed && rateParsed.error) rateMsg = '自訂報酬請輸入 −10 到 15、最多一位小數。這次仍用上一個有效數字。';
      if (ratePct == null) {
        var pressed = document.querySelector('#goal-panel .rates button[aria-pressed="true"]');
        if (pressed) ratePct = Number(pressed.getAttribute('data-rate'));
      }
      if (ratePct == null || !Number.isFinite(ratePct)) ratePct = lastRate;
      lastRate = ratePct;
      var customActive = !!(rateParsed && rateParsed.value != null);
      rateInput.classList.toggle('on', customActive);
      setPreset(ratePct);
      hint(hintRate, rateMsg || '建議範圍 −10%～15%。0% 表示只累積本金、沒有報酬。');
      if (targetParsed.value != null) {
        hint(hintTarget, targetParsed.value < 10000 || targetParsed.value > 10000000 ? '建議範圍 10,000–10,000,000 元，仍會照這個數字試算。' : '');
        renderCompare(targetParsed.value);
      } else if (targetParsed.blank) {
        hint(hintTarget, '請輸入大於 0 的目標金額。');
      } else {
        hint(hintTarget, '請輸入正整數。先保留上一次的對照表。');
      }
      var yearsValue = yearsParsed.value;
      yearDec.disabled = yearsValue === 1;
      yearInc.disabled = yearsValue === api.GOAL_MAX_YEARS;
      if (yearsParsed.blank) hint(hintYears, '請輸入 1 到 ' + api.GOAL_MAX_YEARS + ' 的整數年。');
      else if (yearsParsed.invalid) hint(hintYears, '請輸入 1 到 ' + api.GOAL_MAX_YEARS + ' 的整數。先不重算每月金額。');
      else hint(hintYears, '1–' + api.GOAL_MAX_YEARS + ' 年。按月複利、每月月底投入。');
      if (amountParsed.blank) hint(hintAmount, '請輸入大於 0 的每月金額。0 或空白算不出要多久。');
      else if (amountParsed.invalid) hint(hintAmount, '請輸入正整數。');
      else hint(hintAmount, amountParsed.value < 100 || amountParsed.value > 100000 ? '建議範圍 100–100,000 元，仍會照這個數字試算。' : '');
      if (targetParsed.value == null) {
        clearAnswer(targetParsed.blank ? '請先輸入大於 0 的目標金額。' : '目標金額要是正整數，這次先不重算。');
        return;
      }
      var target = targetParsed.value;
      if (mode === 'time') {
        if (amountParsed.value == null) {
          clearAnswer(amountParsed.blank ? '每月金額是 0 或空白，算不出要多久。' : '每月金額要是正整數，這次先不重算。');
          return;
        }
        var reached = api.reachTarget({ monthly: amountParsed.value, target: target, annualRate: ratePct / 100 });
        if (!reached.ok) {
          clearAnswer('以這個報酬，每月投入再久也不會到目標。可以把每月金額調高，或把報酬假設調高。');
          return;
        }
        showSolved('time', reached, ratePct, amountParsed.value, target, null);
        return;
      }
      if (yearsParsed.value == null) {
        clearAnswer('請輸入 1 到 ' + api.GOAL_MAX_YEARS + ' 的目標年數。');
        return;
      }
      var paid = api.monthlyForYears({ target: target, years: yearsParsed.value, annualRate: ratePct / 100 });
      if (!paid.ok) {
        clearAnswer('這個年數和報酬組合算不出每月金額。');
        return;
      }
      showSolved('pay', paid, ratePct, null, target, yearsParsed.value);
    }
    function bump(input, delta, fallback) {
      var parsed = api.parseGoalMoney(input.value);
      var n = parsed.value == null ? fallback : parsed.value;
      n = Math.min(MAX_MONEY, Math.max(1, n + delta));
      input.value = String(n);
      render();
    }
    modeTime.addEventListener('click', function () { setMode('time'); render(); });
    modePay.addEventListener('click', function () { setMode('pay'); render(); });
    document.querySelectorAll('#goal-panel [data-step]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.getElementById(btn.getAttribute('data-step'));
        var fallback = input === targetInput ? 1000000 : 10000;
        bump(input, Number(btn.getAttribute('data-d')), fallback);
      });
    });
    yearDec.addEventListener('click', function () {
      var parsed = api.parseGoalYears(yearsInput.value);
      var n = parsed.value == null ? 10 : parsed.value;
      yearsInput.value = String(Math.max(1, n - 1));
      render();
    });
    yearInc.addEventListener('click', function () {
      var parsed = api.parseGoalYears(yearsInput.value);
      var n = parsed.value == null ? 10 : parsed.value;
      yearsInput.value = String(Math.min(api.GOAL_MAX_YEARS, n + 1));
      render();
    });
    [amountInput, targetInput, yearsInput, rateInput].forEach(function (input) {
      input.addEventListener('input', render);
    });
    document.querySelectorAll('#goal-panel .rates button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        rateInput.value = '';
        rateInput.classList.remove('on');
        setPreset(Number(btn.getAttribute('data-rate')));
        render();
      });
    });
    render();
  }
})(function () {
  var HORIZON = 18;
  function roundYuan(n) { return Math.round(n); }
  function clampAge(age) {
    var n = Math.round(Number(age));
    if (!Number.isFinite(n) || n < 0) return 0;
    if (n > 17) return 17;
    return n;
  }
  function monthsLeft(age) { return (HORIZON - age) * 12; }
  function annuityFactor(r, n) {
    if (!Number.isFinite(r) || !Number.isFinite(n) || n <= 0) return 0;
    if (r === 0) return n;
    var base = 1 + r;
    if (!(base > 0)) return NaN;
    return (Math.pow(base, n) - 1) / r;
  }
  function futureValue(monthly, annualRate, months) {
    return monthly * annuityFactor(annualRate / 12, months);
  }
  function paymentForTarget(target, annualRate, months) {
    var factor = annuityFactor(annualRate / 12, months);
    if (!factor) return NaN;
    return target / factor;
  }
  var GOAL_MAX_YEARS = 40;
  var COMPARE_AMOUNTS = [3000, 5000, 10000, 20000];
  var COMPARE_RATES = [0.03, 0.05, 0.07];
  var GOAL_MAX_MONEY = 100000000;
  function parseGoalMoney(raw) {
    var s = String(raw == null ? '' : raw).replace(/[,\s元]/g, '');
    if (s === '' || s === '0') return { blank: true };
    if (!/^\d+$/.test(s)) return { invalid: true };
    var n = Number(s);
    if (!Number.isInteger(n) || n < 1 || n > GOAL_MAX_MONEY) return { invalid: true };
    return { value: n };
  }
  function parseGoalYears(raw) {
    var s = String(raw == null ? '' : raw).trim();
    if (s === '') return { blank: true };
    if (!/^\d+$/.test(s)) return { invalid: true };
    var n = Number(s);
    if (!Number.isInteger(n) || n < 1 || n > GOAL_MAX_YEARS) return { invalid: true };
    return { value: n };
  }
  function formatDuration(months) {
    var y = Math.floor(months / 12);
    var m = months % 12;
    if (y <= 0) return String(m) + ' 個月';
    if (m === 0) return String(y) + ' 年';
    return String(y) + ' 年 ' + String(m) + ' 個月';
  }
  function monthsToReach(monthly, target, annualRate) {
    if (!(monthly > 0) || !(target > 0) || !Number.isFinite(annualRate)) return { ok: false, reason: 'input' };
    var first = futureValue(monthly, annualRate, 1);
    if (!Number.isFinite(first)) return { ok: false, reason: 'rate' };
    if (first >= target) return { ok: true, months: 1 };
    var lo = 1;
    var hi = 1;
    var guard = 0;
    while (hi < 120000 && guard < 24) {
      guard += 1;
      hi = hi < 2 ? 2 : hi * 2;
      var fv = futureValue(monthly, annualRate, hi);
      if (!Number.isFinite(fv)) return { ok: false, reason: 'unreachable' };
      if (fv >= target) break;
      var prev = futureValue(monthly, annualRate, Math.max(1, Math.floor(hi / 2)));
      if (!(fv > prev)) return { ok: false, reason: 'unreachable' };
    }
    var atHi = futureValue(monthly, annualRate, hi);
    if (!Number.isFinite(atHi) || atHi < target) return { ok: false, reason: 'unreachable' };
    while (lo + 1 < hi) {
      var mid = Math.floor((lo + hi) / 2);
      if (futureValue(monthly, annualRate, mid) >= target) hi = mid;
      else lo = mid;
    }
    return { ok: true, months: hi };
  }
  function reachTarget(input) {
    var hit = monthsToReach(input.monthly, input.target, input.annualRate);
    if (!hit.ok) return hit;
    var months = hit.months;
    var contributed = input.monthly * months;
    var value = roundYuan(futureValue(input.monthly, input.annualRate, months));
    return {
      ok: true,
      months: months,
      years: Math.floor(months / 12),
      remMonths: months % 12,
      contributed: contributed,
      value: value,
      gap: value - contributed
    };
  }
  function monthlyForYears(input) {
    var years = input.years;
    var months = years * 12;
    if (!(months > 0) || !(input.target > 0) || !Number.isFinite(input.annualRate)) return { ok: false, reason: 'input' };
    var monthlyExact = paymentForTarget(input.target, input.annualRate, months);
    if (!Number.isFinite(monthlyExact) || !(monthlyExact > 0)) return { ok: false, reason: 'unreachable' };
    var monthly = roundYuan(monthlyExact);
    if (monthly < 1) monthly = 1;
    var contributed = monthly * months;
    var value = roundYuan(futureValue(monthly, input.annualRate, months));
    return {
      ok: true,
      monthly: monthly,
      monthlyExact: monthlyExact,
      paymentRounded: Math.abs(monthly - monthlyExact) > 1e-6,
      months: months,
      years: years,
      contributed: contributed,
      value: value,
      gap: value - contributed,
      targetGap: value - input.target
    };
  }
  function compareRows(target) {
    return COMPARE_AMOUNTS.map(function (amount) {
      return {
        amount: amount,
        cells: COMPARE_RATES.map(function (rate) {
          var hit = monthsToReach(amount, target, rate);
          return { rate: rate, months: hit.ok ? hit.months : null };
        })
      };
    });
  }
  function solve(input) {
    var age = input.age;
    var months = monthsLeft(age);
    var annual = input.annualRate;
    var monthlyExact = input.mode === 'goal' ? paymentForTarget(input.target, annual, months) : input.monthly;
    var monthly = roundYuan(monthlyExact);
    var rows = [];
    var years = HORIZON - age;
    for (var y = 1; y <= years; y++) {
      var m = y * 12;
      var contributedY = monthly * m;
      var valueY = roundYuan(futureValue(monthly, annual, m));
      rows.push({ age: age + y, months: m, contributed: contributedY, value: valueY, gap: valueY - contributedY });
    }
    var contributed = monthly * months;
    var value = roundYuan(futureValue(monthly, annual, months));
    var target = input.mode === 'goal' ? input.target : null;
    return {
      mode: input.mode,
      age: age,
      annualRate: annual,
      months: months,
      years: years,
      monthly: monthly,
      monthlyExact: monthlyExact,
      paymentRounded: Math.abs(monthly - monthlyExact) > 1e-6,
      contributed: contributed,
      value: value,
      gap: value - contributed,
      target: target,
      targetGap: target == null ? null : value - target,
      rows: rows
    };
  }
  return {
    HORIZON: HORIZON,
    roundYuan: roundYuan,
    clampAge: clampAge,
    monthsLeft: monthsLeft,
    futureValue: futureValue,
    paymentForTarget: paymentForTarget,
    solve: solve,
    GOAL_MAX_YEARS: GOAL_MAX_YEARS,
    COMPARE_AMOUNTS: COMPARE_AMOUNTS,
    COMPARE_RATES: COMPARE_RATES,
    parseGoalMoney: parseGoalMoney,
    parseGoalYears: parseGoalYears,
    formatDuration: formatDuration,
    monthsToReach: monthsToReach,
    reachTarget: reachTarget,
    monthlyForYears: monthlyForYears,
    compareRows: compareRows
  };
});
