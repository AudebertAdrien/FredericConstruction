class RealisationsController < ApplicationController
    def index
        @realisations = Realisation.all
    end

    def new
    end

    def show
        @realisation = Realisation.find(params[:id])
    end

    def create
        newRealisation = Realisation.new(title: params[:title], description: params[:description], city: params[:city])
        newRealisation.pictures.attach(params[:pictures])
        newRealisation.save
        redirect_to (realisation_path(newRealisation))
    end

    def destroy
        Realisation.find(params[:id]).delete
        redirect_to realisations_path
    end
end