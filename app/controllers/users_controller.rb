class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end
  
  def show
    @user = User.find_by(id:params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to("/users/index")
    else
      render :new
    end
  end

private
  def user_params
    params.fetch(:user, {}).permit(:name, :avatar)
  end

end
