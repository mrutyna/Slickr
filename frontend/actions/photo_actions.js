"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const PhotoApiUtil = require('../util/photo_api_util');

const PhotoActions = {
  // fetchAllPhotos (filters) {
  //   PhotoApiUtil.fetchAllPhotos(filters, PhotoActions.receiveAllPhotos);
  // },
  // fetchPhoto (filters) {
  //   PhotoApiUtil.fetchPhotos(filters, PhotoActions.receiveAllPhotos);
  // },
  // createPhoto (photo) {
  //   PhotoApiUtil.createPhoto(photo, PhotoActions.receiveSinglePhoto);
  // },

  fetchAllPhotos () {
    PhotoApiUtil.fetchAllPhotos(PhotoActions.receiveAllPhotos);
  },

  fetchPhoto (id) {
    PhotoApiUtil.fetchPhoto(id, PhotoActions.receivePhoto);
  },

  createPhoto (photo) {
    PhotoApiUtil.createPhoto(photo, PhotoActions.receiveSinglePhoto);
  },

  deletePhoto(id) {
    PhotoApiUtil.deletePhoto(id, PhotoActions.removePhoto);
  },

  editPhoto(photo){
    PhotoApiUtil.updatePhoto(photo, PhotoActions.updatePhoto);
  },

  removePhoto (id) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_REMOVED,
      id: id
    });
  },

  updatePhoto (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  receiveAllPhotos(photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveSinglePhoto (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  }
};

module.exports = PhotoActions;
