const findTheOldest = function (people) {
  return people.reduce((person, currentPerson) => {
    let personAge = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;
    let currentPersonAge = currentPerson.yearOfDeath
      ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
      : new Date().getFullYear() - currentPerson.yearOfBirth;
    if (personAge < currentPersonAge) return currentPerson;
    return person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
