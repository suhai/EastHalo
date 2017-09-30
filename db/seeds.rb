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
		is_admin: ""
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
		username: "celestine",
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
		fname: "Josephine",
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
		price: 10.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book29_dtb2j0.jpg"
	},

	{
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		publisher: "",
		description: "",
		price: 15.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book28_eucgen.jpg"
	},

	{
		title: "1984",
		author: "George Orwell",
		publisher: "",
		description: "",
		price: 12.98,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book24_bwbazq.jpg"
	},

	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		publisher: "",
		description: "",
		price: 11.95,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book27_wy3piz.jpg"
	},

	{
		title: "The Da Vinci Code",
		author: "Dan Brown",
		publisher: "",
		description: "",
		price: 23.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309792/book26_ovinbf.jpg"
	},

	{
		title: "To kill a Mockingbird",
		author: "Harper Lee",
		publisher: "",
		description: "",
		price: 21.45,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book25_lisfki.jpg"
	},

	{
		title: "The Catcher in the Rye",
		author: "J. D. Salinger",
		publisher: "",
		description: "",
		price: 50.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book23_qmkjg0.png"
	},

	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		publisher: "",
		description: "",
		price: 13.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book21_q5mrn4.jpg"
	},

	{
		title: "Twilight",
		author: "Stephenie Meyer",
		publisher: "",
		description: "",
		price: 7.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book22_aehgqp.jpg"
	},

	{
		title: "The Hunger Games",
		author: "Suzanne Collins",
		publisher: "",
		description: "",
		price: 15.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book20_u76bp1.jpg"
	},

	{
		title: "Jane Eyre",
		author: " Charlotte Bronte",
		publisher: "",
		description: "",
		price: 25.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book15_aahbq3.jpg"
	},

	{
		title: "Animal Farm",
		author: "George Orwell",
		publisher: "",
		description: "",
		price: 4.99,
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
		price: 36.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309791/book17_oy4gbc.jpg"
	},

	{
		title: "The Odyssey",
		author: "Homer",
		publisher: "",
		description: "",
		price: 14.95,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book14_kudplj.jpg"
	},

	{
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		publisher: "",
		description: "",
		price: 12.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book13_p3g3s8.jpg"
	},

	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		publisher: "",
		description: "",
		price: 52.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309790/book16_azl8go.jpg"
	},

	{
		title: "Breaking Dawn",
		author: "Stephanie Meyer",
		publisher: "",
		description: "",
		price: 20.05,
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
		price: 8.55,
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
		price: 6.55,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book9_ucfk1p.jpg"
	},

	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		publisher: "",
		description: "",
		price: 12.98,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book7_pclwvi.jpg"
	},

	{
		title: "American Gods",
		author: "Neil Gaiman",
		publisher: "",
		description: "",
		price: 35.55,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book8_sy644z.jpg"
	},

	{
		title: "The Alchemist",
		author: "Paolo Coelho",
		publisher: "",
		description: "",
		price: 18.99,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book4_dnlonj.jpg"
	},

	{
		title: "The Golden Compass",
		author: "Philip Pullman",
		publisher: "",
		description: "",
		price: 7.49,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book6_qcc26a.jpg"
	},

	{
		title: "Great Expectations",
		author: "Charles Dickens",
		publisher: "",
		description: "",
		price: 10.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book1_utcaf1.png"
	},

	{
		title: "The Iliad",
		author: "Homer",
		publisher: "",
		description: "",
		price: 20.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book5_ffvl0j.png"
	},

	{
		title: "A Wrinkle in Time",
		author: "Madeleine L'Engle",
		publisher: "",
		description: "",
		price: 17.05,
		category: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309783/book2_hkiosh.jpg"
	},

	{
		title: "A Tale of Two Cities",
		author: "Charles Dickens",
		publisher: "",
		description: "",
		price: 19.98,
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
		price: 32.45,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309824/food30_isedgz.jpg"
	},

	{
		name: "Poutine",
		ingredients: "",
		price: 43.95,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food29_k1pnga.jpg"
	},

	{
		name: "Tacos",
		ingredients: "",
		price: 13.55,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food28_f2rauh.jpg"
	},

	{
		name: "Buttered toast with Marmite",
		ingredients: "",
		price: 20.05,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food27_fdamjt.jpg"
	},

	{
		name: "Stinky tofu",
		ingredients: "",
		price: 5.95,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food26_uxxjko.jpg"
	},

	{
		name: "Marzipan",
		ingredients: "",
		price: 26.05,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309823/food24_vwvro2.jpg"
	},

	{
		name: "French toast",
		ingredients: "",
		price: 18.05,
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
		price: 4.45,
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
		price: 98.98,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food19_yoqz4l.jpg"
	},

	{
		name: "Parma ham",
		ingredients: "",
		price: 13.12,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food17_cpcgg3.jpg"
	},

	{
		name: "Goi cuon (summer roll)",
		ingredients: "",
		price: 24.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food18_zw1bcg.jpg"
	},

	{
		name: "Ohmi-gyu beef steak",
		ingredients: "",
		price: 12.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food16_mkm6c7.jpg"
	},

	{
		name: "Hamburger",
		ingredients: "",
		price: 19.98,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food13_oaczga.jpg"
	},

	{
		name: "Lechón",
		ingredients: "",
		price: 23.05,
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
		price: 6.50,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food10_qefhal.jpg"
	},

	{
		name: "Lasagna",
		ingredients: "",
		price: 54.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food11_pktlu5.jpg"
	},

	{
		name: "Arepas",
		ingredients: "",
		price: 32.05,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food8_umy8ef.jpg"
	},

	{
		name: "Bunny chow",
		ingredients: "",
		price: 18.95,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food9_p3xuw8.jpg"
	},
	{
		name: "Shish kebab",
		ingredients: "",
		price: 5.55,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food7_ftzdfn.jpg"
	},

	{
		name: "Pastel de nata",
		ingredients: "",
		price: 85.55,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food6_pkcq5j.jpg"
	},

	{
		name: "Pierogi",
		ingredients: "",
		price: 10.05,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food4_szwnqh.jpg"
	},

	{
		name: "Corn on the cob",
		ingredients: "",
		price: 32.05,
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
		price: 6.05,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309822/food3_ikc634.jpg"
	},

	{
		name: "Tom yum goong",
		ingredients: "",
		price: 8.99,
		image_url: "https://res.cloudinary.com/swy/image/upload/v1506309821/food1_v8l5h2.jpg"
	},

	{
		name: "Penang assam laksa",
		ingredients: "",
		price: 16.05,
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
		weight: 4.0
	},

	{
		letter: "B",
		weight: 3.0
	},

	{
		letter: "C",
		weight: 2.0
	},

	{
		letter: "D",
		weight: 1.0
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



Course.destroy_all
Course.create!([
	{
		title: "Intro To Analysis",
		course_code: "MATH 120",
		course_credit: 1.5,
		professor_id: "#{Professor.all[0].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[6].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Economics of Basketball",
		course_code: "ECON 331",
		course_credit: 1.0,
		professor_id: "#{Professor.all[1].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[4].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Analytical Chemistry",
		course_code: "CHEM 333",
		course_credit: 1.0,
		professor_id: "#{Professor.all[7].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[2].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Mamalian Physiology",
		course_code: "BIOL 110",
		course_credit: 1.5,
		professor_id: "#{Professor.all[3].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[1].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Latin Dance",
		course_code: "DANC 600",
		course_credit: 1.0,
		professor_id: "#{Professor.all[4].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[3].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "String Theory",
		course_code: "PHYS 220",
		course_credit: 1.0,
		professor_id: "#{Professor.all[5].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[5].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "World History",
		course_code: "HIST 999",
		course_credit: 2.0,
		professor_id: "#{Professor.all[6].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[7].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Philosophy of the Mind",
		course_code: "PHIL 414",
		course_credit: 1.0,
		professor_id: "#{Professor.all[7].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[8].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Diplomacy and War",
		course_code: "POLS 120",
		course_credit: 1.0,
		professor_id: "#{Professor.all[8].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[9].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "The Marriage of Anansewaa",
		course_code: "THTR 401",
		course_credit: 1.5,
		professor_id: "#{Professor.all[9].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[10].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Eastern Civilization",
		course_code: "SOCL 111",
		course_credit: 1.0,
		professor_id: "#{Professor.all[2].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[11].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Christianity and Pacifism",
		course_code: "RELG 216",
		course_credit: 1.0,
		professor_id: "#{Professor.all[7].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[12].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Early Chilhood Tongues",
		course_code: "LING 200",
		course_credit: 1.5,
		professor_id: "#{Professor.all[9].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[13].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Mathematical Abyss",
		course_code: "MATH 202",
		course_credit: 0.5,
		professor_id: "#{Professor.all[3].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[6].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Fluid Mechanics",
		course_code: "PHYS 300",
		course_credit: 1.0,
		professor_id: "#{Professor.all[8].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[5].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Quantum Mechanics",
		course_code: "CHEM 322",
		course_credit: 0.5,
		professor_id: "#{Professor.all[6].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[2].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Game Theory",
		course_code: "ECON 500",
		course_credit: 2.0,
		professor_id: "#{Professor.all[0].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[4].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Zoology",
		course_code: "BIOL 122",
		course_credit: 1.0,
		professor_id: "#{Professor.all[5].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[1].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Electrodynamics",
		course_code: "PHYS 340",
		course_credit: 1.5,
		professor_id: "#{Professor.all[2].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[5].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "The Second World War",
		course_code: "HIST 435",
		course_credit: 1.0,
		professor_id: "#{Professor.all[4].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[7].id}",
		start_time: "",
		end_time: ""
	},

	{
		title: "Photography",
		course_code: "ART 110",
		course_credit: 1.0,
		professor_id: "#{Professor.all[7].id}",
		course_description: "",
		course_cap: "",
		department_id: "#{Department.all[0].id}",
		start_time: "",
		end_time: ""
	}	
])
p "Created #{Course.count} courses"


Post.destroy_all
Post.create!([
	{
		title: "Post One",
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		user_id: "#{User.all[0].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749805/images/friendship.svg"
	},

	{
		title: "Post Two",
		body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		user_id: "#{User.all[1].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749887/images/003-desk-elements-escene-vector-flat-objects-design-studio.jpg"
	},

	{
		title: "Post Three",
		body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..",
		user_id: "#{User.all[2].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749887/images/002_texture-pattern-rock-granite-solid-background.jpg"
	},

	{
		title: "Post Four",
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		user_id: "#{User.all[7].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499750303/images/pexels-photo-23971.jpg"
	},

	{
		title: "Post Five",
		body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		user_id: "#{User.all[17].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749859/images/violin.svg"
	},

	{
		title: "Post Six",
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		user_id: "#{User.all[12].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749842/images/light-bulb.svg"
	},

	{
		title: "Post Seven",
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		user_id: "#{User.all[1].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499750322/images/pexels-photo-65121.jpg"
	},

	{
		title: "Post Eight",
		body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		user_id: "#{User.all[23].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749846/images/open-book.svg"
	},

	{
		title: "Post Nine",
		body: "Mauris pulvinar id nisl vitae mattis. Phasellus convallis leo at orci porttitor aliquet. Vivamus viverra sapien vel finibus ultrices. Morbi vel rhoncus diam, sed ornare nisl. Nunc congue urna nec scelerisque molestie. Duis maximus, diam nec tempus lobortis, nulla odio tristique magna, et feugiat dui metus commodo ex. Sed consectetur quam eget libero vehicula dapibus. Phasellus turpis erat, porttitor sit amet aliquet quis, blandit eu sapien. Proin vulputate, ligula vitae aliquam fringilla, sapien sapien mollis erat, nec pulvinar dui sem quis diam. Proin vel feugiat nisi. Sed at arcu bibendum, volutpat mi aliquam, pulvinar elit.Vestibulum tempus auctor orci, pulvinar vehicula diam bibendum ut. Duis molestie eros et sem rhoncus hendrerit.Proin fermentum, arcu non varius mattis, ligula tortor maximus leo, non hendrerit lectus magna in nunc.Vestibulum eu tortor molestie, consequat sem ac, faucibus ipsum.Cras porttitor quam at augue posuere fringilla.Aliquam semper ipsum eu dignissim laoreet. Sed eu diam consequat, dapibus magna fringilla, pulvinar felis.Cras quam enim, varius sit amet enim ut, interdum ullamcorper magna. Phasellus accumsan quam vel nibh interdum varius.Duis ornare odio sed magna semper, eget lobortis sapien sollicitudin.",
		user_id: "#{User.all[10].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499750292/images/mavis-stuff-1580.jpg"
	},

	{
		title: "Post Ten",
		body: "Vestibulum auctor sed lectus id tincidunt. Etiam vehicula augue in ipsum aliquet, eget cursus tellus blandit. Morbi tristique aliquam leo in mattis. Nulla cursus ante nec nulla mattis, sit amet tincidunt neque varius. Morbi sed neque nulla. Aenean porta urna ipsum, non euismod dolor rutrum et. Aliquam erat volutpat. Ut non ligula ac lorem gravida tempor id eu ante.Ut sollicitudin posuere sagittis. Etiam rutrum dolor ac purus imperdiet convallis.Donec et dolor ullamcorper, faucibus elit nec, tempus lacus.Vivamus placerat ultricies vehicula. Integer ut lectus vestibulum, volutpat sapien ac, imperdiet magna.Duis pulvinar vulputate magna non maximus. Morbi non ante eleifend, fringilla mauris quis, imperdiet tellus.Phasellus auctor augue ut odio pretium, eget tempor est dignissim.Integer convallis lacus ac cursus tincidunt. Aliquam a lectus scelerisque, porttitor velit sit amet, congue ante.Vivamus auctor metus nisi, non condimentum quam viverra eu. Aliquam ac ultricies leo, non vestibulum sem. Morbi molestie, sapien mollis laoreet auctor, arcu neque aliquam felis, non scelerisque neque eros quis est.",
		user_id: "#{User.all[11].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749848/images/palette.svg"
	},

	{
		title: "Post Eleven",
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		user_id: "#{User.all[12].id}",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749852/images/school-bus.svg"
	}
])
p "Created #{Post.count} posts"


News.destroy_all
News.create!([
	{
		headline: "The Washington Post",
		url: "https://www.washingtonpost.com/",
		date: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749888/images/35842cb2-1841-49fb-9eea-8777a5ad549c.jpg"
	},

	{
		headline: "BBC World News",
		url: "https://www.bbc.com/news/world",
		date: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749839/images/earth-globe.svg"
	},

	{
		headline: "The Boston Globe",
		url: "https://www.bostonglobe.com/",
		date: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749851/images/physics.svg"
	},

	{
		headline: "Seattle Times",
		url: "https://www.seattletimes.com/",
		date: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749843/images/microscope.svg"
	},

	{
		headline: "Reuters News",
		url: "https://www.reuters.com/",
		date: "",
		image_url: "https://res.cloudinary.com/swy/image/upload/v1499749831/images/blackboard-1.svg"
	}
])
p "Created #{News.count} news articles"


# User.destroy_all
# User.create!([
 
# ])
# p "Created #{User.count} users"
