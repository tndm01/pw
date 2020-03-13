var push = require('web-push');
let vapidKeys = {
    publicKey: 'BNVusQ8KsdNOPHQtEDZCWCje2VrhZheGc33DWgJvvzTctOWDmVz3DgWKCWzS1N2WTWlhMfZ2xWdrGmmhZ831m_s',
    privateKey: 'Assqq5WMpNl9os-X__OilFHvfWS9f-1nrTCmQZfJgso'
}
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/f9r-ZQsiZho:APA91bFy_6Or46EhHjy26hZstkKZ5xyUroC7-pzNo5kLVLliLv4C9X3pDhn42bvXRfYnbRAtw6mk2e8P5UA1apIFNvS1YyvhAXQUtCElUG6QUDl3woWV3SUhPEcIF6P_q9ENLkSqPsdx",
    expirationTime: null,
    keys: {
        p256dh: "BDNlPmPhjqruCAnw2jB9FFKVI7KKXLJTCfyKu5hNWvT4SW9kdlaWYF05tv4segzrU762ypWGaecQ9AHuOS8e_OE",
        auth: "PxLAttXU5eckuSwB8MbnZQ"
    }
};

console.log('TEST');
push.sendNotification(sub, 'test message');