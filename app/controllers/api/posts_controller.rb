class Api::PostsController < ApplicationController

    def all
        render json: @posts = Post.all
    end 

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            render json: @post
        else 
            render json: {errors: @post.errors, status: 422}
        end 
    end 

    def destroy
        @post = Post.find(params[:id]).destroy
        render json: @post
    end  

    private

    def post_params
        params.require(:post).permit(:name, :content)
    end 
end
