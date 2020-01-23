class ContactsController < ApplicationController
    def index
    end

    def create
        DevisMailer.with(@params = params).devis_email.deliver_now
        redirect_to root_path
    end
end
