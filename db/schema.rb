# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170917231305) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "publisher"
    t.text "description"
    t.decimal "price"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "bookstores", force: :cascade do |t|
    t.decimal "account"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cafetaria", force: :cascade do |t|
    t.decimal "account"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text "body"
    t.bigint "user_id"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "course_enrollments", force: :cascade do |t|
    t.bigint "course_id"
    t.bigint "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_course_enrollments_on_course_id"
    t.index ["student_id"], name: "index_course_enrollments_on_student_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "title"
    t.decimal "course_credit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "professor_id"
    t.string "course_code"
    t.text "course_description"
    t.integer "course_cap"
    t.bigint "department_id"
    t.time "start_time"
    t.time "end_time"
    t.index ["department_id"], name: "index_courses_on_department_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "grade_letters", force: :cascade do |t|
    t.string "letter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grades", force: :cascade do |t|
    t.bigint "course_id"
    t.bigint "student_id"
    t.bigint "grade_letter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "comment"
    t.index ["course_id"], name: "index_grades_on_course_id"
    t.index ["grade_letter_id"], name: "index_grades_on_grade_letter_id"
    t.index ["student_id"], name: "index_grades_on_student_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.text "ingredients"
    t.decimal "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "transcripts", force: :cascade do |t|
    t.bigint "student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_transcripts_on_student_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.date "dob"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.string "profile_image_url"
    t.text "bio"
    t.decimal "course_credit"
    t.decimal "cash_balance"
    t.boolean "is_admin"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "course_enrollments", "courses"
  add_foreign_key "course_enrollments", "users", column: "student_id"
  add_foreign_key "courses", "departments"
  add_foreign_key "courses", "users", column: "professor_id", name: "professor_id"
  add_foreign_key "friendships", "users"
  add_foreign_key "friendships", "users", column: "friend_id", name: "friend_id"
  add_foreign_key "grades", "courses"
  add_foreign_key "grades", "grade_letters"
  add_foreign_key "grades", "users", column: "student_id"
  add_foreign_key "posts", "users"
  add_foreign_key "schedules", "users"
  add_foreign_key "transcripts", "users", column: "student_id"
end
