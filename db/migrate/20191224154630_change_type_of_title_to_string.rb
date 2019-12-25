class ChangeTypeOfTitleToString < ActiveRecord::Migration[5.2]
  def change
    change_column :realisations, :title, :string
  end
end
