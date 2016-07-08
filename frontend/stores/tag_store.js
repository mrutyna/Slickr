"use strict";

const Store = require('flux/utils').Store;
const TagConstants = require('../constants/tag_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const TagStore = new Store(AppDispatcher);

let _tags = {};

TagStore.all = function(){
  return Object.assign({}, _tags);
};

TagStore.find = function(id){
  return Object.assign({}, _tags[id]);
};

function resetAllTags(tags) {
  tags.forEach((tag) => {
    _tags[tag.id] = tag;
  });

  TagStore.__emitChange();
}

function resetSingleTag(tag) {
  _tags[tag.id] = tag;
  TagStore.__emitChange();
}

function removeTag(id) {
  delete _tags[id];

  TagStore.__emitChange();
}

TagStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
      resetAllTags(payload.tags);
      break;
    case TagConstants.TAG_RECEIVED:
      resetSingleTag(payload.tag);
      break;
    case TagConstants.TAG_REMOVED:
      removeTag(payload.id);
      break;
  }
};

module.exports = TagStore;
