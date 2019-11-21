# frozen_string_literal: true

class DevisMailer < ApplicationMailer
  default from: 'Devis@ConstructionFrederic.fr'

  def devis_email
    @url = 'audebertadrien.pro@gmail.com'
    mail(to: @url, subject: 'Devis/Contact')
  end
end
