Meteor.publish('games', function(gameId) {
  return Todos.findOne(gameId);
});
