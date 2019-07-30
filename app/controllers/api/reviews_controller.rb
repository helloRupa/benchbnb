class ReviewsController < ApplicationController
  def create
    @review = Review.new(user_id: current_user.id, review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:bench_id, :comment, :rating)
  end
end