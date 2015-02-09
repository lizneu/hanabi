Games = new Mongo.Collection('games');

Games.allow({
  insert: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && !user.currentGame;
  }
});
