var db = db || {};

db.ranging = {
  createSettings: function(user, type, settings, onSuccess, onFailure) {
    DB && console.log('Creating settings for ' + type);
    var key = db.newKey('/' + type);
    var updates = db.userActionUpdate(user);
    updates['/' + type + '/' + key] = settings;
    db.update(updates, onSuccess, onFailure);
    return key;
  },
  
  activateSettings: function(user, type, key, onSuccess, onFailure) {
    DB && console.log('Activating settings for', type, key);
    var updates = db.userActionUpdate(user);
    updates['/' + type] = key;
    db.update(updates, onSuccess, onFailure);
  }
};
