var push = require('web-push');
let vapidKeys = {
    publicKey: 'BGBKWEaxRcP5S9k61GvnqGdmkFFeYGtGNRUvTFLvpnYEoL3ehqonnEDB48OtLrH76T5NhuZNYWcrQjMMhRl1iaA',
    privateKey: '143oNcKqqaex1uPjVwZ06Lo-prLYtOeRNOnMJS0YzIY'
}
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dq4gseHXrT8:APA91bHMo0Xm34GOkecK0XO9b3ym_VmGQXH0r2CIdCAeTb6RMZikEZfBFExbUOpoLfq1pI4jRFGVmAA0CXr5ubTfcbq2HdyVHhpZHhNQwtnLz6sYuYkikFjfoFov_TKkFJ2MPMBfp1uA",
    expirationTime: null,
    keys: {
        p256dh: "BCdkSwn3-n9uKzdOWXUtckytOPXGiyxHZPr0HUCUCxKtZ1RxSPoNlVj4aUWfeQCGIsEAx_UziOW3S98qOg8rNEk",
        auth: "FTrnthiNKdOj1Z3CLpTtjQ"
    }
};


push.sendNotification(sub, 'test message')