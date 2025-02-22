// ForEach

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "TypeScript",
  "PHP",
  "Kotlin",
];

// languages.forEach(function (lang) {
//   console.log(lang);
// });

// languages.forEach((lang) => console.log(`Language: ${lang}`));

// function printMe(languages)
// {
//     console.log(`Lang: ${languages}`)
// }
// languages.forEach(printMe);

// Another parameter like index, arraylist

// languages.forEach((lang, index, arrayList) => {
//     console.log(lang , index , arrayList);
// });


// itration array which contain multiple object
// Also important interview and database se value nikalne ke liye
const myCoding = [
    { language: "JavaScript", type: "Dynamic", popularity: "High", languageFileName: "js" },
    { language: "Python", type: "Dynamic", popularity: "High", languageFileName: "py" },
    { language: "Java", type: "Static", popularity: "High", languageFileName: "java" },
    { language: "C++", type: "Static", popularity: "Medium", languageFileName: "cpp" },
    { language: "Go", type: "Static", popularity: "Growing", languageFileName: "go" }
];



myCoding.forEach((item)=>
{
    console.log(`Language name: ${item.language}`);
    console.log(`Language type: ${item.type}`);
    console.log(`Language popularity: ${item.popularity}`);
    console.log(`Language file name: ${item.languageFileName}`);
    console.log("---------------------------------")
})
