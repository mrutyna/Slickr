"use strict";

module.exports =  {
  fetchAllPhotos (cb) {
    $.ajax({
      url: "api/photos",
      success: cb
    });
  },

  fetchPhoto (id, cb) {
    $.ajax({
      url: `api/photos/${id}`,
      success: cb
    });
  },

  deletePhoto (id, cb) {
    $.ajax({
      url: `api/photos/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createPhoto (newPhoto, cb, redirectCb) {
    $.ajax({
      url: "api/photos",
      method: "POST",
      data: {photo: newPhoto},
      success: function (photo) {
        cb(photo, redirectCb);
      }
    });
  },

  updatePhoto (photo, cb, redirectCb) {
    $.ajax({
      url: `api/photos/${photo.id}`,
      method: "PATCH",
      data: {photo: photo},
      success: function (updatedPhoto) {
        cb(updatedPhoto, redirectCb);
      }
    });
  }
  // ,
  //
  // createComment: function(comment) {
  //   $.ajax({
  //     type: 'POST',
  //     url: 'api/comments',
  //     data: {comment: {
  //       body: comment.body,
  //       x_pos: comment.xPos,
  //       y_pos: comment.yPos,
  //       design_id: comment.designId,
  //       user_id: comment.userId
  //     }},
  //     success: function(design) {
  //       DesignActions.receiveDesign(design);
  //     },
  //     error: function(errors) {
  //       DesignActions.receiveErrors(errors);
  //     }
  //   });
  // },
  //
  // deleteComment: function(commentId) {
  //   $.ajax({
  //     type: 'DELETE',
  //     url: 'api/comments' + commentId.toString(),
  //     success: function(design) {
  //       DesignActions.receiveDesign(design);
  //     }
  //   });
  // }
};
