class Menu < ApplicationRecord
  validates :name, :price, presence: true
end
