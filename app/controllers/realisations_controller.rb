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
        Realisation.create(name: params[:title])
        puts "#" * 100
    end
end
