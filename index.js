import _ from 'lodash'

// 1. _.assign
// _.assign is equivalent of the spread operator from ES6.

var foo = { a: 'a property' }
var bar = { b: 4, c: 'an other property' }

var result = _.assign({ a: 'an old property' }, foo, bar)
// result => { a: 'a property', b: 4, c: 'an other property' }

// showing with spread operator
var result1 = { ...{ a: 'an old property' }, ...foo, ...bar }

// 2. _.times
// _.times receives as arguments the number of iterations and a function to execute n times and returns an array of the results. Very useful when creating dynamic test data.

function getRandomInteger() {
  return Math.round(Math.random() * 100)
}

var result = _.times(5, getRandomInteger)
// result => [64, 70, 29, 10, 23]

// 3. _.debounce
// _.debounce will invoke a function after a certain amount of time since the last time it was invoked.

function validateEmail() {
  // Validate email here and show error message if not valid
}

var emailInput = document.getElementById('email-field')
emailInput.addEventListener('keyup', _.debounce(validateEmail, 500))

// 4. _.find

// Instead iterating through an array with a loop to find a specific object, we can simply use _.find. That’s nice, but this is not the only thing you can do with _.find. You can also find an object using multiple properties with a single line of code. Take a look!

var users = [
  { firstName: 'John', lastName: 'Doe', age: 28, gender: 'male' },
  { firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' },
  { firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male' },
  { firstName: 'Jim', lastName: 'Castle', age: 23, gender: 'male' },
  { firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female' }
]

var user = _.find(users, { lastName: 'Doe', gender: 'male' })
// user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

var underAgeUser = _.find(users, function (user) {
  return user.age < 18
})
// underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }

// 5. _.get and ._set
// When using _.set, if the path doesn’t exist, it will be created. No more “Cannot set property ‘items’ of undefined” error. With _.get, if the path doesn’t exist, it will return undefined instead of an error. You can also specify a default value (third argument) if the path resolve to undefined.

var bar = { foo: { key: 'foo' } }
_.set(bar, 'foo.items[0]', 'An item')
// bar => { foo: { key: "foo", items: ["An item"] } }
var name = _.get(bar, 'name', 'John Doe')
// name => John Doe

// 6. _.deburr
// It’s a good habit to deburr text for a search function when there is internationalization and localization.

_.deburr('déjà vu')
// -> deja vu
_.deburr('Juan José')
// -> Juan Jose

// 7. _.keyBy
// Anytime a server returns an object collection as an array, this function can help you organize it. The second argument can also be a function.

var posts = [
  { id: '1abc', title: 'First blog post', content: '...' },
  { id: '2abc', title: 'Second blog post', content: '...' },
  // more blog posts
  { id: '34abc', title: 'The blog post we want', content: '...' }
  // even more blog posts
]

posts = _.keyBy(posts, 'id')

var post = posts['34abc']
// post -> { id: "34abc", title: "The blog post we want", content: "..." }

// 8. _.reduce
// _.reduce is a little bit like a filter function. The only difference is that you can choose the form of the returned object.
var users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 },
  { name: 'Bill', age: 65 },
  { name: 'Emily', age: 17 },
  { name: 'Jack', age: 30 }
]

var reducedUsers = _.reduce(
  users,
  function (result, user) {
    if (user.age >= 18 && user.age <= 59) {
      ;(result[user.age] || (result[user.age] = [])).push(user)
    }

    return result
  },
  {}
)

// reducedUsers -> {
//     28: [{ name: "Jane", age: 28 }],
//     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }]
// }

// 9.  _.cloneDeep
// After the hardest one, the easiest one. _.cloneDeep will clone an object.

var original = { foo: 'bar' }
var copy = original
copy.foo = 'new value'
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "new value" } Oops!

var original = { foo: 'bar' }
var copy = _.cloneDeep(original)
copy.foo = 'new value'
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "bar" } Yeah!

// 10. _. sortedUniq
// With this one, all duplicated values won’t be returned. This is usually used for performance reasons, because it is specifically for the sorted arrays.

var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8]
var result = _.sortedUniq(sortedArray)
// -> [1, 2, 3, 5, 8]
