// Run: node tests/rating.test.js (requires `playwright` installed globally or in node_modules)
const {chromium}=require('playwright');
const assert=require('assert');
(async()=>{
  const b=await chromium.launch(),p=await b.newPage(),errs=[];
  p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+require('path').resolve(__dirname,'../index.html'));
  assert.strictEqual(await p.textContent('#rating'),'No rating yet');
  const play=async wrong=>{for(let q=0;q<10;q++){
    const t=await p.textContent('#q');
    const truth=await p.evaluate(t=>{const x=Q.find(a=>a[0]===t);return x[1][x[2]]},t);
    const o=await p.locator('#opts button').allTextContents();
    let i=o.findIndex(x=>x.slice(3)===truth);if(wrong)i=(i+1)%4;
    await p.keyboard.press(String(i+1));await p.keyboard.press('Enter');}};
  await play(false);
  assert.match(await p.textContent('#stars'),/★★★★★ 5\/5/);
  await p.click('#again');
  assert.match(await p.textContent('#rating'),/^★{5}$/);
  await play(true);
  assert.match(await p.textContent('#stars'),/☆☆☆☆☆ 0\/5/);
  assert.deepStrictEqual(errs,[]);
  await b.close();console.log('rating tests passed');
})().catch(e=>{console.error(e);process.exit(1)});
