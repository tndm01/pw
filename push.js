var push = require('web-push');
let vapidKeys = {
    publicKey: 'BGBKWEaxRcP5S9k61GvnqGdmkFFeYGtGNRUvTFLvpnYEoL3ehqonnEDB48OtLrH76T5NhuZNYWcrQjMMhRl1iaA',
    privateKey: '143oNcKqqaex1uPjVwZ06Lo-prLYtOeRNOnMJS0YzIY'
  }
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')