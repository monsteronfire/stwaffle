class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :waffles

  def self.find_for_oauth(auth, signed_in_resource = nil)
    identity = Identity.find_for_oauth(auth)
    user = signed_in_resource ? signed_in_resource : identity.user

    if user.nil?
      email = auth.info.email
      user = User.find_by(email: email) if email

      if user.nil?
        user = User.create!(
          full_name: auth.extra.raw_info.name,
          avatar: auth.info.image,
          email: email,
          password: Devise.friendly_token[0,20]
        )
      end
    end

    if identity.user != user
      identity.user = user
      identity.save!
    end
    user
  end

end
