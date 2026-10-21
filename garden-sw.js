// No personal account data or invoice files are cached by this service worker.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// Push messages will require an authenticated backend and an opted-in subscription.
self.addEventListener('push',event=>{
  event.waitUntil(self.registration.showNotification('Full Garden Maintenance',{
    body:'Please open your secure Member account for an update.',
    icon:'app-icon-192.png',badge:'app-icon-192.png',
    tag:'garden-account-daily-update',vibrate:[120,70,120],
    data:{url:new URL('./#member/dashboard',self.registration.scope).href}
  }));
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil((async()=>{
    const url=new URL('./#member/dashboard',self.registration.scope).href;
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const window of windows){if(window.url.startsWith(self.registration.scope)){await window.navigate(url);return window.focus();}}
    return self.clients.openWindow(url);
  })());
});