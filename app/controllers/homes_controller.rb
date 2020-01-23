class HomesController < ApplicationController
    include RealisationsHelper
    
    def index
        @realisations = Realisation.all
    end
end
