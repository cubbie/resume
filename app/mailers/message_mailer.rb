class MessageMailer < ApplicationMailer
  default from: "Chris P <chrispereira1@gmail.com>"
  default to: "Chris P <chrispereira1@gmail.com>"

  def new_message(message)
    @message = message

    mail subject: "Message from #{message.name}"
  end

end
