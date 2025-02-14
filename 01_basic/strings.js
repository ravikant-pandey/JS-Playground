let name = "Rahul ";
let rollNo = 144;
// console.log(name+rollNo+" Unique Name"); // This is not good way to write

console.log(`my name is ${name}\nmy rollNo: ${rollNo}`);
const gameName = new String("Hello World");
console.log(gameName[8].toUpperCase());
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf("r"));

// Method of String for Interview
function stringMethodsDemo(str) {
    console.log("Original String:", str);
    
    // 1. Character & Unicode Methods
    console.log("charAt(2):", str.charAt(2));
    console.log("charCodeAt(2):", str.charCodeAt(2));
    
    // 2. Searching in Strings
    console.log("includes('Script'):", str.includes("Script"));
    console.log("indexOf('a'):", str.indexOf("a"));
    console.log("lastIndexOf('a'):", str.lastIndexOf("a"));
    console.log("startsWith('Java'):", str.startsWith("Java"));
    console.log("endsWith('t'):", str.endsWith("t"));
    
    // 3. Modifying Strings
    console.log("concat(' is awesome'):", str.concat(" is awesome"));
    console.log("replace('Java', 'Type'):", str.replace("Java", "Type"));
    console.log("replaceAll('a', '@'):", str.replaceAll("a", "@"));
    console.log("repeat(2):", str.repeat(2));
    
    // 4. Extracting & Splitting Strings
    console.log("slice(0, 4):", str.slice(0, 4));
    console.log("substring(0, 4):", str.substring(0, 4));
    console.log("split('a'):", str.split("a"));
    
    // 5. Trimming & Case Conversion
    let trimmedStr = "   " + str + "   ";
    console.log("Before trim():", trimmedStr);
    console.log("After trim():", trimmedStr.trim());
    console.log("toUpperCase():", str.toUpperCase());
    console.log("toLowerCase():", str.toLowerCase());
}

// Call the function with an example string
// stringMethodsDemo("JavaScript");

const url = "https://r%20pandey.com";
console.log(url.replace("%20" , "-"));

console.log(url.includes("pandey"));
console.log(gameName.split(" "));



function stringMethodsDemo(str) {
    console.log("Original String:", str);

    // Character & Unicode
    console.log("charAt(2):", str.charAt(2));
    console.log("charCodeAt(2):", str.charCodeAt(2));
    console.log("codePointAt(2):", str.codePointAt(2));

    // Searching
    console.log("includes('Script'):", str.includes("Script"));
    console.log("indexOf('a'):", str.indexOf("a"));
    console.log("lastIndexOf('a'):", str.lastIndexOf("a"));
    console.log("startsWith('Java'):", str.startsWith("Java"));
    console.log("endsWith('t'):", str.endsWith("t"));

    // Manipulation
    console.log("concat(' is cool'):", str.concat(" is cool"));
    console.log("replace('Java', 'Type'):", str.replace("Java", "Type"));
    console.log("replaceAll('a', '@'):", str.replaceAll("a", "@"));
    console.log("repeat(2):", str.repeat(2));

    // Extracting & Splitting
    console.log("slice(0, 4):", str.slice(0, 4));
    console.log("substring(0, 4):", str.substring(0, 4));
    console.log("split('a'):", str.split("a"));

    // Case Conversion
    console.log("toUpperCase():", str.toUpperCase());
    console.log("toLowerCase():", str.toLowerCase());

    // Padding & Trimming
    console.log("padStart(10, '*'):", str.padStart(10, "*"));
    console.log("padEnd(10, '*'):", str.padEnd(10, "*"));
    console.log("trim():", str.trim());

    // Matching & Formatting
    console.log("match(/S/):", str.match(/S/));
    console.log("localeCompare('JavaScript'):", str.localeCompare("JavaScript"));
}

// Call the function
stringMethodsDemo("JavaScript");
