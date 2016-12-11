class ResumeMailer < ApplicationMailer
  default from: 'chrispereira1@gmail.com'


  def feedback
    mail to: 'chrispereira1@gmail.com'
  end
end
