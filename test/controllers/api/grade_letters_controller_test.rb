require 'test_helper'

class Api::GradeLettersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_grade_letters_index_url
    assert_response :success
  end

  test "should get show" do
    get api_grade_letters_show_url
    assert_response :success
  end

end
