//create function getStudenstBirgday
//input arr[obj]
//output obj
//detect mounth of birth and group
//Sort students insode the mouth
//leave only names

export const studentsBirthDays = (students) => {
  const month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  const studentsNumberOfDay = students.map(({ name, birthDate }) => ({
    name,
    birthDate: new Date(birthDate).getMonth(),
    date: new Date(birthDate).getDate(),
  }));
  const sortedStudents = studentsNumberOfDay.sort((a, b) => {
    return a.date - b.date;
  });
  for (let i = 0; i < sortedStudents.length; i++) {
    sortedStudents[i].birthDate = month[sortedStudents[i].birthDate];
  }
  return sortedStudents.reduce((r, { name, birthDate }) => {
    r[birthDate] = [...(r[birthDate] || []), name];
    return r;
  }, {});
};

console.log(
  studentsBirthDays([
    { name: "Tom", birthDate: "01/15/2010" },
    { name: "Ben", birthDate: "02/17/2008" },
    { name: "Ocsana", birthDate: "02/02/2005" },
    { name: "Vasil", birthDate: "12/15/2010" },
    { name: "Roman", birthDate: "08/15/2010" },
    { name: "Roman", birthDate: "02/01/2010" },
  ])
);
