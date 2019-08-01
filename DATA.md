# Data Engineer challenge

door2door, the provider of the 'allygator shuttle' service in Berlin, collects the live position of all vehicles in its fleet in real-time via a GPS sensor in each vehicle. These vehicles run in operating periods that are managed by door2door's operators. An API is responsible for collecting information from the vehicles and the operators. A step of the API's processing of this information, is to emit events to a data stream from which another component process and stores them in a data lake.

For this challenge, we collected a sample of the data lake structure and put it on the `/data` folder.


See the [Data Model](#data-model) section for more information.


## Part 1

Our BI team was asked the following question from our stakeholders:

* What is the average distance traveled by our vehicles during an operating period?

We would like to ask you to develop a solution that processes information from the files found in `/data`. You must extract the main events that occurred during operating periods, transform and store them in a way that is easy for our analysts to answer the question above.

You are free to use any combination of tools, but you must provide instructions for us to execute them. If your solution is setup to run locally, it must be containerized.


## Part 2

Due to regulation changes, our system will have to allow for break times for drivers to rest during the operating period. Drivers can still use their cars to move in the city during a rest and they will still emit location updates, but those should not be used for the distance computation that answers the question asked in `Part 1`.

Based how you modeled your solution for `Part 1`, propose a way of adapting the events in the [Data Model](#data-model) so that during the analysis, the location updates during break times are not considered when the average distance traveled is computed.

You can suggest any kind of changes.


## Data Model

The events stored in the data lake comply to the following data model, which is not the most suitable for the data analysis (you are free to suggest changes).

All events are JSON strings, of the form:

```json5
{
  "event": "create",
  "on": "some_entity",
  "at": "2019-05-19T16:02:02Z",
  "data": { /* ... */ },
  "organization_id": "id-of-organization"
}
```

- `event` indicates the type of event on the entity - each entity has its own set of events.
- `on` indicates on which entity the event occurred - see sections below.
- `data` will be an object containing information about the entity that the event occurred on - see sections below.
- `organization_id` identifies the organization the event belongs to


## Events on `vehicle`

Possible events:
- `register` adds a vehicle to the operating period
- `update` updates a vehicle location
- `deregister` removes a vehicle from the operating period. After this event occurs, the vehicle will never send further location updates.

When a vehicle event is emitted, the `data` field has the following format:

```json5
{
  "id":            "s0m3-v3h1cl3-1D",
  "location":      {
    "lat":              50.1, /* can be null if vehicle is new and no location updates were received yet */
    "lng":              40.2,  /* can be null if vehicle is new and no location updates were received yet */
    "at":               "2016-02-02T01:00:00Z",  /* ISO8601 format. Can be null if vehicle is new and no location updates were received yet */
  }
}
```

## Events on `operating_period`

Possible events: `create`, `delete`

When an operator adds or removes an operation period, the `on` field will be set to `operating_period`, and the `data` field will have the following format:

```json5
{
  "id":              "s0m3-p3r1od-1D",
  "start":           "2016-12-30T18:00:00Z", // UTC time, ISO8601 format
  "finish":          "2016-12-31T02:00:00Z" // UTC time, ISO8601 format
}
```


## Technical assumptions

* Your solution is expected to be implemented using one of the following languages: Java or Python. We prefer Python, since it is what we use in door2door.
* You are free to make use of any framework or library you please, but you must justify your choice.


## Delivery of your solution

Please deliver your solution to us in a git repository or in a ZIP file. You must provide complete instructions for us to run the solution on our own machines. If you choose to use git, make sure the reviewers will be able to access your repository.

With one of the methods of deliver above, you may optionally host the solution on the Internet (e.g. Heroku, AWS). Make sure to provide access to door2door's reviewers.

## Reviewing

The following description will give you an understanding of how we review the code challenge. What matters to us is to learn how you write code and model solutions. For us it is more important to have an understandable project than a complex algorithm.

The criteria that we are looking for are the following:

- Documentation: Is the project and the code properly documented?
- Correctness: Is the task solved? Is the data provided correctly processed by the solution? If there is anything missing, is the reason why it is missing documented?
- Technology: Which libraries or approaches are used? Do they make sense for the task? Justify why you've decided to use those technologies to solve the code challenge.
- Code quality: Is the code understandable and maintainable? What programming paradigm is being used? Is it implemented correctly?
- Tests: How is the project tested? Does the project contain system and unit tests? Is the entire project tested or just parts of it?
