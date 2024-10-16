# frozen_string_literal: true

class StaticController < ApplicationController
  def index
    render Static::IndexView.new
  end
end
