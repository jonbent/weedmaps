class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.image.attach(asset_path('profile_avatar_dark.svg'))
        if @user.save
            login(@user)
            render :show
        else
            render json: {user: nil, errors: @user.errors.full_messages}, status: 422
        end
    end
    
    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end