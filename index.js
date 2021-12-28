const puppeteer = require('puppeteer');
const util = require('util');
const fetch = require('node-fetch');



(async () => {
    const email = 'Dkmbongmai2l@gmail.com'
    const pass = 'tuan1234';

    const access_token = await getAccessToken({ email, pass })

    const res = await getTwoDaysSeries({ stock_symbol: "PECO", access_token });

    console.log(res)


})();

async function getAccessToken({ email, pass }) {
    const LOGIN_CSS_SELECTOR = '#root > div.container-fluid > header > div > div > div.main-layout-top-right-wrap > div.top-right.float-right.timer-top > div.login-button'

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://fiintrade.vn/', { waitUntil: 'networkidle0' });

    await page.click(LOGIN_CSS_SELECTOR)
    await page.waitForNetworkIdle();

    await page.focus('#exampleInputEmail1')
    await page.keyboard.type(email)
    await page.focus('#exampleInputPassword1')
    await page.keyboard.type(pass)
    await page.keyboard.press('Enter')

    await page.waitForNetworkIdle();

    const data = await page.evaluate(() => Object.assign({}, window.localStorage));
    await browser.close();

    let authKey = undefined;

    for (var key in data) {
        if (key.includes('auth')) {
            authKey = key;
            break;
        }
    }
    const auth_data = JSON.parse(data[authKey])

    const access_token = auth_data['access_token']

    return access_token;
}

async function getTwoDaysSeries({ stock_symbol, access_token }) {
    const res = await fetch(`https://market.fiintrade.vn/WatchList/GetTwoDaysSeries?language=vi&OrganCode=${stock_symbol}`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${access_token}`,
            "Referer": "https://fiintrade.vn/",
        },
        "body": null,
        "method": "GET"
    }).then(res => res.json());
    return res;
}