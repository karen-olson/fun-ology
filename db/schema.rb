# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_07_160102) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "avatars", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "minimal_pairs", force: :cascade do |t|
    t.string "first_word"
    t.string "first_image_url"
    t.string "second_word"
    t.string "second_image_url"
    t.bigint "target_phoneme_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["target_phoneme_id"], name: "index_minimal_pairs_on_target_phoneme_id"
  end

  create_table "phonological_processes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "practice_session_minimal_pairs", force: :cascade do |t|
    t.bigint "practice_session_id", null: false
    t.bigint "minimal_pair_id", null: false
    t.boolean "correct"
    t.integer "difficulty_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["minimal_pair_id"], name: "index_practice_session_minimal_pairs_on_minimal_pair_id"
    t.index ["practice_session_id"], name: "index_practice_session_minimal_pairs_on_practice_session_id"
  end

  create_table "practice_sessions", force: :cascade do |t|
    t.string "type"
    t.datetime "date"
    t.text "notes"
    t.integer "score"
    t.integer "average_difficulty_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "student_id", null: false
    t.index ["student_id"], name: "index_practice_sessions_on_student_id"
  end

  create_table "target_phonemes", force: :cascade do |t|
    t.string "name"
    t.bigint "phonological_process_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["phonological_process_id"], name: "index_target_phonemes_on_phonological_process_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "type"
    t.string "full_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "speech_therapist_id"
    t.datetime "date_of_birth"
    t.bigint "avatar_id"
    t.index ["avatar_id"], name: "index_users_on_avatar_id"
    t.index ["speech_therapist_id"], name: "index_users_on_speech_therapist_id"
  end

  add_foreign_key "minimal_pairs", "target_phonemes"
  add_foreign_key "practice_session_minimal_pairs", "minimal_pairs"
  add_foreign_key "practice_session_minimal_pairs", "practice_sessions"
  add_foreign_key "practice_sessions", "users", column: "student_id"
  add_foreign_key "target_phonemes", "phonological_processes"
  add_foreign_key "users", "avatars"
  add_foreign_key "users", "users", column: "speech_therapist_id"
end
