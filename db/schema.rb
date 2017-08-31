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

ActiveRecord::Schema.define(version: 20170831181042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "student_id"
    t.index ["course_id"], name: "index_course_enrollments_on_course_id"
    t.index ["user_id"], name: "index_course_enrollments_on_user_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "title"
    t.decimal "course_credit"
    t.integer "start_time"
    t.integer "end_time"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "professor_id"
    t.bigint "student_id"
    t.index ["user_id"], name: "index_courses_on_user_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
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
    t.integer "course_credit"
    t.integer "cash_balance"
    t.boolean "is_admin"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "posts"
  add_foreign_key "comments", "users"
  add_foreign_key "course_enrollments", "courses"
  add_foreign_key "course_enrollments", "users"
  add_foreign_key "course_enrollments", "users", column: "student_id", name: "student_id"
  add_foreign_key "courses", "users"
  add_foreign_key "courses", "users", column: "professor_id", name: "professor_id"
  add_foreign_key "courses", "users", column: "student_id", name: "student_id"
  add_foreign_key "friendships", "users"
  add_foreign_key "friendships", "users", column: "friend_id", name: "friend_id"
  add_foreign_key "posts", "users"
end
