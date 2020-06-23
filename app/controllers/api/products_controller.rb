class Api::ProductsController < ApplicationController
    before_action :set_product, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end 

    def show 
        render json: @user
    end 

    def create
       product = Product.new(product_params)
       if product.save
        render json: product
       else
        render json: product.errors, status: 422
       end 
    end 

    def update
        if @user.update(product_params)
            render json: @user
           else
            render json: @user.errors, status: 422
           end 
    end 

    def destroy
        render json: @user.destroy
    end

    def profile 
        render json: User.all
    end  

    private

    def set_product
        @user = User.find(params[:id])
    end 

    def product_params
        params.require(:product).permit(:name, :description, :price, :department)
    end 

end
