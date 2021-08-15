<!-- writeCode

Q1. Design database model using mongoose to replicate data structure of `STACK OVERFLOW` and add appropriate indexes to support the queries.

Stack Overflow consists of

- Users
- Questions
- Answers
- REPLY'S on Question/Answers
- Up/Down vote on Questions/Answers/Replies
- Tags on Questions
- Views on Questions
- Reputation for each user based on questions asked, answers given, upvotes

Design models for storing these data and associate them accordingly to fetch related data together.

Use indexes to support queries related to questions, tags etc..

Q2. Use aggregation framework to

- Get array of all the tags used in the questions

  ```js
  db.stacks.aggregate([{ $unwind: '$tagsQuestion' }]);
  ```

- Get total questions count

```js
db.stacks.aggregate([
  {
    $group: {
      _id: 'questions',
      count: { $sum: 1 },
    },
  },
]);
```

- Total answers count overall and question specific as well

```js
db.stacks.aggregate([
  {
    $group: {
      _id: { questions: '$questions', answers: '$answers' },
      count: { $sum: 1 },
    },
  },
]);
```
db.stacks.aggregate([
    {
        $group: {
            _id: null,
            answersUpvote: {$sum: {$size: '$likes'}}
        }
    }
]);


- Count total reputation of a user
  db.stacks.aggregate([
  {
  $group: {
  _id: "$reputation",
  $count: "reputation",
  },
  },
  ]);

````
- total views on a particular day
- Count total answer by a particular user

```js
db.stacks.aggregate([
  {
    $group: {
      _id: { answers: '$answers' },
      count: { $sum: 1 },
    },
  },
]);
```` -->

writeCode

Q1. Design database model using mongoose to replicate data structure of `STACK OVERFLOW` and add appropriate indexes to support the queries.

Stack Overflow consists of

- Users
- Questions
- Answers
- REPLY'S on Question/Answers
- Up/Down vote on Questions/Answers/Replies
- Tags on Questions
- Views on Questions
- Reputation for each user based on questions asked, answers given, upvotes

Design models for storing these data and associate them accordingly to fetch related data together.

Use indexes to support queries related to questions, tags etc..

Q2. Use aggregation framework to

- Get array of all the tags used in the questions

  ```js
  db.stacks.aggregate([{ $unwind: '$tagsQuestion' }]);
  ```

- Get total questions count

```js
db.stacks.aggregate([
  {
    $group: {
      _id: 'questions',
      count: { $sum: 1 },
    },
  },
]);
```

- Total answers count overall and question specific as well

```js
db.stacks.aggregate([
  {
    $group: {
      _id: { questions: '$questions', answers: '$answers' },
      count: { $sum: 1 },
    },
  },
]);
```

- Count total reputation of a user

```js
db.stacks.aggregate([
  { $group: { _id: null, reputation: { $sum: '$reputation' } } },
]);
```

- total views on a particular day

```js
db.stacks.aggregate([
  { $group: { _id: null, viewsQuestion: { $sum: '$viewsQuestion' } } },
]);
```

- Count total answer by a particular user

```js
db.stacks.aggregate([
  {
    $group: {
      _id: null,
      answers: { $sum: { $size: '$answers' } },
    },
  },
]);
```
