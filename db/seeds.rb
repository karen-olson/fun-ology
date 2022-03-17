# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data"

ms_olson = SpeechTherapist.create(
    full_name: "Karen Olson",
    email: "karmarie@gmail.com",
    username: "karen_olson",
    password: "password",
    password_confirmation: "password"
)

ms_omalley = SpeechTherapist.create(
    full_name: "Sarah O'Malley",
    email: "sarah@gmail.com",
    username: "sarah_omalley",
    password: "password",
    password_confirmation: "password"
)

steve = Student.create(
    full_name: "Steve Jobs",
    date_of_birth: DateTime.strptime('03.17.2009', '%m.%d.%Y'),
    grade: 8,
    email: "steve@gmail.com",
    username: "steve_jobs",
    password: "password",
    password_confirmation: "password",
    speech_therapist_id: ms_olson.id
)

elon = Student.create(
    full_name: "Elon Musk",
    date_of_birth: DateTime.strptime('11.18.2016', '%m.%d.%Y'),
    grade: 1,
    email: "elon@gmail.com",
    username: "elon_musk",
    password: "password",
    password_confirmation: "password",
    speech_therapist_id: ms_omalley.id
)

puts "Done seeding"