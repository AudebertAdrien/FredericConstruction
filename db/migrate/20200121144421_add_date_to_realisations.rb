class AddDateToRealisations < ActiveRecord::Migration[5.2]
  def change
    add_column :realisations, :date, :string
  end
end
