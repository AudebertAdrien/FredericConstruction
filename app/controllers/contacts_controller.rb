class ContactsController < ApplicationController
    def new
    end

    def create
        DevisMailer.with(@params = params).devis_email.deliver_now
        flash[:success] = "Message envoyer"
        redirect_to new_contact_path
    end
end
