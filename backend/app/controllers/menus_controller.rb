class MenusController < ApplicationController
  def create
    menu = Menu.create(
      params
        .require(:menu)
        .permit(
          :name,
          :price
        )
    )

    render json: menu
  end

  def destroy
    menu = Menu.find(params[:id])
    menu.destroy

    render json: 'success'
  end

  def index
    collection = if params[:query]
      Menu.where("name like ?", "%#{params[:query]}%")
    else
      Menu
    end

    render json: collection.order(price: params[:order] || :asc)
  end
end
