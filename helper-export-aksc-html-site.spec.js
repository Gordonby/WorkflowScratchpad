const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('prodsite', async ({ page }) => {

  //use a link that will create the most links (preview features, feature flags etc)
  await page.goto('https://azure.github.io/AKS-Construction?feature=defender');

  //Wait for the stack
  const stackops='[data-testid="stackops"]';
  await page.waitForSelector(stackops)

  //Save the contents of the az cmd box to file
  const pageHtml = await page.content();

  console.log(pageHtml);
  fs.writeFileSync('prodsite.html', pageHtml);

});
