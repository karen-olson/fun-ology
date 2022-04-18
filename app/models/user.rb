class User < ApplicationRecord
    has_secure_password
    
    belongs_to :avatar 
    
    has_many :students, class_name: "User", foreign_key: "speech_therapist_id"

    belongs_to :speech_therapist, class_name: "User", optional: true

    def self.alphabetize
        self.all.sort_by{|user| user.full_name[0]}
    end
end
