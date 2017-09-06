require 'test_helper'

class Api::GradesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_grades_index_url
    assert_response :success
  end

  test "should get show" do
    get api_grades_show_url
    assert_response :success
  end

end
