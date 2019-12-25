class ChangeColumnToBeTitleInRealisations < ActiveRecord::Migration[5.2]
  def change
    change_column :realisations, :name, :text
  end
end
