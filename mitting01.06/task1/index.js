//create function getStudenstBirgday
//input arr[obj]
//output obj
//detect mounth of birth and group
//Sort students insode the mouth
//leave only names

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];
const students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
];

const studentsBirthDays = (students) => {
  const studensObj = students.reduce((acc, student) => {
    const monthNumber = new Date(student.birthDate).getMonth();
    const monthName = monthNames[monthNumber];
    const oldMonthStudents = acc[monthName] ? acc[monthName] : [];
    const newMonthStudents = oldMonthStudents.concat(student);
    return { ...acc, [monthName]: newMonthStudents };
  }, {});

  for (let month in studensObj) {
    const sortedStudents = studensObj[month].sort((a, b) => {
      return new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate();
    });
    const studentsNames = sortedStudents.map((student) => student.name);
    console.log((studensObj[month] = studentsNames));
    return (studensObj[month] = studentsNames);
  }
};
const result = studentsBirthDays(students);
// console.log(result);
