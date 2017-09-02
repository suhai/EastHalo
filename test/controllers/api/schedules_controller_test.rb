require 'test_helper'

class Api::SchedulesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_schedules_index_url
    assert_response :success
  end

  test "should get show" do
    get api_schedules_show_url
    assert_response :success
  end

end
