ServiceConfiguration.configurations.upsert({
  service: 'facebook'
}, {
  $set: {
    // FB app owned by gkuwaye
    appId: '375124276025108',
    loginStyle: 'popup',
    secret: '6e16a4f75fdc18b7ac594dc5ca06c2b9'
  }
});
