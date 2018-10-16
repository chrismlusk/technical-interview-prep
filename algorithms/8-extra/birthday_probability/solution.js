// how many students need to be in the same class such that at least two
// students will have the same birthday

function birthdayProbability(numSimulations) {
  let numStudents = 0;

  for (let i = 0; i < numSimulations; i++) {
    const studentsBDay = [];

    do {
      studentsBDay.push(Math.round(Math.random() * 364));
      const index = studentsBDay.indexOf(studentsBDay[studentsBDay.length - 1]);
    } while (index === studentsBDay.length - 1);

    numStudents += studentsBDay.length;
  }

  return Math.ceil(numStudents / numSimulations);
}

// here we select a sample size of 10,000
// however, sample size should be determined through solution stability
birthdayProbability(10000);
