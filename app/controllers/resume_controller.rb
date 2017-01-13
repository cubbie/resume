class ResumeController < ApplicationController
  def new
   @message = Message.new
  end

  def sendemail
    Pony.options = {
      :via => :smtp,
      :via_options => {
        address: "smtp.sendgrid.com",
        port: "587",
        user_name: "apikey",
        password: "#{ENV["SG_KEY"]}",
        :openssl_verify_mode => 'none'
      }
    }
    Pony.mail({
      from: "#{params["message"][:email]}",
      to: "chris@cubbie.ca",
      subject: "test",
      body: "#{params["message"][:name]} said: #{params["message"][:content]}"
      })
  end

 def create
   @message = Message.new(message_params)

   if @message.valid?
     MessageMailer.new_message(@message).deliver
     redirect_to root_path, notice: "Your messages has been sent."
   else
     flash[:alert] = "An error occurred while delivering this message."
     render :new
   end
 end

private

 def message_params
   params.require(:message).permit(:name, :email, :content)
 end
end
