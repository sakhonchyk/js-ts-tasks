class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    this.checkStringValue(firstName);
    this.checkStringValue(secondName);
    this.checkNumberValue(age);

    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  set secondName(secondName) {
    this.#secondName = secondName;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
  }

  checkStringValue(value) {
    if (typeof value !== 'string') {
      throw new Error('Should by string:' + value);
    }
  }

  checkNumberValue(value) {
    if (typeof value !== 'number') {
      throw new Error('Should by number:' + value);
    }
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(user => new User(user.firstName, user.secondName, user.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
      users[i].celebrateBirthday();
    }
  }

  return users;
};
