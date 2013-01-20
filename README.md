Petty
======

A very small game API using Node.js for testing our skills in the development of highly scalable web services

* Will soon reach version 0.1

Current feature status
----------------------
- using MongoDB with Mongoose
- using Connect with logger, bodyParser & static features

###Models

- Pet starting schema added with basic pet methods:
    - gainHealth
    - loseHealth
    - die
    - savePet

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

- Pets Controller added with one fully implemented method and outline of three methods:
    - addPet
    - updatePet
    - deletePet
    - findPetById

- Activities Controller added with a method:
    - addActivity

- Users Controller added with methods:
    - addUser
    - listAll
    - show

Next features
-------------
- will be hosted on AppFog (as soon as it reaches version 0.1, which will be soon)


*will fill the features description as they are being added