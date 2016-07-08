"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');
const TagApiUtil = require('../util/tag_api_util');

const TagActions = {

  fetchAllTags () {
    TagApiUtil.fetchAllTags(TagActions.receiveAllTags);
  },

  fetchTag (id) {
    TagApiUtil.fetchTag(id, TagActions.receiveSingleTag);
  },

  createTag (tag) {
    TagApiUtil.createTag(tag, TagActions.receiveSingleTag);
  },

  deleteTag(id) {
    TagApiUtil.deleteTag(id, TagActions.removeTag);
  },

  editTag(tag){
    TagApiUtil.updateTag(tag, TagActions.updateTag);
  },

  removeTag (id) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_REMOVED,
      id: id
    });
  },

  updateTag (tag) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_RECEIVED,
      tag: tag
    });
  },

  receiveAllTags(tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags: tags
    });
  },

  receiveSingleTag (tag) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_RECEIVED,
      tag: tag
    });
  }
};

module.exports = TagActions;
