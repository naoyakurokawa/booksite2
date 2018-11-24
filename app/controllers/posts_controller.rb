class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end
  
  def show
    @post = Post.find_by(id:params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to root_url, notice: 'Add Post'
    else
      render :new
    end
  end
  
  def destroy
    @post = Post.find_by(id:params[:id])
    @post.destroy
    redirect_to("/posts/index")
  end

  private
  def post_params
    params.fetch(:post, {}).permit(:book_title, :image)
  end
  
end

