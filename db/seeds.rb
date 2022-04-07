# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding data... 🌱"

Avatar.destroy_all
SpeechTherapist.destroy_all
Student.destroy_all
PhonologicalProcess.destroy_all
TargetPhoneme.destroy_all
MinimalPair.destroy_all
PracticeSession.destroy_all
PracticeSessionMinimalPair.destroy_all

cat_avatar = Avatar.create(name: "cat", image_url: "https://i.imgur.com/wF0EFCG.png")
dragon_avatar = Avatar.create(name: "dragon", image_url: "https://i.imgur.com/LAIaidW.png")
owl_avatar = Avatar.create(name: "owl", image_url: "https://i.imgur.com/pWM2Hsz.png")
unicorn_avatar = Avatar.create(name: "unicorn", image_url: "https://i.imgur.com/DrJvVkA.png")
dog_avatar = Avatar.create(name: "dog", image_url: "https://i.imgur.com/B2TC4EB.png")
rabbit_avatar = Avatar.create(name: "rabbit", image_url: "https://i.imgur.com/wLwh30t.png")
monster_avatar = Avatar.create(name: "monster", image_url: "https://i.imgur.com/Wejd4io.png")

ms_olson = SpeechTherapist.create(
    full_name: "Karen Olson",
    email: "karmarie@gmail.com",
    username: "karen_olson",
    password: "password",
    password_confirmation: "password",
    avatar_id: dog_avatar.id
)

ms_omalley = SpeechTherapist.create(
    full_name: "Sarah O'Malley",
    email: "sarah@gmail.com",
    username: "sarah_omalley",
    password: "password",
    password_confirmation: "password",
    avatar_id: cat_avatar.id
)

steve = Student.create(
    full_name: "Steve Jobs",
    date_of_birth: DateTime.strptime('03.17.2009', '%m.%d.%Y'),
    email: "steve@gmail.com",
    username: "steve_jobs",
    password: "password",
    password_confirmation: "password",
    speech_therapist_id: ms_olson.id,
    avatar_id: dragon_avatar.id
)

elon = Student.create(
    full_name: "Elon Musk",
    date_of_birth: DateTime.strptime('11.18.2016', '%m.%d.%Y'),
    email: "elon@gmail.com",
    username: "elon_musk",
    password: "password",
    password_confirmation: "password",
    speech_therapist_id: ms_omalley.id,
    avatar_id: monster_avatar.id
)

fcd = PhonologicalProcess.create(name: "Final Consonant Deletion")
s_cluster_reduction = PhonologicalProcess.create(name: "S Cluster Reduction")
fronting = PhonologicalProcess.create(name: "Fronting")

fcd_p = fcd.target_phonemes.create(name: "p")
fcd_t = fcd.target_phonemes.create(name: "t")
fcd_k = fcd.target_phonemes.create(name: "k")

s_cluster_reduction_sp = s_cluster_reduction.target_phonemes.create(name: "sp")
s_cluster_reduction_sn = s_cluster_reduction.target_phonemes.create(name: "sn")
s_cluster_reduction_st = s_cluster_reduction.target_phonemes.create(name: "st")
s_cluster_reduction_sk = s_cluster_reduction.target_phonemes.create(name: "sk")

fronting_k = fronting.target_phonemes.create(name: "k")
fronting_g = fronting.target_phonemes.create(name: "g")
fronting_sh = fronting.target_phonemes.create(name: "sh")

fcd_k_1 = fcd_k.minimal_pairs.create(first_word: "lay", first_image_url: "https://i.imgur.com/KrjKesu.png", second_word: "lake", second_image_url: "https://i.imgur.com/MY7vG8A.png")
fcd_k_2 = fcd_k.minimal_pairs.create(first_word: "my", first_image_url: "https://i.imgur.com/SyJ1V81.png", second_word: "Mike", second_image_url: "https://i.imgur.com/f6UROzA.png")
fcd_k_3 = fcd_k.minimal_pairs.create(first_word: "pea", first_image_url: "https://i.imgur.com/T8P450y.png", second_word: "peek", second_image_url: "https://i.imgur.com/AB7wbmm.png")

fcd_p_1 = fcd_p.minimal_pairs.create(
    first_word: "she", 
    second_word: "sheep", 
    first_image_url: "https://i.imgur.com/7BviUVL.png", 
    second_image_url: "https://i.imgur.com/2ImDmsk.png"
)
fcd_p_2 = fcd_p.minimal_pairs.create(
    first_word: "sew", 
    second_word: "soap", 
    first_image_url: "https://i.imgur.com/xKhNJSE.png", 
    second_image_url: "https://i.imgur.com/HPJR34o.png"
)
fcd_p_3 = fcd_p.minimal_pairs.create(
    first_word: "k", 
    second_word: "cape", 
    first_image_url: "https://i.imgur.com/xE8tsZ0.png", 
    second_image_url: "https://i.imgur.com/v1uVlnD.png"
)

fcd_t_1 = fcd_t.minimal_pairs.create(
    first_word: "see", 
    second_word: "seat", 
    first_image_url: "https://i.imgur.com/xmbSVL8.png", 
    second_image_url: "https://i.imgur.com/HflS66q.png"
)
fcd_t_2 = fcd_t.minimal_pairs.create(
    first_word: "go", 
    second_word: "goat", 
    first_image_url: "https://i.imgur.com/e4Ilxy7.png", 
    second_image_url: "https://i.imgur.com/wDHk6EC.png"
)
fcd_t_3 = fcd_t.minimal_pairs.create(
    first_word: "bye", 
    second_word: "bite", 
    first_image_url: "https://i.imgur.com/xfa6RA2.png", 
    second_image_url: "https://i.imgur.com/H13G4jS.png"
)

s_cluster_reduction_sk_1 = s_cluster_reduction_sk.minimal_pairs.create(
    first_word: "cool",
    second_word: "school",
    first_image_url: "https://i.imgur.com/tOaedRm.png",
    second_image_url: "https://i.imgur.com/jJxDosi.png"
)
s_cluster_reduction_sk_2 = s_cluster_reduction_sk.minimal_pairs.create(
    first_word: "Kate",
    second_word: "skate",
    first_image_url: "https://i.imgur.com/ZO8TqEL.png",
    second_image_url: "https://i.imgur.com/vxgXdfv.png"
)
s_cluster_reduction_sk_3 = s_cluster_reduction_sk.minimal_pairs.create(
    first_word: "key",
    second_word: "ski",
    first_image_url: "https://i.imgur.com/UylvBjf.png",
    second_image_url: "https://i.imgur.com/rlWjMkO.png"
)

s_cluster_reduction_st_1 = s_cluster_reduction_st.minimal_pairs.create(
    first_word: "top",
    second_word: "stop",
    first_image_url: "https://i.imgur.com/BHX4F54.png",
    second_image_url: "https://i.imgur.com/FEvyrdr.png"
)
s_cluster_reduction_st_2 = s_cluster_reduction_st.minimal_pairs.create(
    first_word: "tar",
    second_word: "star",
    first_image_url: "https://i.imgur.com/B6eNkKU.png",
    second_image_url: "https://i.imgur.com/pXBvQXJ.png"
)
s_cluster_reduction_st_3 = s_cluster_reduction_st.minimal_pairs.create(
    first_word: "treat",
    second_word: "street",
    first_image_url: "https://i.imgur.com/Cn8cgbm.png",
    second_image_url: "https://i.imgur.com/M0kenxa.png"
)

s_cluster_reduction_sn_1 = s_cluster_reduction_sn.minimal_pairs.create(
    first_word: "nail",
    second_word: "snail",
    second_image_url: "https://i.imgur.com/BoeKM9v.png",
    first_image_url: "https://i.imgur.com/3Hg8Eog.png"
)
s_cluster_reduction_sn_2 = s_cluster_reduction_sn.minimal_pairs.create(
    first_word: "no",
    second_word: "snow",
    first_image_url: "https://i.imgur.com/rhvYMD3.png",
    second_image_url: "https://i.imgur.com/pQbP8v9.png"
)
s_cluster_reduction_sn_3 = s_cluster_reduction_sn.minimal_pairs.create(
    first_word: "knees",
    second_word: "sneeze",
    first_image_url: "https://i.imgur.com/KU79fSV.png",
    second_image_url: "https://i.imgur.com/hrMzM3f.png"
)

s_cluster_reduction_sp_1 = s_cluster_reduction_sp.minimal_pairs.create(
    first_word: "pie",
    second_word: "spy",
    first_image_url: "https://i.imgur.com/pATnpXd.png",
    second_image_url: "https://i.imgur.com/Gy1dewO.png"
)
s_cluster_reduction_sp_2 = s_cluster_reduction_sp.minimal_pairs.create(
    first_word: "peach",
    second_word: "speech",
    first_image_url: "https://i.imgur.com/OBp7RFp.png",
    second_image_url: "https://i.imgur.com/ZCfTjBm.png"
)
s_cluster_reduction_sp_3 = s_cluster_reduction_sp.minimal_pairs.create(
    first_word: "pool",
    second_word: "spool",
    first_image_url: "https://i.imgur.com/6cTK5Xl.png",
    second_image_url: "https://i.imgur.com/Izt9Guv.png"
)

fronting_k_1 = fronting_k.minimal_pairs.create(
    first_word: "tape",
    second_word: "cape",
    first_image_url: "https://i.imgur.com/Hq8TSla.png",
    second_image_url: "https://i.imgur.com/nzHsmXL.png"
)
fronting_k_2 = fronting_k.minimal_pairs.create(
    first_word: "tool",
    second_word: "cool",
    first_image_url: "https://i.imgur.com/QJgxOeb.png",
    second_image_url: "https://i.imgur.com/j5Q4uuF.png"
)
fronting_k_3 = fronting_k.minimal_pairs.create(
    first_word: "tan",
    second_word: "can",
    first_image_url: "https://i.imgur.com/mrA8ha7.png",
    second_image_url: "https://i.imgur.com/aF2V4wL.png"
)

fronting_g_1 = fronting_g.minimal_pairs.create(
    first_word: "down",
    second_word: "gown",
    first_image_url: "https://i.imgur.com/GOUuooh.png",
    second_image_url: "https://i.imgur.com/6cRhyIy.png"
)
fronting_g_2 = fronting_g.minimal_pairs.create(
    first_word: "Dave",
    second_word: "gave",
    first_image_url: "https://i.imgur.com/Tj9JrNG.png",
    second_image_url: "https://i.imgur.com/wEhlAXJ.png"
)
fronting_g_3 = fronting_g.minimal_pairs.create(
    first_word: "dot",
    second_word: "got",
    first_image_url: "https://i.imgur.com/gKaYf1F.png",
    second_image_url: "https://i.imgur.com/fPK8gLl.png"
)

fronting_sh_1 = fronting_sh.minimal_pairs.create(
    first_word: "c",
    second_word: "she",
    first_image_url: "https://i.imgur.com/vhciU1o.png",
    second_image_url: "https://i.imgur.com/G6F6zv7.png"
)
fronting_sh_2 = fronting_sh.minimal_pairs.create(
    first_word: "seat",
    second_word: "sheet",
    first_image_url: "https://i.imgur.com/c54KVtx.png",
    second_image_url: "https://i.imgur.com/JknjDCs.png"
)
fronting_sh_3 = fronting_sh.minimal_pairs.create(
    first_word: "sock",
    second_word: "shock",
    first_image_url: "https://i.imgur.com/ot0UGDX.png",
    second_image_url: "https://i.imgur.com/iTpNxLx.png"
)

# therapy_session_1 = steve.therapy_sessions.create()

puts "🌻 Done seeding 🌻"