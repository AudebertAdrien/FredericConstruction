class CreateRealisations < ActiveRecord::Migration[5.2]
  def change
    create_table :realisations do |t|
      t.string :name
      t.text :description
      t.string :city
      t.timestamps
    end
  end
end
