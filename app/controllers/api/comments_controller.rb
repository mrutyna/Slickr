class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/photos/show"
    else
      @errors = @comment.errors.full_messages
      render "api/photos/show", status: 401
    end
  end


    private
    def comment_params
      params.require(:comment).permit(:body, :x_pos, :y_pos, :photo_id, :user_id)
    end
end
