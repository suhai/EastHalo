require 'test_helper'

class Api::CourseEnrollmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_course_enrollments_index_url
    assert_response :success
  end

  test "should get create" do
    get api_course_enrollments_create_url
    assert_response :success
  end

  test "should get show" do
    get api_course_enrollments_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_course_enrollments_destroy_url
    assert_response :success
  end

end
