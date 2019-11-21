# frozen_string_literal: true

class DevisMailer < ApplicationMailer
  def devis_email
    @url = 'test@gmail.com'
    mail(to: @url, subject: 'Devis/Contact')
  end
end
