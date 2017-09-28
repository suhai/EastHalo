# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Schedule.destroy_all
Transcript.destroy_all
Friendship.destroy_all
User.destroy_all
User.create!([
	{
		fname: "Swy",
		lname: "Yehuza",
		username: "swy",
		password: "password",
		type: "Student",
		email: "swy@tikldmonkey.com",
		phone_number: 3403445325,
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: "TRUE"
	},

	{
		fname: "John",
		lname: "Bull",
		username: "johnBull",
		password: "password",
		type: "Student",
		email: "johnbull@gmail.com",
		phone_number: 1234567890,
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: "TRUE"
	},

	{
		fname: "Rich",
		lname: "Berkey",
		username: "rich",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: "TRUE"
	},

	{
		fname: "Emily",
		lname: "Berkey",
		username: "emily",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: "TRUE"
	},

	{
		fname: "Dave",
		lname: "Sgro",
		username: "dave",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Celestine",
		lname: "McIntosh",
		username: "celstine",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Jacques",
		lname: "Guinn",
		username: "jacques",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Nadine",
		lname: "Sondag",
		username: "anitra",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Aaron",
		lname: "Tohuvavohu",
		username: "aaron",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: "TRUE"
	},

	{
		fname: "Vennie",
		lname: "Ristau",
		username: "vennie",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Kris",
		lname: "Droste",
		username: "kris",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: "TRUE"
	},

	{
		fname: "Serina",
		lname: "Oriley",
		username: "serina",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Wilson",
		lname: "Brosnan",
		username: "wilson",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Genia",
		lname: "Dundas",
		username: "genia",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Carlo",
		lname: "Stufflebean",
		username: "carlo",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Larue",
		lname: "Teasdale",
		username: "larue",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Enrique",
		lname: "Addie",
		username: "enrique",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Temika",
		lname: "Mendelson",
		username: "temika",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Darrel",
		lname: "Artwood",
		username: "darrel",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Josphine",
		lname: "Ringer",
		username: "josphine",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Theron",
		lname: "Prevo",
		username: "theron",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Angelia",
		lname: "Moreno",
		username: "angelia",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749804/images/croupier.svg",
		is_admin: ""
	},

	{
		fname: "Leon",
		lname: "Jacinto",
		username: "leon",
		password: "password",
		type: "Student",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749808/images/showman.svg",
		is_admin: ""
	},

	{
		fname: "Shameka",
		lname: "Cueto",
		username: "shameka",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749809/images/stewardess.svg",
		is_admin: ""
	},

	{
		fname: "Prada",
		lname: "Banderas",
		username: "prada",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/professor.svg",
		is_admin: ""
	},

	{
		fname: "Carleen",
		lname: "Baylon",
		username: "carleen",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749809/images/stewardess.svg",
		is_admin: ""
	},

	{
		fname: "Michael",
		lname: "Salvado",
		username: "michael",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/professor.svg",
		is_admin: ""
	},

	{
		fname: "Rosalina",
		lname: "Capra",
		username: "rosalina",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749809/images/stewardess.svg",
		is_admin: ""
	},

	{
		fname: "Kunta",
		lname: "Ogunonwanbike",
		username: "kunta",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/professor.svg",
		is_admin: ""
	},

	{
		fname: "Delphia",
		lname: "Chaudhry",
		username: "delphia",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749809/images/stewardess.svg",
		is_admin: ""
	},

	{
		fname: "Arthur",
		lname: "Glasfeld",
		username: "arthur",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/professor.svg",
		is_admin: ""
	},

	{
		fname: "Elicia",
		lname: "Devaughn",
		username: "elicia",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "female",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749809/images/stewardess.svg",
		is_admin: ""
	},

	{
		fname: "Dan",
		lname: "Gerrity",
		username: "dan",
		password: "password",
		type: "Professor",
		email: "",
		phone_number: "",
		gender: "male",
		profile_image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/professor.svg",
		is_admin: ""
	}
])
p "Created #{User.count} users"
p "Created #{Schedule.count} schedules"
p "Created #{Transcript.count} transcripts"



Book.destroy_all
Book.create!([
	{
		title: "Harry Potter and the Philosopher's Stone",
		author: "J. K. Rowling",
		publisher: "",
		description: "",
		price: 10,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book29_dtb2j0.jpg"
	},

	{
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		publisher: "",
		description: "",
		price: 15,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book28_eucgen.jpg"
	},

	{
		title: "1984",
		author: "George Orwell",
		publisher: "",
		description: "",
		price: 12,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book24_bwbazq.jpg"
	},

	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		publisher: "",
		description: "",
		price: 11,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book27_wy3piz.jpg"
	},

	{
		title: "The Da Vinci Code",
		author: "Dan Brown",
		publisher: "",
		description: "",
		price: 23,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book26_ovinbf.jpg"
	},

	{
		title: "To kill a Mockingbird",
		author: "Harper Lee",
		publisher: "",
		description: "",
		price: 21,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book25_lisfki.jpg"
	},

	{
		title: "The Catcher in the Rye",
		author: "J. D. Salinger",
		publisher: "",
		description: "",
		price: 50,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book23_qmkjg0.png"
	},

	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		publisher: "",
		description: "",
		price: 13,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book21_q5mrn4.jpg"
	},

	{
		title: "Twilight",
		author: "Stephenie Meyer",
		publisher: "",
		description: "",
		price: 7,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book22_aehgqp.jpg"
	},

	{
		title: "The Hunger Games",
		author: "Suzanne Collins",
		publisher: "",
		description: "",
		price: 15,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book20_u76bp1.jpg"
	},

	{
		title: "Jane Eyre",
		author: " Charlotte Bronte",
		publisher: "",
		description: "",
		price: 25,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book15_aahbq3.jpg"
	},

	{
		title: "Animal Farm",
		author: "George Orwell",
		publisher: "",
		description: "",
		price: 5,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book18_gqipiu.jpg"
	},

	{
		title: "Farenheit 451",
		author: "Ray Bradbury",
		publisher: "",
		description: "",
		price: 2.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book19_merxlq.jpg"
	},

	{
		title: "Life of Pi",
		author: "Yarn Martel",
		publisher: "",
		description: "",
		price: 36,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book17_oy4gbc.jpg"
	},

	{
		title: "The Odyssey",
		author: "Homer",
		publisher: "",
		description: "",
		price: 14,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book14_kudplj.jpg"
	},

	{
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		publisher: "",
		description: "",
		price: 12,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book13_p3g3s8.jpg"
	},

	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		publisher: "",
		description: "",
		price: 52,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book16_azl8go.jpg"
	},

	{
		title: "Breaking Dawn",
		author: "Stephanie Meyer",
		publisher: "",
		description: "",
		price: 20,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book12_itfeui.jpg"
	},

	{
		title: "Memoirs of Geisha",
		author: "Arthur Golden",
		publisher: "",
		description: "",
		price: 19.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book11_zernu6.jpg"
	},

	{
		title: "The Book Thief",
		author: "Markus Zusak",
		publisher: "",
		description: "",
		price: 8.50,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book2_szc8nq.jpg"
	},

	{
		title: "Adventures of Huckleberry Finn",
		author: "Mark Twain",
		publisher: "",
		description: "",
		price: 7.45,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book10_idsxb0.jpg"
	},

	{
		title: "Oliver Twist",
		author: "Charles Dickens",
		publisher: "",
		description: "",
		price: 6,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book9_ucfk1p.jpg"
	},

	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		publisher: "",
		description: "",
		price: 12,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book7_pclwvi.jpg"
	},

	{
		title: "American Gods",
		author: "Neil Gaiman",
		publisher: "",
		description: "",
		price: 35,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book8_sy644z.jpg"
	},

	{
		title: "The Alchemist",
		author: "Paolo Coelho",
		publisher: "",
		description: "",
		price: 18,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book4_dnlonj.jpg"
	},

	{
		title: "The Golden Compass",
		author: "Philip Pullman",
		publisher: "",
		description: "",
		price: 7,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book6_qcc26a.jpg"
	},

	{
		title: "Great Expectations",
		author: "Charles Dickens",
		publisher: "",
		description: "",
		price: 10,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book1_utcaf1.png"
	},

	{
		title: "The Iliad",
		author: "Homer",
		publisher: "",
		description: "",
		price: 20,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book5_ffvl0j.png"
	},

	{
		title: "A Wrinkle in Time",
		author: "Madeleine L'Engle",
		publisher: "",
		description: "",
		price: 17,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book2_hkiosh.jpg"
	},

	{
		title: "A Tale of Two Cities",
		author: "Charles Dickens",
		publisher: "",
		description: "",
		price: 19,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309767/book30_xb4vmr.jpg"
	}
])
p "Created #{Book.count} books"



Meal.destroy_all
Meal.create!([
	{
		name: "Seafood Paella",
		ingredients: "",
		price: 12.98,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food21_bcx29e.jpg"
	},

	{
		name: "Som tam",
		ingredients: "Chicken Friedrice",
		price: 32,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309824/food30_isedgz.jpg"
	},

	{
		name: "Poutine",
		ingredients: "",
		price: 43,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food29_k1pnga.jpg"
	},

	{
		name: "Tacos",
		ingredients: "",
		price: 13,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food28_f2rauh.jpg"
	},

	{
		name: "Buttered toast with Marmite",
		ingredients: "",
		price: 20,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food27_fdamjt.jpg"
	},

	{
		name: "Stinky tofu",
		ingredients: "",
		price: 5,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food26_uxxjko.jpg"
	},

	{
		name: "Marzipan",
		ingredients: "",
		price: 26,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food24_vwvro2.jpg"
	},

	{
		name: "French toast",
		ingredients: "",
		price: 18,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food25_erxx85.jpg"
	},

	{
		name: "Chicken parm",
		ingredients: "",
		price: 8.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food23_bpe0tw.jpg"
	},

	{
		name: "Chili crab",
		ingredients: "",
		price: 4,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food22_fzvb41.jpg"
	},

	{
		name: "Fish 'n' chips",
		ingredients: "",
		price: 6.75,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food20_xicrrq.jpg"
	},

	{
		name: "Ankimo",
		ingredients: "",
		price: 98,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food19_yoqz4l.jpg"
	},

	{
		name: "Parma ham",
		ingredients: "",
		price: 13,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food17_cpcgg3.jpg"
	},

	{
		name: "Goi cuon (summer roll)",
		ingredients: "",
		price: 24,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food18_zw1bcg.jpg"
	},

	{
		name: "Ohmi-gyu beef steak",
		ingredients: "",
		price: 12,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food16_mkm6c7.jpg"
	},

	{
		name: "Hamburger",
		ingredients: "",
		price: 19,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food13_oaczga.jpg"
	},

	{
		name: "Lechón",
		ingredients: "",
		price: 23,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food15_q3qnu6.jpg"
	},

	{
		name: "Fajitas",
		ingredients: "",
		price: 7.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food12_g4cugn.jpg"
	},

	{
		name: "Butter garlic crab",
		ingredients: "",
		price: 6,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food10_qefhal.jpg"
	},

	{
		name: "Lasagna",
		ingredients: "",
		price: 54,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food11_pktlu5.jpg"
	},

	{
		name: "Arepas",
		ingredients: "",
		price: 32,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food8_umy8ef.jpg"
	},

	{
		name: "Bunny chow",
		ingredients: "",
		price: 18,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food9_p3xuw8.jpg"
	},
	{
		name: "Shish kebab",
		ingredients: "",
		price: 5,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food7_ftzdfn.jpg"
	},

	{
		name: "Pastel de nata",
		ingredients: "",
		price: 85,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food6_pkcq5j.jpg"
	},

	{
		name: "Pierogi",
		ingredients: "",
		price: 10,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food4_szwnqh.jpg"
	},

	{
		name: "Corn on the cob",
		ingredients: "",
		price: 32,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food5_lpuomr.jpg"
	},

	{
		name: "Piri-piri chicken",
		ingredients: "",
		price: 11.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food2_u4kjcr.jpg"
	},

	{
		name: "Rendang",
		ingredients: "",
		price: 6,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food3_ikc634.jpg"
	},

	{
		name: "Tom yum goong",
		ingredients: "",
		price: 8,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309821/food1_v8l5h2.jpg"
	},

	{
		name: "Penang assam laksa",
		ingredients: "",
		price: 16,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506310612/food14_oeahvi.jpg"
	}
])
p "Created #{Meal.count} meals"



Department.destroy_all
Department.create!([
	{
		name: "Art"
	},

	{
		name: "Biology"
	},

	{
		name: "Chemistry"
	},

	{
		name: "Dance"
	},

	{
		name: "Economics"
	},

	{
		name: "Physics"
	},

	{
		name: "Mathematics"
	},

	{
		name: "History"
	},

	{
		name: "Philosophy"
	},

	{
		name: "Political Science"
	},

	{
		name: "Theatre"
	},

	{
		name: "Sociology"
	},

	{
		name: "Religion"
	},

	{
		name: "Linguistics"
	}
])
p "Created #{Department.count} departments"




GradeLetter.destroy_all
GradeLetter.create!([
	{
		letter: "A",
		weight: 4
	},

	{
		letter: "B",
		weight: 3
	},

	{
		letter: "C",
		weight: 2
	},

	{
		letter: "D",
		weight: 1
	},

	{
		letter: "E",
		weight: 0.5
	},

	{
		letter: "F",
		weight: 0
	},

	{
		letter: "IC",
		weight: 0
	},

	{
		letter: "X",
		weight: 0
	},

	{
		letter: "W",
		weight: 0
	}
])
p "Created #{GradeLetter.count} grade_letters"



# User.destroy_all
# User.create!([
 
# ])
# p "Created #{User.count} users"
