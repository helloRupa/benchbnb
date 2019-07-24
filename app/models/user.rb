class User < ApplicationRecord
  attr_reader :password

  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by_username(username) 
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64(16)

    while User.find_by_session_token(token)
      token = SecureRandom.urlsafe_base64(16)
    end

    token
  end
end