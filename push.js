var push = require('web-push');
let vapidKeys = {
    publicKey: 'BGBKWEaxRcP5S9k61GvnqGdmkFFeYGtGNRUvTFLvpnYEoL3ehqonnEDB48OtLrH76T5NhuZNYWcrQjMMhRl1iaA',
    privateKey: '143oNcKqqaex1uPjVwZ06Lo-prLYtOeRNOnMJS0YzIY'
}
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/dL1dZwtUenI:APA91bGoWFUd1XRnqyYMSkegFIuOFosYwwzYr3UyCU8yy7snN5C1sbt1FtcN4iTXAyXCri2VsuZq00dwycksMtaIAuQP9cA4-SNJL47fEPI4kdTRcSeT7h24BHrRXCQ10r0a1h9pPcpa",
    expirationTime: null,
    keys: {
        p256dh:
            "BPkerhxzemqKMAt0_CcVp9kBo9MkYeC9Sv7MkkhCV71NsVU-RI2gboeJYe-5JpTswZ_kPgZKF1WDcDCYR9ty8M0",
        auth: "-OlgjAnz-VKjl8CgezM8NA"
    }
};

push.sendNotification(sub, 'test message')