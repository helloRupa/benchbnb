class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      bench = Bench.find_by_id(@review.bench_id)
      bench.add_review(@review)
      
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