self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };

    self.clients.matchAll().then(function (clientList) {

        var focused = clientList.some(function (client) {
          return client.focused;
        });
  
        return self.registration.showNotification('ServiceWorker Cookbook', {
          body: options,
        });
  
      })

    // e.waitUntil(
    //     self.registration.showNotification('Hello world!', options)
    // );
});