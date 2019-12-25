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
        puts "#" * 100
        puts params
        Realisation.create(title: params[:title], description: params[:description], city: params[:city])
        puts "#" * 100
    end
end