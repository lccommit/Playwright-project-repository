const { test, expect } = require('@playwright/test');

/**
 * ================================
 * TEST DATA
 * ================================
 */

// ---------- PASS CASES (30) ----------
const passTestCases = [
  { id: 'Pass_01', input: 'mama gedhara yanavaa.', expected: 'මම ගෙදර යනවා.' },
  { id: 'Pass_02', input: 'mata bath oonee.', expected: 'මට බත් ඕනේ.' },
  { id: 'Pass_03', input: 'api paasal yanavaa.', expected: 'අපි පාසල් යනවා.' },
  { id: 'Pass_04', input: 'mata nidhimathayi.', expected: 'මට නිදිමතයි.' },
  { id: 'Pass_05', input: 'dhaen vahinavaa.', expected: 'දැන් වහිනවා.' },
  { id: 'Pass_06', input: 'api passe kathaa karamu.', expected: 'අපි පස්සෙ කතා කරමු.' },
  { id: 'Pass_07', input: 'oyaata kohomadha?', expected: 'ඔයාට කොහොමද?' },
  { id: 'Pass_08', input: 'oyaa kavadhdha enna hithan inne?.', expected: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?' },
  { id: 'Pass_09', input: 'vahaama enna.', expected: 'වහාම එන්න.' },
  { id: 'Pass_10', input: 'issarahata yanna.', expected: 'ඉස්සරහට යන්න.' },

  { id: 'Pass_11', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඊයේ ගෙදර ගියා.' },
  { id: 'Pass_12', input: 'mama heta enavaa.', expected: 'මම හෙට එනවා.' },
  { id: 'Pass_13', input: 'mama dhannee naee.', expected: 'මම දන්නේ නෑ.' },
  { id: 'Pass_14', input: 'mata eeka epaa.', expected: 'මට ඒක එපා.' },
  { id: 'Pass_15', input: 'Zoom meeting ekak thiyennee.', expected: 'Zoom meeting එකක් තියෙන්නේ.' },

  { id: 'Pass_16', input: 'Documents tika attach karalaa mata email ekak evanna.', expected: 'Documents ටික attach කරලා මට email එකක් එවන්න.' },
  { id: 'Pass_17', input: 'Teams meeting ekee link eka WhatsApp karanna puLuvandha?', expected: 'Teams meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද?' },
  { id: 'Pass_18', input: 'mata WiFi naehae.', expected: 'මට WiFi නැහැ.' },
  { id: 'Pass_19', input: 'Rs. 2500 ganna thiyenavaa.', expected: 'Rs. 2500 ගන්න තියෙනවා.' },
  { id: 'Pass_20', input: '7.30 AM office yanna oonee.', expected: '7.30 AM office යන්න ඕනේ.' },

  { id: 'Pass_21', input: '2026-05-21 meeting eka thiyenavaa.', expected: '2026-05-21 meeting එක තියෙනවා.' },
  { id: 'Pass_22', input: 'mama gedhara   yanavaa.', expected: 'මම ගෙදර   යනවා.' },
  { id: 'Pass_23', input: 'dhitvaa suLi kunaatuva samaga aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya…', expected: 'දිට්වා සුළි කුනාටුව සමග ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය…' },
  { id: 'Pass_24', input: 'ela machan, mama office late vennee traffic nisaa.', expected: 'එල මචන්, මම office late වෙන්නේ traffic නිසා.' },
  { id: 'Pass_25', input: 'mama oyaata kiyannam.', expected: 'මම ඔයාට කියන්නම්.' },

  { id: 'Pass_26', input: 'oyaa hari hoDHAtama karanavaa.', expected: 'ඔයා හරි හොඳටම කරනවා.' },
  { id: 'Pass_27', input: 'api loku dheyakata yamu.', expected: 'අපි ලොකු දෙයකට යමු.' },
  { id: 'Pass_28', input: 'mata oyaagee adhahas oona.', expected: 'මට ඔයාගේ අදහස් ඕන.' },
  { id: 'Pass_29', input: 'oyaa monavadha hithannee?', expected: 'ඔයා මොනවද හිතන්නේ?' },
  { id: 'Pass_30', input: 'mama oyaata hari kaemathi.', expected: 'මම ඔයාට හරි කැමති.' }
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
    test(` ${data.id} | ${data.input}`, async ({ page }) => {
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
    test(` ${data.id} | ${data.input}`, async ({ page }) => {
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