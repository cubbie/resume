class ResumeController < ApplicationController
  def new
   @message = Message.new
  end

end
