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
        @newRealisation = Realisation.new(title: params[:title], description: params[:description], city: params[:city])
        if params[:image].present?
            @newRealisation.image.attach(params[:image])
        end

        @newRealisation.save
        redirect_to realisation_path(@newRealisation.id)
    end

    def destroy
        #@images = ActiveStorage::Blob.find_signed(params[:id])
        #@images.purge
        @deleteRealisation = Realisation.find(params[:id])
        @deleteRealisation.image.purge
        @deleteRealisation.delete
        redirect_to realisations_path
    end
end