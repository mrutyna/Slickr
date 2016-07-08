"use strict";

module.exports =  {
  fetchAllTags (cb) {
    $.ajax({
      url: "api/tags",
      success: cb
    });
  },

  fetchTag (id, cb) {
    $.ajax({
      url: `api/tags/${id}`,
      success: cb
    });
  },

  deleteTag (id, cb) {
    $.ajax({
      url: `api/tags/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createTag (newTag, cb, redirectCb) {
    $.ajax({
      url: "api/tags",
      method: "POST",
      data: {tag: newTag},
      success: function (tag) {
        cb(tag, redirectCb);
      }
    });
  },

  updateTag (tag, cb, redirectCb) {
    $.ajax({
      url: `api/tags/${tag.id}`,
      method: "PATCH",
      data: {tag: tag},
      success: function (updatedTag) {
        cb(updatedTag, redirectCb);
      }
    });
  }
};