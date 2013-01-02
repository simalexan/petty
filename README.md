Petty
======

A very small game API using Node.js
for testing our skills in the development of highly scalable web services

* Will soon reach version 0.1

Current feature status
----------------------
- using MongoDB with Mongoose

###Models

- Pet starting schema added with basic pet methods:
    - gainHealth
    - loseHealth
    - die
    - updatePet

- User starting schema added with two basic methods:
    - createUser
    - updateUser

- Activity starting schema added with its methods:
    - createActivity
    - updateActivity
    - deleteActivity

- ActivityType schema added with its methods:
    - createActivityType
    - updateActivityType
    - deleteActivityType

###Controllers

- Pet Controller added with an outline of two methods:
    - addPet
    - deletePet

- Activity Controller added with a method:
    - addActivity

- User Controller added with methods:
    - addUser
    - listAll
    - show

Next features
-------------
- will be using Connect ~ for routing and related middleware (in the next push, seems so)
- will be hosted on Heroku (as soon as it reaches version 0.1, which will be soon)


*will fill the features description as they are being added