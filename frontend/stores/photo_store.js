"use strict";

const Store = require('flux/utils').Store;
const PhotoConstants = require('../constants/photo_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoStore = new Store(AppDispatcher);

let _photos = {};

PhotoStore.all = function(){
  return Object.assign({}, _photos);
};

PhotoStore.find = function(id){
  return Object.assign({}, _photos[id]);
};

function resetAllPhotos(photos) {
  photos.forEach((photo) => {
    _photos[photo.id] = photo;
  });

  PhotoStore.__emitChange();
}

function resetSinglePhoto(photo) {
  console.log("o fuk yeeee");
  _photos[photo.id] = photo;
  PhotoStore.__emitChange();
}

function removePhoto(id) {
  delete _photos[id];

  PhotoStore.__emitChange();
}

PhotoStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
      resetAllPhotos(payload.photos);
      break;
    case PhotoConstants.PHOTO_RECEIVED:
      resetSinglePhoto(payload.photo);
      break;
    case PhotoConstants.PHOTO_REMOVED:
      removePhoto(payload.id);
      break;
  }
};

module.exports = PhotoStore;
