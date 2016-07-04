class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      @errors = @photo.errors.full_messages
      render :show, status: 401
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      @errors = @photo.errors.full_messages
      render :show, status: 401
    end
  end

  def destroy
    @photo = Photo.find(params[:id])

    @photo.destroy

    render json: {}
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :photo_url, :user_id)
  end
end
