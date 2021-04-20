# Frontend code challenge

'allygator shuttle', door2door's mobility service that operates in Berlin, provides a web app that allows users to book pooled rides and track their progress. In order to enable users to be able to track the progress of their ride after they book it, door2door needs you to provide a solution which:

1. shows the user the live location of their assigned vehicle on a map
2. shows the ride's current status (waiting, in the vehicle, dropped off) in a UI component
3. shows the ride's pickup and dropoff addresses in a UI component

door2door has provided a WebSockets endpoint that will stream all of this information. It will send different events simulating the various states of a ridepooling ride. Your solution should visualise the information that is sent from this endpoint.

- [Documentation of the WebSockets endpoint](https://d2d-frontend-code-challenge.herokuapp.com/docs)
  - Note that this service goes to sleep when not in use, so it may take a few seconds to connect the first time you access it

## _Optional_ extras

The following points are optional features that you may choose to implement, but they are not required in order to have your solution be accepted.

- Visualise on the map the intermediate stops that the vehicle will make between the pickup and dropoff locations. Note that these stops may change over the duration of the journey.
- Visualise the [navigation bearing](https://en.wikipedia.org/wiki/Bearing_(navigation)) of the vehicle to show which direction the vehicle is currently driving in.

## Technical assumptions

- The solution must be implemented in JavaScript or TypeScript
- If you decide to use a framework, we would prefer that you use the React library (we are also open to a solution that doesn’t rely on a framework)

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
