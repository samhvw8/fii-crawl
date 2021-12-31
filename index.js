const puppeteer = require('puppeteer');
const util = require('util');
const fetch = require('node-fetch');



(async () => {
    const email = 'Dkmbongmai2l@gmail.com'
    const pass = 'tuan1234';

    // const access_token = await getAccessToken({ email, pass })
    const access_token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkY4MDA1REIxQkI0MzY4Q0Q3RkJFMUUxRTlEQjkwMTg2MUY5NEFGMTEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItQUJkc2J0RGFNMV92aDRlbmJrQmhoLVVyeEUifQ.eyJuYmYiOjE2NDA4NjkzMTQsImV4cCI6MTY0MDg5NzkxNCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmZpaW50cmFkZS52biIsImF1ZCI6WyJodHRwczovL2F1dGguZmlpbnRyYWRlLnZuL3Jlc291cmNlcyIsIkZpaW5UcmFkZS5NYXJrZXQiLCJGaWluVHJhZGUuQ29yZSIsIkZpaW5UcmFkZS5SZWFsdGltZSIsIkZpaW5UcmFkZS5GdW5kYW1lbnRhbCJdLCJjbGllbnRfaWQiOiJTdG94UGx1cy5GaWluVHJhZGUuU1BBIiwic3ViIjoiMTgzMjgzIiwiYXV0aF90aW1lIjoxNjQwODY5MzE0LCJpZHAiOiJsb2NhbCIsInVzZXJfaWQiOiIxODMyODMiLCJ1c2VyX25hbWUiOiJmZXdzbWl0aDg3QGdtYWlsLmNvbSIsIm5hbWUiOiIiLCJnaXZlbl9uYW1lIjoiRmV3IiwiZmFtaWx5X25hbWUiOiJTbWl0aCIsIm1pZGRsZV9uYW1lIjoiIiwiZW1haWwiOiJmZXdzbWl0aDg3QGdtYWlsLmNvbSIsInNlcnZpY2VfdHlwZSI6IkZpaW5Hcm91cC5GaWluVHJhZGUiLCJsaXN0X3BhY2thZ2UiOiJGaWluVHJhZGUuVHJpYWwiLCJsaXN0X2ZlYXR1cmUiOiIiLCJsaXN0X2FwaSI6IiIsInJvbGUiOiJDVVNUT01FUiIsImdyb3VwX25hbWUiOiJJbmRpdmlkdWFsIiwic3RhcnRfZGF0ZSI6IjMwLzEyLzIwMjEiLCJlbmRfZGF0ZSI6IjEzLzAxLzIwMjIiLCJoaXRjb3VudF9wZXJtb250aCI6IjAiLCJjb21ncm91cF9saW1pdCI6IiIsInRpY2tlcl9saW1pdCI6IiIsInRpbWVyYW5nZV9saW1pdCI6IjAiLCJkYXRhcmFuZ2VfbGltaXQiOiIwIiwicGVyX21pbnV0ZSI6IjAiLCJwZXJfaG91ciI6IjAiLCJwZXJfZGF5IjoiMCIsInBlcl9tb250aCI6IjAiLCJlbmFibGVkIjoiVHJ1ZSIsImxhc3RfYXR0ZW1wdCI6IjEyLzMwLzIwMjEgNDo1NDoyMSBQTSIsImxhc3RfYXR0ZW1wdF9zdGF0dXMiOiJTVUNDRVNTIiwiZmluZ2VycHJpbnQiOiI0MDExOWI5OWViOTgzNjE4NDMwYmUyNDE2ZTA3YmMxNyIsImNsaWVudHR5cGUiOiJXRUJDTElFTlQiLCJzY29wZSI6WyJvcGVuaWQiLCJGaWluVHJhZGUuTWFya2V0IiwiRmlpblRyYWRlLkNvcmUiLCJGaWluVHJhZGUuUmVhbHRpbWUiLCJGaWluVHJhZGUuRnVuZGFtZW50YWwiXSwiYW1yIjpbInB3ZCJdfQ.ZXijIY6A2N5mFIqaMuhu5XZWb6HIEcjnFaSjapF-og-mFZF6YJbumXGtF8P14ugyMM7vWVStXMA0txxINr98PEpbg8ZD7ge2jGuZ8oYKVc63wts0wgD-e3bacjMLQF1KBy1w8VMGnZg_-W1gyC_LQpI1cUs1lQCpXhOkxaVbOtv7QkWP6Sk9p3QJPK3FFuvyzd32eVmmvEAYyLynvxEyxe_9NtnMGbWisYx53qtl00riR6i4-HggVjmywVsBImltzSDYBBCTwfGEWZj1Cb1zpyQZjJLTQOCrF__OM-WeyIxtdes9SLhOuHAUDbq1j4JbxhuoMqd64qH0GJGKyBv6WA"

    // const res = await getBasicApiWithAccessToken({
    //     link: "https://market.fiintrade.vn/WatchList/GetTwoDaysSeries?language=vi&OrganCode=${stock_symbol}", stock_symbol: "PECO", access_token,
    // });

    // console.log(res)

    // let data = await getWatchListSummary({ watchListId: "37", access_token })
    let data = await getWatchIdList({ access_token })



    console.log(data.length)
    console.log(data[0])

    // let data = await getSignal({ access_token })
    // let data = await getConsensus({ access_token, code: "FAROS" })



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

async function getWatchIdList({ access_token }) {
    let res = await getBasicApiWithAccessToken({
        link: "https://core.fiintrade.vn/UserSetting/GetUserWatchList?language=vi",
        access_token,
    });

    if (res["status"] == "Success") {
        return res.items
    }
    return {}
}

// 1 + 2 + 3 + 4 + ky thuat + bien dong + tong quan + tong quang buoc gia 
async function getWatchListSummary({ watchListId, access_token }) {
    // von hoa fundamental rtd11 
    // doanh thu ttm fundamental isa3
    // loi nhuan ttm fundamental isa20
    // loi nhuan ke hoach fundamental isa22
    // P/E fundamental rtd21
    // P/E du bao fundamental rtd54
    // EPS TTM fundamental rtd14
    // EPS du bao fundamental rtd53 
    // bvps ttm fundamental rtd7

    // freeloat: extraFields 
    // freeloatRate: extraFields 

    let data = []
    let id = 1;
    let res = await getBasicApiWithAccessToken({
        link: "https://market.fiintrade.vn/WatchList/GetWatchListSummary?language=vi&id=${id}&WatchListId=${watchListId}&WatchListType=CompanyGroup",
        access_token,
        watchListId,
        id
    });

    if (res["error"]) {
        return data;
    }

    data = [...res.items]

    while (true) {
        id += 1;
        res = await getBasicApiWithAccessToken({
            link: "https://market.fiintrade.vn/WatchList/GetWatchListSummary?language=vi&PackageId=${PackageId}&id=${id}&WatchListId=${watchListId}&WatchListType=CompanyGroup",
            access_token,
            id,
            watchListId,
            PackageId: res['packageId']
        });

        if (res["error"]) {
            return data;
        }

        data = [...data, ...res.items]

        if (!res['packageId']) {
            return data;
        }
    }


}

// code = organCode in summary 
// get 10 step but return 3 // work in postman and native (6) 
async function getPriceDepth({ code, access_token }) {
    let res = await getBasicApiWithAccessToken({
        link: "https://technical.fiintrade.vn/PriceDepth/GetPriceDepth?language=vi&Code=${code}",
        access_token,
        code,
    });

    if (res["status"] == "Success") {
        return res.items?.[0]
    }
    return {}
}

// code is organ code (5)
async function getConsensus({ code, access_token }) {
    let res = await getBasicApiWithAccessToken({
        link: "https://fundamental.fiintrade.vn/ConsensusAnalysis/GetConsensus?language=vi&OrganCode=${code}",
        access_token,
        code,
    });

    if (res["status"] == "Success") {
        return res.items?.[0]
    }
    return {}
}

// code is organ code (5)
async function getSignal({ access_token, volume, OrderType, TotalVolumeBuSd, orderBy }) {
    let data = []
    let page = 1;
    let pagesize = 50
    volume = volume || 10000
    TotalVolumeBuSd = TotalVolumeBuSd || 1
    OrderType = OrderType || "LessThan"
    orderBy = orderBy || "TotalMatchVolume"
    let res = await getBasicApiWithAccessToken({
        link: "https://technical.fiintrade.vn/TechnicalAnalysisSignals/GetAggressive?language=vi&Page=${page}&PageSize=${pagesize}&AverageVolume10D=${volume}&TotalVolumeBuSd=${TotalVolumeBuSd}&OrderType=${OrderType}&order=desc&orderBy=${orderBy}&OrganCode=",
        access_token,
        pagesize,
        volume,
        TotalVolumeBuSd,
        OrderType,
        page,
        orderBy
    });

    if (res["status"] != "Success") {
        return data
    }

    data = [...res.items]

    if (res["totalCount"] < pagesize) {
        return data;
    }
    while (true) {
        page += 1;
        res = await getBasicApiWithAccessToken({
            link: "https://technical.fiintrade.vn/TechnicalAnalysisSignals/GetAggressive?language=vi&Page=${page}&PageSize=${pagesize}&AverageVolume10D=${volume}&TotalVolumeBuSd=${TotalVolumeBuSd}&OrderType=${OrderType}&order=desc&orderBy=${orderBy}&OrganCode=",
            access_token,
            pagesize,
            volume,
            TotalVolumeBuSd,
            OrderType,
            page,
            orderBy
        });

        if (res["status"] != "Success") {
            break;
        }

        data = [...data, ...res.items]

        if (res.items.length < pagesize) {
            break
        }

    }

    return data;
}


async function getBasicApiWithAccessToken(params) {
    let { link, access_token } = params;
    let url = link.replace(/\${([a-zA-Z0-9_-]*)}/gi, (m, g) => params[g])
    const options = {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${access_token}`,
            "Referer": "https://fiintrade.vn/",
        },
        "body": null,
        "method": "GET"
    }

    const res = await fetch(url, options).then(res => res.json());
    return res;
}