class MoviesController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_action :set_movie, only: [:show, :edit, :update, :destroy]

	def index
		@movies = Movie.all
		render json: @movies, root: false
	end

	def show
		render json: @movie, root: false
	end

	# POST /movies
  # POST /movies.json
  def create
  	@movie = Movie.new(movie_params)
  	respond_to do |format|
  		if @movie.save
  			format.json { render json: @movie, status: :created }
  		else
  			format.json { render json: @movie.errors, status: :unprocessable_entity }
  		end
  	end
  end

  # PATCH/PUT /movies/1
  # PATCH/PUT /movies/1.json
  def update
  	respond_to do |format|
  		if @movie.update(movie_params)
  			format.json { render json: @movie, status: :ok }
  		else
  			format.json { render json: @movie.errors, status: :unprocessable_entity }
  		end
  	end
  end

  # DELETE /movies/1
  # DELETE /movies/1.json
  def destroy
  	@movie.destroy
  	respond_to do |format|
  		format.json { head :no_content }
  	end
  end



  private

  def set_movie
  	@movie = Movie.find(params[:id])
  end

  def movie_params
  	params.require(:movie).permit(:title)
  end
end
