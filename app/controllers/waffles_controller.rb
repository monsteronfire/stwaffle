class WafflesController < ApplicationController
  before_action :find_waffle, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @waffles = Waffle.all.order("created_at DESC")
  end

  def show
  end

  def new
    @waffle = current_user.waffles.build
  end

  def create
    @waffle = current_user.waffles.build(waffle_params)

    if @waffle.save
      redirect_to @waffle
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @waffle.update(waffle_params)
      redirect_to @waffle, notice: "Waffle was successfully updated"
    else
      render 'edit'
    end
  end

  def destroy
    @waffle.destroy
    redirect_to root_path
  end

  private
    def waffle_params
      params.require(:waffle).permit(:title, :description)
    end
    
    def find_waffle
      @waffle = Waffle.find(params[:id])
    end
end
