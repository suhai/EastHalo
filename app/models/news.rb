class News < ApplicationRecord
	validates :url, :headline, :presence => true
end
