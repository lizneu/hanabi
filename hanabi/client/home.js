var friends = Meteor.subscribe("friends");
var invites = Meteor.subscribe("invites");

Template.home.helpers({
  friends: function () {
    return Users.find({userId: {$in: this.friends}});
  },
  invites: function () {
    return Users.find({userId: {$in: this.invites}});
  },
  allUsers: function() {
    return Users.find();
  }
});

Template.body.events({
  'click add': function () {
    // need to implement search
  }
});

Meteor.methods({
  acceptInvite: function (inviterId) {
    Users.update(Meteor.userId(), {$set: {friends: inviterId}}); // add to list
  },
  rejectInvite: function (inviterId) {
    Users.update(Meteor.userId(), {$set: {invites: []}}); // remove from list
  },
  sendInvite: function (toInviteId) {
    toInvite = Users.findOne(toInviteId);
    Users.update(toInvite.id, {$set: {invites: Meteor.userId()}}); // add to list
  }
});
