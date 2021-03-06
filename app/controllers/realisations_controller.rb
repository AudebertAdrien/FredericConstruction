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
        @newRealisation = Realisation.new(title: params[:title], description: params[:description], city: params[:city], date: params[:date])
        if params[:image].present?
            @newRealisation.image.attach(params[:image])
        end

        @newRealisation.save
        flash[:success] = "Réalisation créer"
        redirect_to realisation_path(@newRealisation.id)
    end

    def destroy
        @deleteRealisation = Realisation.find(params[:id])
        @deleteRealisation.image.purge
        @deleteRealisation.delete
        flash[:alert] = "Réalisation supprimer"
        redirect_to realisations_path
    end
end