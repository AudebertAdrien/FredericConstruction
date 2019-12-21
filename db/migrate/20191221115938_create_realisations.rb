class CreateRealisations < ActiveRecord::Migration[5.2]
  def change
    create_table :realisations do |t|
      t.string :name
      t.text :decription
      t.string :city
      t.timestamps
    end
  end
end
