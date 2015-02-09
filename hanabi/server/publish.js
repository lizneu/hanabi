Meteor.publish('games', function(gameId) {
  return Todos.findOne(gameId);
});

Meteor.publish('users', function () {
  return Users.find();
});
