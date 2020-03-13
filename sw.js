self.addEventListener('push', function (e) {
    self.clients.matchAll().then(function (clientList) {
        return self.registration.showNotification('ServiceWorker Cookbook', {
          body: "ANH NHAN DEP TRAI1",
        });
  
      })
});