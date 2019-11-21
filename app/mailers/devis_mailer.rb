# frozen_string_literal: true

class DevisMailer < ApplicationMailer
  def devis_email
    @url = ENV['URL']
    mail(to: @url, subject: 'Devis/Contact')
  end
end
