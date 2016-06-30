# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160628223352) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

create_table "comments", force: :cascade do |t|
  t.text     "body",       null: false
  t.integer  "x_pos",      null: false
  t.integer  "y_pos",      null: false
  t.integer  "user_id",    null: false
  t.integer  "photo_id",   null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

add_index "comments", ["photo_id"], name: "index_comments_on_photo_id", using: :btree
add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

create_table "photos", force: :cascade do |t|
  t.string   "title",       null: false
  t.text     "description", null: false
  t.string   "photo_url",   null: false
  t.integer  "user_id",     null: false
  t.integer  "album_id"
  t.datetime "created_at",  null: false
  t.datetime "updated_at",  null: false
end

add_index "photos", ["album_id"], name: "index_photos_on_album_id", using: :btree
add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

create_table "taggings", force: :cascade do |t|
  t.integer  "tag_id",     null: false
  t.integer  "photo_id",   null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

add_index "taggings", ["photo_id"], name: "index_taggings_on_photo_id", using: :btree
add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

create_table "tags", force: :cascade do |t|
  t.string   "name",       null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

add_index "tags", ["name"], name: "index_tags_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
