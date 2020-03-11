var push = require('web-push');
let vapidKeys = {
    publicKey: 'BBAQXM9gNxGSkaeYn4Tq27FTYdX8l52097mfettqHbiDd2fCmUwaiDoTFVScqJEljdU8K0PTGp9PeD3fW9eT2x8',
    privateKey: 'SUUU_KK8d30vWQxqTxt7eWJI8zeIwm_FRVhiPnfvj4k'
}
push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/crsa2GefmB8:APA91bF4LVy6TfH5LMAfj7Q0RrB1poIP63y3WpJ-aiQa_LCwTQqzNnKxG5h9LboWbnBgfZ5yChVXhCGLYHRXRdT_gbrD7WvrnslPLk0cf1qAGD8gucdFe4UzX6GN8VwnA3K3dsOKisXJ",
    expirationTime: null,
    keys: {
        p256dh: "BAHyu-JRFwblhh9Dx4OCLagMBQG1AXrkAp4GCa4fvEt_7yvb6KDZzFhaWRNKec2uGReyY7wuyvZ_L91aQ4za8fU",
        auth: "OKYZu5WsdlSbh6R2oKF7JA"
    }
};

console.log('TEST');
push.sendNotification(sub, 'test message');