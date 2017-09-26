
# The EastHalo University
<div align="center">
  <strong>A Clone of a Univeristy Registration Web Application</strong>
</div>

The Application can be found here: [EastHalo](https://easthalo.herokuapp.com/)

## Table of Content
- [Overview](#example)
- [Database](#example)
- [Routes / API](#api)
- [Features](#features)
- [Example Code](#example)
- [Optimizations](#optimizations)
- [Future](#support)

## Overview
This is a single page web application modeled after a university website. It was built with a Rails backend with a PostgreS database and a React-Redux frontend. it took me three weeks from start to it's present state (as of September 18, 2017). It is made of two main layers; the Landing Page, and the LoggedHome Page. The Landing Page is pretty self explanatory and doesn't contain much beyond just signing users up and logging them in. The Logged Home Page on the other hand contains the main functionalities of the app. I go into the details below and in my screen cast of the features found on the landing page of the live app.


## Backend

The app is built on a Ruby on Rails backend supported by a PostgreSQL database. I abstracted the routes (except the root, which is the 'static_pages' in this app) from a traditonal Rails routes to React Router. Initially I planned to center the app around two user models; students and professors. However, as I start with my wireframe I realized that I should leave room for scalability in case i decide to extend the user classes beyond just students and professors. So I ended up with a User Model / Class from which all other user types can inherit from. As at the time of writing this README I had four types of users; students, professors, administrators, and ordinary users. 
A sample model from the Database is shown below:

																	DATABASE MODELS
```js
-----------------------------------------------------------------------------		

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

#------------------------------------------------------------------------------
## SAMPLE DATA FROM THE COURSES TABLE
#------------------------------------------------------------------------------	

 id |   title   | course_credit | start_time | end_time | professor_id |
----+-----------+---------------+------------+----------+--------------
  1 | Art       |      1        |   09:00    |  11:00   |      17      |            
  2 | Biology   |      1        |   13:10    |  14:00   |      8       | 
  3 | Chemistry |      1        |   08:00    |  10:00   |      93      |           
  4 | English   |      1        |   14:10    |  16:00   |      8       | 
  5 | French    |      1        |   19:00    |  22:00   |      35      | 
```

## SAMPLE BACKEND OUTPUT FROM API CALLS
```js
export const createFriendship = friendship => (
	$.ajax({
		method: 'POST',
		url: '/api/friendships',
		dataType: "json",
		data: friendship
	})
);


var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')

var app = choo()
app.use(log())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function countStore (state, emitter) {
  state.count = 0
  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })
}

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.unshift(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;
```
<!-- The above will retrieve all the meals from the cafetaria in the database -->
```js
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

```js
    |   Privilge                             | All Users | Student | Professor | Admin |
----+----------------------------------------+----------+---------+-----------+--------
  1 | Create / Share Post                    |     Y     |    Y    |     Y     |   Y   |
  2 | Comment On Posts                       |     Y     |    Y    |     Y     |   Y   |
  3 | Friend / Unfriend Other Users          |     Y     |    Y    |     Y     |   Y   |
  4 | Add / Drop Course                      |     N     |    Y    |     N     |   N   |
  5 | Edit Self Attributes                   |     Y     |    Y    |     Y     |   Y   |
  6 | Edit Other Users Privileges            |     N     |    N    |     N     |   Y   |
  7 | CRUD Courses                           |     N     |    N    |     Y     |   Y   |
  7 | CRUD Departments                       |     N     |    N    |     N     |   Y   |
  7 | CRUD Meals                             |     N     |    N    |     N     |   Y   |
  7 | CRUD Books                             |     N     |    N    |     N     |   Y   |
  7 | CRUD News                              |     N     |    N    |     Y     |   Y   |
  8 | Create / Assign Grade                  |     N     |    N    |     Y     |   N   |
  9 | Acess The News                         |     Y     |    Y    |     Y     |   Y   |
	9 | Search For Other Users                 |     N     |    Y    |     N     |   N   |
  0 | Transcript (Instantiated for Students) |     N     |    Y    |     N     |   N   |
  0 | Schedule (Instantiated for all Users)  |     Y     |    Y    |     Y     |   Y   |
  0 | Chat With Other Users*                 |     Y     |    Y    |     Y     |   Y   |
  0 | Purchase Books*                        |     Y     |    Y    |     Y     |   Y   |
  0 | Purchase Meals*                        |     Y     |    Y    |     Y     |   Y   |
  0 | Create Assignments*                    |     N     |    N    |     Y     |   N   |
  0 | Take Assignment*                       |     N     |    Y    |     N     |   N   |
  0 | Send Mass Emails To All Users*         |     Y     |    Y    |     Y     |   Y   |
 
The Features with * are being worked on and so are not currently available on the app.
```



### User Authentication & Authorization
In a real world university users are already pre-screened as members of the university and given credentials to create user accounts. For the purpose of this project I have left open the possibility that anyone can sign up. A user's default type is a regular user. An admin can then grant the user privilges by assigning a type to their profile, be it Student, Professor, or another Admin. These 'type' determine what user privilges a user gets within the application. As demonstrated in the table above, all users get a Schedule instantiated for them by default on signing, and they can create and comment on posts, can become friends with any other user user, can access the news, purchase meals and books. Beyong that point there is an overlap in privileges, with the Admin User types enjoying the most exclusive privilges.


### 
## Example
```js
var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')

var app = choo()
app.use(log())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function countStore (state, emitter) {
  state.count = 0
  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })
}

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.unshift(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;
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

* I plan to add a chat service to the Logged HomePage to mimick facebook chat, implemented Follow and Like features for users to follow other users and like posts and comments. In addition I plan to implement a Stripe payment portal for users to be able to make purchaes with real payments. Currently users have $0 accounts instantiated for them upon signing up. They can then make purchaes from the cafetaria and/or bookstore with their accounts debited with the prices of goods purchased and the bookstore / cafetaria accounts credited with the equivalent amount. I think it'd be more realistic to actually have a credit card / debit card payment system. I also plan to implement a feature for professors to create questions and tests that gets sent to all students in a particular course the professor is teaching. The students answers will then be sent back to the professor who can then assign them a grade for the course.

* My hope is to keep working on improving the current performance of the app and add more features as time permit. I am in the middle of the search for my first job and may not be able to continue working on adding more features until I have dispensable time.

