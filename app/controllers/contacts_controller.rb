class ContactsController < ApplicationController
    def index
    end

    def create
        DevisMailer.with(@params = params).devis_email.deliver_now
        render 'index'
    end
end
