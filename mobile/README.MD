# Mobile code challenge

'allygator shuttle', door2door's mobility service that operates in Berlin, provides a mobile app to help passengers search the most suitable mode of transport to move around the city, and to book ridepooling rides in an easy manner. After booking a ride, and in order to help the users during their riding experience, door2door needs you to provide a solution which:

1. shows the moving location of the vehicle on a map
2. shows the ride's current state information in a UI component; this includes the pickup and dropoff addresses and the status of the ride.

To aid you in development of this solution, door2door has provided a WebSocket endpoint that will send different events simulating the possible states of a ridepooling ride.
[Documentation of the WebSockets endpoint](https://d2d-frontend-code-challenge.herokuapp.com/docs)

## _Optional_ extras

* As an optional extra, you could reflect on the map (or in a different place) how the intermediate stops between the user's pickup and dropoff locations change, in case they do.

* As an optional extra, you could calculate the [navigation bearing](https://en.wikipedia.org/wiki/Bearing_(navigation)) of the vehicle to show which direction the vehicle is going to.

## Additional business requirements

When the WebSocket endpoint sends the last event, the connection should be closed.

## Technical assumptions

* The solution is expected to be implemented using one of the following languages: Swift for iOS, and preferably Kotlin for Android (but Java is also accepted).
* You are free to make use of any framework or library you please (if any), but you should justify your choice.

## Delivery of your solution

Please deliver your solution to us as a publicly accessible git repository, or in a ZIP file. The repository should contain full instructions for us to build and run the project.

## Reviewing

The following description will give you an understanding of how we review the code challenge. What matters to us is to learn how you write code and what you consider as clean code. For us it is more important to have an understandable project than a complex algorithm.

The criteria that we are looking for are the following:

- Documentation: Is the project and the code properly documented?
- Correctness: Is the task solved? Does the app handle properly all the events sent from the WebSockets enpoint? If there is anything missing, is the reason why it is missing documented?
- Technology: Which libraries or approaches are used? Do they make sense for the task? Justify why you've decided to use those technologies to solve the code challenge.
- Code quality: Is the code understandable and maintainable? What programming paradigm is being used? Is it implemented correctly? Is the project linted?
- Tests: How is the project tested? Does the project contain system and unit tests? Is the entire project tested or just parts of it?
