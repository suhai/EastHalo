# The EastHalo University

The Application can be found here: [EastHalo](https://easthalo.herokuapp.com/)

This is a single page web application modeled after a university website. It was built with a Rails backend with a PostgreS database and a React-Redux frontend. it took me three weeks from start to it's present state (as of September 18, 2017). It is made of two main layers; the Landing Page, and the LoggedHome Page. The Landing Page is pretty self explanatory and doesn't contain much beyond just signing users up and logging them in. The Logged Home Page on the other hand contains the main functionalities of the app. I go into the details below and in my screen cast of the features found on the landing page of the live app.


## Backend

The app is built on a Ruby on Rails backend supported by a PostgreSQL database. I abstracted the routes (except the root, which is the 'static_pages' in this app) from a traditonal Rails routes to React Router. Initially I planned to center the app around two user models; students and professors. However, as I start with my wireframe I realized that I should leave room for scalability in case i decide to extend the user classes beyond just students and professors. So I ended up with a User Model / Class from which all other user types can inherit from. As at the time of writing this README I had four kinds of users; students, professors, administrators, and ordinary users. 
A section of the Database is shown below:

																	DATABASE MODELS
#------------------------------------------------------------------------------		

                   List of relations
 Schema |           Name            |   Type   | Owner
--------+---------------------------+----------+-------
 public | ar_internal_metadata      | table    | suhai
 public | books                     | table    | suhai
 public | bookstore                	| table    | suhai
 public | cafetaria                 | table    | suhai
 public | comments                  | table    | suhai
	
	Several Models Omitted Here For Brevity

 public | schedules                 | table    | suhai
 public | transcripts               | table    | suhai
 public | users                     | table    | suhai
(26 rows)


### SAMPLE BACKEND OUTPUT FROM API CALLS
```js
POST REQUESTS
$.ajax({
	method: 'POST',
	url: 'api/users',
	data: {
		user: {
		username: 'Rich',
		password: 'xxxxxxxxxx'
		}
	},
})
<!-- The above will create a new user with username 'Rich' with his password -->

$.ajax({
	method: 'POST',
	url: 'api/friendships',
	data: {
		friendship: {
		user_id: 3,
		friend_id: 4
		}
	},
})
<!-- The above will create a friendship between users with ids 3 and 4. This is a mutual action -->

$.ajax({
	method: 'POST',
	url: 'api/course_enrollments',
	data: {
		course_enrollment: {
		course_id: 1,
		student_id: 3
		}
	},
})
<!-- The above will enroll the student with id 3 into the course with id 1 -->

GET REQUESTS
$.ajax({
  type: 'GET',
  url: 'api/professors'
})
<!-- The above will retrieve all users who are of type 'Professor' from the database -->

$.ajax({
  type: 'GET',
  url: 'api/users/3'
})
The above will retrieve the user with user_id 3 from the database

$.ajax({
	method: 'GET',
	url: 'api/cafetaria/meals'
})
<!-- The above will retrieve all the meals from the cafetaria in the database -->

PATCH REQUESTS
$.ajax({
	method: 'PATCH',
	url: 'api/student/7',
	data: {
		user: {
		fname: "Mary",
		}
	},
})
<!-- The above will update the fname of student with id 7 to 'Mary'  -->

DELETE REQUESTS
$.ajax({
  method: 'DELETE',
  url: 'api/users/8'
})
<!-- The above will delete user with user_id 8 from the database -->
```

#------------------------------------------------------------------------------
## SAMPLE DATA FROM THE COURSES TABLE
#------------------------------------------------------------------------------	

 id |   title   | course_credit | start_time | end_time | professor_id |
----+-----------+---------------+------------+----------+--------------
  1 | Art       |      1        |   09:00    |  11:00   |      17      |            
  2 | Biology   |      1        |   13:10    |  14:00   |      8       | 
  3 | Chemistry |      1        |   08:00    |  10:00   |      93      | 
	4 | Dance     |      1        |   09:00    |  10:00   |      21      |            
  5 | English   |      1        |   14:10    |  16:00   |      8       | 
  6 | French    |      1        |   19:00    |  22:00   |      35      | 




## Class Interactions

```ruby
# == Schema Information
class Student < User
	has_many :course_enrollments
	has_many :courses, through: :course_enrollments, dependent: :destroy
	has_many :departments, through: :courses, dependent: :destroy
	has_many :professors, through: :courses, dependent: :destroy
	has_one :transcript, dependent: :destroy
	has_many :grades, dependent: :destroy
	after_create :instantiate_student_transcript

	def instantiate_student_transcript
		Transcript.create(student_id: self.id)
	end
end


class Course < ApplicationRecord
	validates :professor_id, :presence => true
	validates :department_id, :presence => true
	validates :title, :presence => true
	after_initialize :set_defaults, unless: :persisted?
	belongs_to :professor, :class_name => :User, :foreign_key => "professor_id"
	has_many :grades
	belongs_to :department
	has_many :course_enrollments
  has_many :students, through: :course_enrollments, :class_name => :User,dependent: :destroy

	def set_defaults
		self.course_credit  ||= 1.0
		self.start_time  ||= 0900
		self.end_time  ||= 1000
	end	
end


class Transcript < ApplicationRecord
	validates :student_id, :presence => true, :uniqueness => true
	belongs_to :student, :class_name => :User, :foreign_key => "student_id"
end


class Friendship < ApplicationRecord
	validates :user_id, :presence => true, uniqueness: { scope: :friend_id }
	validate :no_self_friending
	after_create :reciprocate
  after_destroy :disreciprocate
  belongs_to :user
	belongs_to :friend, class_name: "User"
	
  def no_self_friending
    if self.friend_id == self.user_id
      errors.add(:friend, "Find Some Real Friends")
    end
  end

  def reciprocate
		self.class.create(reciprocal_friendship_data)
  end

  def disreciprocate
		Friendship.where(reciprocal_friendship_data).delete_all 
  end

  def reciprocal_friendship_data
    { friend_id: user_id, user_id: friend_id }
  end
end


class Meal < ApplicationRecord
	after_initialize :set_defaults, unless: :persisted?
	def set_defaults
    self.price  ||= 5
	end	
end

```

## Features

### User Authentication
  Sample information from the database is made publicly available to any visitor to read or watch, with more exclusive access reserved for users who sign in to the 'inner' zone. 
  Detailed information from the database on my Projects, Trivia, Games (not made by me but in the future I plan to include those that I perosnally build to the database), trending Tech News, and my imaginary Monkeys are available to a user after authentication. The user has access to their individualized profile page where they can customize the page with profile images, perosnal info, etc. However, a user will not be able to access other users' pages or information. For demonstrational purposes only, a user is granted Create, Read, Update, and Delete privileges for the Categories section of the database. Other privileged access to the database is restrictd to superUsers / site admins only.


### Content Management
  As the sole administrator, I am able to activate the editing privileges for my page via the backend to mutate the database from the frontend. In addition to the publicly available content of the site, I am able to add, edit, and delete users and content of my job applications which I am managing with the application.
  There are six models altogther; User, Trivia, Game, Project, JobApplication, and Category (with a has_many relationship with the Trivia model). Sample code is shown below.


### 
# SAMPLE FRONTEND CODE
```js
import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import GradeLetter from './GradeLetter';

class GradeLetters extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};
	
	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grade_letters/grade_letterform`;
	};

	componentDidMount() {
		this.props.fetchGradeLetters();
	};

  render() {
		let grade_letterList = values(this.props.grade_letters);
		let grade_letters = grade_letterList.map((grade_letter, idx) => (
			<GradeLetter key={idx} grade_letter={grade_letter} deleteGradeLetter={this.props.deleteGradeLetter} currentUser={this.props.currentUser}/>
		));

    return (
      <div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create GradeLetter</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">GradeLetter</th>
							<th scope="col">Edit</th>
							<th scope="col">Delte</th>
						</tr>
					</thead>

					<tbody>
						{grade_letters}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default GradeLetters;
```

### USER EDIT
```js
import React from 'react';
import { values, merge } from 'lodash';

class UserEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			fname: '',
			lname: '',
			password: '',
			email: '',
			bio: '',
			dob: '',
			type: '',
			gender: '',
			is_admin: '',
			profile_image_url: '',
			typeOption1: 'NULL',
			typeOption2: 'Student',
			typeOption3: 'Professor',
			genderOption1: 'Other',
			genderOption2: 'Male',
			genderOption3: 'Female',
			isAdminOption1: 'DEFAULT',
			isAdminOption2: 'TRUE',
			isAdminOption3: 'FALSE'
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editUser = this.editUser.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchUser(id);
		this.props.fetchUsers();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editUser();
		}
	};

	redirectAction() {
		window.location.hash = `admin/${this.props.currentUser.username}/users/${this.props.match.params.id}`;
	};

	editUser() {
		let data = {
			user: {
				username: this.state.username,
				fname: this.state.fname,
				lname: this.state.lname,
				password: this.state.password,
				email: this.state.email,
				dob: this.state.dob,
				bio: this.state.bio,
				type: this.state.type,
				gender: this.state.gender,
				is_admin: this.state.is_admin,
				profile_image_url: this.state.profile_image_url,
			}
		};
		this.setState({
			username: '',
			fname: '',
			lname: '',
			password: '',
			email: '',
			bio: '',
			dob: '',
			type: '',
			gender: '',
			is_admin: '',
			profile_image_url: ''
		});

		console.log('about to edit  ......')
		let id = this.props.match.params.id;
		this.props.editUser(data, id);
		console.log('finished editing ......')
		this.redirectAction();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.users).length > 0 ?
		this.setState({
			id: props.match.params.id,
			username: props.users[props.match.params.id].username,
			fname: props.users[props.match.params.id].fname,
			lname: props.users[props.match.params.id].lname,
			password: props.users[props.match.params.id].password,
			email: props.users[props.match.params.id].email,
			bio: props.users[props.match.params.id].bio,
			dob: props.users[props.match.params.id].dob,
			type: props.users[props.match.params.id].type,
			gender: props.users[props.match.params.id].gender,
			is_admin: props.users[props.match.params.id].is_admin,
			profile_image_url: props.users[props.match.params.id].profile_image_url
		}) :
		this.setState({
			username: '',
			fname: '',
			lname: '',
			password: '',
			email: '',
			bio: '',
			dob: '',
			type: '',
			gender: '',
			is_admin: 'DEFAULT',
			profile_image_url: ''
		});
	};


	render() {
		const {
			username,
			fname,
			lname,
			password,
			email,
			bio,
			dob,
			type,
			gender,
			is_admin,
			profile_image_url,
			typeOption1,
			typeOption2,
			typeOption3,
			genderOption1,
			genderOption2,
			genderOption3,
			isAdminOption1,
			isAdminOption2,
			isAdminOption3,
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{username}</h2>
					<form className="form-style-9">
						<ul>
							<li>
								<input type="text" className="field-style field-split align-left" value={username} onChange={this.update('username')} placeholder="username" />
								<input type="password" className="field-style field-split align-right" value={password} onChange={this.update('password')} placeholder="Password" />
							</li>
							<li>
								<input type="text" className="field-style field-split align-left" value={fname} onChange={this.update('fname')} placeholder="First Name" />
								<input type="text" className="field-style field-split align-right" value={lname} onChange={this.update('lname')} placeholder="Last Name" />
							</li>
							<li>
								<input type="date" className="field-style field-split align-left" value={dob} onChange={this.update('dob')} placeholder="DOB" />
								<input type="email" className="field-style field-split align-right" value={email} onChange={this.update('email')} placeholder="Email" />
							</li>
							<li>
								<select className="field-style field-split align-left" value={type} onChange={this.update('type')} >
									<option value={typeOption1} >TYPE</option>
									<option value={typeOption2} >Student</option>
									<option value={typeOption3} >Professor</option>
								</select>

								<select className="field-style field-split align-right" value={is_admin} onChange={this.update('is_admin')} >
									<option value={isAdminOption1} >ADMIN?</option>
									<option value={isAdminOption2} >TRUE</option>
									<option value={isAdminOption3} >FALSE</option>
								</select>
							</li>
							<li>
								<input type="url" className="field-style field-split align-left" value={profile_image_url} onChange={this.update('profile_image_url')} placeholder="Image URL" />
								<select className="field-style field-split align-right" value={gender} onChange={this.update('gender')} >
									<option value={genderOption1} >Gender</option>
									<option value={genderOption2} >Male</option>
									<option value={genderOption3} >Female</option>
								</select>
							</li>
							<li>
								<textarea className="field-style" value={bio} onChange={this.update('bio')} placeholder="Bio"></textarea>
							</li>
							<li>
								<input type="submit" value="Save" onClick={this.editUser} />
								<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
							</li>
						</ul>
					</form>
			</div>
		)
	};
};

export default UserEditForm;
```



## Homepage
![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895913/tikld1_v47geg.png "homepage")


## Admin Page
![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895911/tkld2_onunua.png "homepage signup")


## Student Page
![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895907/tkld3_rpgpas.png "profile edit")


## Cafetaria Page
![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895907/tkld4_lp22hq.png "category page")



### Plans For The Future

* I pan to make the user page more fluid to individual user preferences with a user being offered multiple options in choosing the theme of their page, and the ability to enable or disable optional features (yet to be decided on).

* I plan to add a chat service to the homepage where a visitor can see if I am currently available online to chat or answer questions they may have regarding the website or any genral topic of mutual interest. And possibly extend this feature to all users to chat with each other.