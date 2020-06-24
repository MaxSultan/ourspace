class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end 

    def show 
        render json: current_user
    end 

    def update
        if @user.update()
            render json: @user
           else
            render json: {errors: @user.errors, status: 422}
           end 
    end 

    def destroy
        render json: @user.destroy
    end

    def profile 
        render json: User.all
    end  

    private

    def set_user
        @user = User.find(params[:id])
    end 
end