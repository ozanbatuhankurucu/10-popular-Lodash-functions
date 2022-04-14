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
