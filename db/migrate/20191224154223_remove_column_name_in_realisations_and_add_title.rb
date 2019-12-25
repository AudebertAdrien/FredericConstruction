class RemoveColumnNameInRealisationsAndAddTitle < ActiveRecord::Migration[5.2]
  def change
    change_table :realisations do |t|
      t.rename :name, :title
    end
  end
end