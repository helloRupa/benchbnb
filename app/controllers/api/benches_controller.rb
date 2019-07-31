class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.apply_filters(params[:bounds], params[:min_seating], params[:max_seating])

    render :index
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def show
    bench = Bench.where(id: params[:id]).includes(reviews: :user)
    @bench = bench.first

    if @bench
      render :show
    else
      render json: ['Sorry, that bench does not exist'], status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :photo)
  end
end