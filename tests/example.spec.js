const { test, expect } = require('@playwright/test');

/**
 * ================================
 * TEST DATA
 * ================================
 */

// ---------- PASS CASES (30) ----------
const passTestCases = [
  { id: 'Pass_01', input: 'ayubovan!', expected: 'ආයුබෝවන්!' },
  { id: 'Pass_02', input: 'mama yanavaa.', expected: 'මම යනවා.' },
  { id: 'Pass_03', input: 'oyaa kohomadha?', expected: 'ඔයා කොහොමද?' },
  { id: 'Pass_04', input: 'suba upandhinayak veevaa!', expected: 'සුබ උපන්දිනයක් වේවා!' },
  { id: 'Pass_05', input: 'oba monawadha karanne?', expected: 'ඔබ මොනවද කරන්නේ?' },
  { id: 'Pass_06', input: 'mama honda innavaa.', expected: 'මම හොඳ ඉන්නවා.' },
  { id: 'Pass_07', input: 'oyaa hari lassanai.', expected: 'ඔයා හරි ලස්සනයි.' },
  { id: 'Pass_08', input: 'mata bath kanna ona.', expected: 'මට බත් කන්න ඕන.' },
  { id: 'Pass_09', input: 'api school yanavaa.', expected: 'අපි ස්කූල් යනවා.' },
  { id: 'Pass_10', input: 'eka hari lassanai.', expected: 'එක හරි ලස්සනයි.' },

  { id: 'Pass_11', input: 'oyaa gedhara innavada?', expected: 'ඔයා ගෙදර ඉන්නවද?' },
  { id: 'Pass_12', input: 'mama weda karanavaa.', expected: 'මම වැඩ කරනවා.' },
  { id: 'Pass_13', input: 'api kattiya enavaa.', expected: 'අපි කට්ටිය එනවා.' },
  { id: 'Pass_14', input: 'mata salli nae.', expected: 'මට සල්ලි නැහැ.' },
  { id: 'Pass_15', input: 'oya kawadha enne?', expected: 'ඔයා කවදා එන්නේ?' },

  { id: 'Pass_16', input: 'suba dawasak!', expected: 'සුබ දවසක්!' },
  { id: 'Pass_17', input: 'oya hari honda lamayek.', expected: 'ඔයා හරි හොඳ ළමයෙක්.' },
  { id: 'Pass_18', input: 'mama oyata adarei.', expected: 'මම ඔයාට ආදරෙයි.' },
  { id: 'Pass_19', input: 'eka loku deyak.', expected: 'එක ලොකු දෙයක්.' },
  { id: 'Pass_20', input: 'api heta hamuwemu.', expected: 'අපි හෙට හමුවෙමු.' },

  { id: 'Pass_21', input: 'oyata bohoma sthuthi.', expected: 'ඔයාට බොහොම ස්තුති.' },
  { id: 'Pass_22', input: 'mama honda wenna try karanavaa.', expected: 'මම හොඳ වෙන්න ට්‍රයි කරනවා.' },
  { id: 'Pass_23', input: 'eka mata therenne nae.', expected: 'එක මට තේරෙන්නේ නැහැ.' },
  { id: 'Pass_24', input: 'oyaa mona wage kenekda?', expected: 'ඔයා මොන වගේ කෙනෙක්ද?' },
  { id: 'Pass_25', input: 'mama oyata kiyannam.', expected: 'මම ඔයාට කියන්නම්.' },

  { id: 'Pass_26', input: 'oyaa hari hondatama karanavaa.', expected: 'ඔයා හරි හොඳටම කරනවා.' },
  { id: 'Pass_27', input: 'api loku deyakata yamu.', expected: 'අපි ලොකු දෙයකට යමු.' },
  { id: 'Pass_28', input: 'mata oyage adahas ona.', expected: 'මට ඔයාගේ අදහස් ඕන.' },
  { id: 'Pass_29', input: 'oyaa monawadha hithanne?', expected: 'ඔයා මොනවද හිතන්නේ?' },
  { id: 'Pass_30', input: 'mama oyata hari kemathi.', expected: 'මම ඔයාට හරි කැමති.' }
];

// ---------- FAIL CASES (15) ----------
const failTestCases = [
  { id: 'Fail_01', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' }, // no spaces
  { id: 'Fail_02', input: 'harrri harrri', expected: 'හරි හරි' },           // typo
  { id: 'Fail_03', input: 'oy kohmd?', expected: 'ඔයා කොහොමද?' },          // shortened words
  { id: 'Fail_04', input: 'mmaa yanwa', expected: 'මම යනවා' },             // spelling error
  { id: 'Fail_05', input: 'api skul yanwa', expected: 'අපි පාසල් යනවා' },

  { id: 'Fail_06', input: 'mata salli naaa', expected: 'මට සල්ලි නැහැ' },
  { id: 'Fail_07', input: 'oya lassnai', expected: 'ඔයා ලස්සනයි' },
  { id: 'Fail_08', input: 'eka hondaiii', expected: 'එක හොඳයි' },
  { id: 'Fail_09', input: 'api hemadaama yamu', expected: 'අපි හැමදාම යමු' },
  { id: 'Fail_10', input: 'mama adreyi', expected: 'මම ආදරෙයි' },

  { id: 'Fail_11', input: 'oy mona krnne', expected: 'ඔයා මොනවද කරන්නේ?' },
  { id: 'Fail_12', input: 'oyta sthuthi', expected: 'ඔයාට ස්තුති' },
  { id: 'Fail_13', input: 'api loku deykt ynwa', expected: 'අපි ලොකු දෙයකට යනවා' },
  { id: 'Fail_14', input: 'mata terenne na', expected: 'මට තේරෙන්නේ නැහැ' },
  { id: 'Fail_15', input: 'oya kawda enne', expected: 'ඔයා කවදා එන්නේ?' }
];

/**
 * ================================
 * TEST SUITE
 * ================================
 */

test.describe('Singlish → Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/singlish-to-sinhala');
  });

  // ---------- PASS TESTS ----------
  for (const data of passTestCases) {
    test(`✅ ${data.id} | ${data.input}`, async ({ page }) => {
      const inputArea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
      const outputArea = page
        .locator('.card', { hasText: 'Sinhala' })
        .locator('.w-full.h-80');

      await inputArea.fill(data.input);

      await expect(outputArea).toHaveText(/.+/, { timeout: 7000 });

      const actualValue = (await outputArea.innerText()).trim();

      console.log(`[PASS] ${data.id} → ${actualValue}`);
      expect(actualValue).toBe(data.expected);
    });
  }

  // ---------- FAIL TESTS ----------
  for (const data of failTestCases) {
    test(`❌ ${data.id} | ${data.input}`, async ({ page }) => {
      const inputArea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
      const outputArea = page
        .locator('.card', { hasText: 'Sinhala' })
        .locator('.w-full.h-80');

      await inputArea.fill(data.input);

      await expect(outputArea).toHaveText(/.+/, { timeout: 7000 });

      const actualValue = (await outputArea.innerText()).trim();

      console.log(`[FAIL] ${data.id} → ${actualValue}`);
      expect(actualValue).not.toBe(data.expected);
    });
  }

});