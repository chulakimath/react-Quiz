const data=[
    {
      "question": "What is the correct syntax for declaring a variable in JavaScript?",
      "A": "var variableName;",
      "B": "let variableName;",
      "C": "const variableName;",
      "D": "All of the above",
      "answer": "D"
    },
    {
      "question": "Which data type is used to represent text data in JavaScript?",
      "A": "Number",
      "B": "String",
      "C": "Boolean",
      "D": "Array",
      "answer": "B"
    },
    {
      "question": "What is the value of the expression 5 + 3 * 2?",
      "A": 11,
      "B": 13,
      "C": 16,
      "D": 20,
      "answer": "A"
    },
    {
      "question": "Which operator is used to compare two values for equality?",
      "A": "==",
      "B": "!=",
      "C": "<",
      "D": ">",
      "answer": "A"
    },
    {
      "question": "What is the output of the following code? console.log(typeof 'hello');",
      "A": "number",
      "B": "string",
      "C": "boolean",
      "D": "object",
      "answer": "B"
    },
    {
      "question": "What is the purpose of the keyword 'function' in JavaScript?",
      "A": "To declare a variable",
      "B": "To create an object",
      "C": "To define a function",
      "D": "To start a loop",
      "answer": "C"
    },
    {
      "question": "How do you create an array in JavaScript?",
      "A": "arrayName = [];",
      "B": "arrayName = new Array();",
      "C": "Both of the above",
      "D": "None of the above",
      "answer": "C"
    },
    {
      "question": "What is the difference between a 'let' variable and a 'const' variable?",
      "A": "Let variables can be reassigned, const variables cannot",
      "B": "Const variables can be reassigned, let variables cannot",
      "C": "There is no difference",
      "D": "It depends on the scope",
      "answer": "A"
    },
    {
      "question": "What is the purpose of the 'if' statement in JavaScript?",
      "A": "To create a loop",
      "B": "To declare a function",
      "C": "To execute code conditionally",
      "D": "To define a variable",
      "answer": "C"
    },
    {
      "question": "What is the correct way to access a property of an object?",
      "A": "objectName.propertyName",
      "B": "objectName['propertyName']",
      "C": "Both of the above",
      "D": "None of the above",
      "answer": "C"
    },
    {
        "question": "What command is used to list all files and directories in the current directory in Linux?",
        "A": "ls -l",
        "B": "ls -a",
        "C": "dir",
        "D": "ls",
        "answer": "D"
    },
    {
        "question": "How can you navigate to your home directory in Linux using the terminal?",
        "A": "cd /",
        "B": "cd ~",
        "C": "cd ..",
        "D": "cd home",
        "answer": "B"
    },
    {
        "question": "What command is used to create a new directory in Linux?",
        "A": "md",
        "B": "create",
        "C": "mkdir",
        "D": "newdir",
        "answer": "C"
    },
    {
        "question": "How can you force remove a file in Linux?",
        "A": "rm -f filename",
        "B": "remove filename",
        "C": "delete -f filename",
        "D": "force delete filename",
        "answer": "A"
    },
    {
        "question": "Which command is used to display the current date and time in Linux?",
        "A": "datetime",
        "B": "now",
        "C": "date",
        "D": "time",
        "answer": "C"
    },
    {
        "question": "What command is used to display the manual of a command in Linux?",
        "A": "manual",
        "B": "man",
        "C": "info",
        "D": "help",
        "answer": "B"
    },
    {
        "question": "How can you find out the IP address of your Linux machine?",
        "A": "ipconfig",
        "B": "netstat",
        "C": "ifconfig",
        "D": "ip",
        "answer": "C"
    },
    {
        "question": "What command is used to change file permissions in Linux?",
        "A": "chmod",
        "B": "chperm",
        "C": "change",
        "D": "perm",
        "answer": "A"
    },
    {
        "question": "How do you terminate a process in Linux through the terminal?",
        "A": "terminate",
        "B": "quit",
        "C": "exit",
        "D": "kill",
        "answer": "D"
    },
    {
        "question": "What command is used to display disk usage in Linux?",
        "A": "du",
        "B": "disk",
        "C": "diskusage",
        "D": "df",
        "answer": "D"
    },
    {
        "question": "In Linux, how can you recursively copy entire directories?",
        "A": "cp -r",
        "B": "copy -r",
        "C": "mv -r",
        "D": "move -r",
        "answer": "A"
    },
    {
        "question": "Which command is used to display the last few lines of a file in Linux?",
        "A": "tail",
        "B": "last",
        "C": "end",
        "D": "bottom",
        "answer": "A"
    },
    {
        "question": "How can you search for a specific string in files using the terminal in Linux?",
        "A": "findstr",
        "B": "grep",
        "C": "searchstr",
        "D": "scan",
        "answer": "B"
    },
    {
        "question": "Which command is used to compress files and directories in Linux?",
        "A": "tar",
        "B": "zip",
        "C": "compress",
        "D": "pack",
        "answer": "A"
    },
    {
        "question": "How do you create an empty file in Linux?",
        "A": "touch",
        "B": "empty",
        "C": "mkfile",
        "D": "makeempty",
        "answer": "A"
    },
    {
        "question": "What command is used to remove a directory in Linux?",
        "A": "delete",
        "B": "rmdir",
        "C": "remove",
        "D": "dirremove",
        "answer": "B"
    },
    {
        "question": "How can you check the current directory in Linux?",
        "A": "pwd",
        "B": "currentdir",
        "C": "checkdir",
        "D": "whereami",
        "answer": "A"
    },
    {
        "question": "Which command is used to display running processes in Linux?",
        "A": "ps",
        "B": "processes",
        "C": "running",
        "D": "top",
        "answer": "A"
    },
    {
        "question": "What command is used to shut down a Linux system?",
        "A": "shutdown",
        "B": "halt",
        "C": "stop",
        "D": "poweroff",
        "answer": "D"
    },
    {
        "question": "In Linux, how do you create a symbolic link?",
        "A": "ln -s",
        "B": "link -s",
        "C": "sym -link",
        "D": "createln",
        "answer": "A"
    },
    {
        "question": "How can you find the amount of free and used memory in Linux?",
        "A": "mem",
        "B": "free",
        "C": "ram",
        "D": "memory",
        "answer": "B"
    },
    {
        "question": "What command is used to rename a file in Linux?",
        "A": "ren",
        "B": "rename",
        "C": "change",
        "D": "mv",
        "answer": "D"
    },
    {
        "question": "How can you view the contents of a file in Linux without opening it?",
        "A": "cat",
        "B": "read",
        "C": "view",
        "D": "show",
        "answer": "A"
    },
    {
        "question": "Which command is used to change the current user's password in Linux?",
        "A": "userpass",
        "B": "passwd",
        "C": "change pass",
        "D": "usermod",
        "answer": "B"
    },
    {
        "question": "How do you display the available disk space in Linux?",
        "A": "diskinfo",
        "B": "space",
        "C": "df",
        "D": "disk",
        "answer": "C"
    },
    {
        "question": "What command is used to copy files and directories in Linux?",
        "A": "cp",
        "B": "copy",
        "C": "mv",
        "D": "xcopy",
        "answer": "A"
    },
    {
        "question": "How can you terminate a running process by its process ID (PID) in Linux?",
        "A": "end",
        "B": "terminate",
        "C": "kill",
        "D": "stop",
        "answer": "C"
    },
    {
        "question": "Which command is used to unzip files in Linux?",
        "A": "unzip",
        "B": "extract",
        "C": "decompress",
        "D": "gunzip",
        "answer": "A"
    },
    {
        "question": "How do you change directory permissions in Linux?",
        "A": "chmod",
        "B": "chdirperm",
        "C": "dirperm",
        "D": "chperm",
        "answer": "A"
    },
    {
        "question": "What command is used to check the current network connections in Linux?",
        "A": "netstat",
        "B": "ifconfig",
        "C": "connection",
        "D": "network",
        "answer": "A"
    },
    {
        "question": "What is the difference between '==' and '===' operators in JavaScript?",
        "A": "'==' compares both value and type, while '===' compares only value.",
        "B": "'===' compares both value and type, while '==' compares only value.",
        "C": "'==' is used for assignment, while '===' is used for comparison.",
        "D": "'===' is an invalid operator in JavaScript.",
        "answer": "B"
    },
    {
        "question": "What is a closure in JavaScript?",
        "A": "A function that has access to the outer function's variables even after the outer function has finished executing.",
        "B": "A function declared inside another function.",
        "C": "A function that returns another function.",
        "D": "A function with no parameters.",
        "answer": "A"
    },
    {
        "question": "What is the 'this' keyword in JavaScript?",
        "A": "A keyword that refers to the current function.",
        "B": "A keyword that refers to the global object.",
        "C": "A keyword that refers to the parent object.",
        "D": "A keyword that refers to the context within which a function is executed.",
        "answer": "D"
    },
    {
        "question": "What does the 'typeof' operator in JavaScript do?",
        "A": "Checks if a variable is defined.",
        "B": "Returns the type of a variable.",
        "C": "Checks if a variable is null.",
        "D": "Checks if a variable is a function.",
        "answer": "B"
    },
    {
        "question": "What is a callback function in JavaScript?",
        "A": "A function that is executed immediately after its declaration.",
        "B": "A function passed as an argument to another function to be executed later.",
        "C": "A function that is recursive.",
        "D": "A function that is executed once.",
        "answer": "B"
    },
    {
        "question": "How do you declare a variable in JavaScript?",
        "A": "var x;",
        "B": "x = 5;",
        "C": "let x;",
        "D": "All of the above.",
        "answer": "D"
    },
    {
        "question": "What is an IIFE in JavaScript?",
        "A": "An Immediately Invoked Function Expression.",
        "B": "An Inline If Else statement.",
        "C": "An Interpolated If Else statement.",
        "D": "An Inline Function Execution.",
        "answer": "A"
    },
    {
        "question": "What does NaN stand for in JavaScript?",
        "A": "Not a Name",
        "B": "Not a Null",
        "C": "Not a Number",
        "D": "Not a Node",
        "answer": "C"
    },
    {
        "question": "What is the purpose of the 'let' keyword in JavaScript?",
        "A": "To declare a variable with block scope.",
        "B": "To declare a variable with global scope.",
        "C": "To declare a constant variable.",
        "D": "To declare a variable with function scope.",
        "answer": "A"
    },
    {
        "question": "What does JSON stand for in JavaScript?",
        "A": "JavaScript Object Notation",
        "B": "JavaScript Object Naming",
        "C": "JavaScript Object Nullification",
        "D": "JavaScript Operator Notation",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'const' keyword in JavaScript?",
        "A": "To declare a variable with block scope.",
        "B": "To declare a variable with function scope.",
        "C": "To declare a constant variable.",
        "D": "To declare a variable with global scope.",
        "answer": "C"
    },
    {
        "question": "What does the 'forEach' method do in JavaScript?",
        "A": "It loops through the elements of an array.",
        "B": "It filters the elements of an array.",
        "C": "It sorts the elements of an array.",
        "D": "It checks if an element exists in an array.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'map' method in JavaScript?",
        "A": "It creates a new array by applying a function to each element in an existing array.",
        "B": "It removes elements from an array based on a condition.",
        "C": "It checks if an element exists in an array.",
        "D": "It sorts the elements of an array.",
        "answer": "A"
    },
    {
        "question": "What is the 'spread operator' in JavaScript used for?",
        "A": "To concatenate strings.",
        "B": "To create a copy of an array or object.",
        "C": "To compare two arrays.",
        "D": "To convert an array to a string.",
        "answer": "B"
    },
    {
        "question": "What is a Promise in JavaScript?",
        "A": "A guarantee that a function will return a value.",
        "B": "A placeholder for a value that may not yet be available.",
        "C": "A function that is executed immediately after its declaration.",
        "D": "A function passed as an argument to another function to be executed later.",
        "answer": "B"
    },
    {
        "question": "What does the 'async/await' feature in JavaScript do?",
        "A": "It allows asynchronous functions to be written in a synchronous style.",
        "B": "It converts synchronous functions to asynchronous functions.",
        "C": "It allows functions to execute simultaneously.",
        "D": "It allows functions to run indefinitely.",
        "answer": "A"
    },
    {
        "question": "What does the 'typeof' operator return for 'null' in JavaScript?",
        "A": "'object'",
        "B": "'null'",
        "C": "'undefined'",
        "D": "'number'",
        "answer": "A"
    },
    {
        "question": "How can you convert a string to an integer in JavaScript?",
        "A": "parseInt()",
        "B": "Number()",
        "C": "String()",
        "D": "toInteger()",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'use strict' directive in JavaScript?",
        "A": "To enable strict mode for the entire script or individual functions.",
        "B": "To include external scripts in strict mode.",
        "C": "To enforce strong typing in JavaScript.",
        "D": "To restrict the use of certain keywords.",
        "answer": "A"
    },
    {
        "question": "What does the 'NaN' property in JavaScript represent?",
        "A": "Not a Null",
        "B": "Not a Node",
        "C": "Not a Number",
        "D": "Not a Name",
        "answer": "C"
    },  {
        "question": "What is the purpose of the 'Object.keys()' method in JavaScript?",
        "A": "To retrieve an array of an object's property names.",
        "B": "To retrieve an array of an object's property values.",
        "C": "To check if an object has a specific property.",
        "D": "To create a new object from existing properties.",
        "answer": "A"
    },
    {
        "question": "What does the 'Array.isArray()' method check for in JavaScript?",
        "A": "If an array is empty.",
        "B": "If a variable is of type 'array'.",
        "C": "If an object contains arrays.",
        "D": "If a variable is an array.",
        "answer": "D"
    },
    {
        "question": "What does the 'parseFloat()' function do in JavaScript?",
        "A": "Converts a string to an integer.",
        "B": "Converts a string to a floating-point number.",
        "C": "Converts a number to a string.",
        "D": "Parses a string into its parts.",
        "answer": "B"
    },
    {
        "question": "What is the purpose of the 'find()' method in JavaScript arrays?",
        "A": "To return the first element that satisfies a condition.",
        "B": "To check if an element exists in an array.",
        "C": "To loop through all elements in an array.",
        "D": "To return the index of a specific element.",
        "answer": "A"
    },
    {
        "question": "What does the 'toString()' method do in JavaScript?",
        "A": "Converts an array to a string.",
        "B": "Converts a string to lowercase.",
        "C": "Converts a number to a string.",
        "D": "Converts a string to uppercase.",
        "answer": "C"
    },
    {
        "question": "What is the purpose of the 'slice()' method in JavaScript arrays?",
        "A": "To add elements to the beginning of an array.",
        "B": "To remove elements from an array.",
        "C": "To create a shallow copy of an array.",
        "D": "To reverse the order of elements in an array.",
        "answer": "C"
    },
    {
        "question": "What does the 'includes()' method check for in JavaScript arrays?",
        "A": "If an array includes a specific value.",
        "B": "If an array is empty.",
        "C": "If an array has more than one occurrence of a value.",
        "D": "If an array contains only numbers.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'findIndex()' method in JavaScript arrays?",
        "A": "To return the index of the first element that satisfies a condition.",
        "B": "To return the index of a specific element.",
        "C": "To check if an element exists in an array.",
        "D": "To loop through all elements in an array.",
        "answer": "A"
    },
    {
        "question": "What does the 'push()' method do in JavaScript arrays?",
        "A": "Adds elements to the beginning of an array.",
        "B": "Removes elements from an array.",
        "C": "Adds elements to the end of an array.",
        "D": "Sorts the elements of an array.",
        "answer": "C"
    },
    {
        "question": "What is the purpose of the 'filter()' method in JavaScript arrays?",
        "A": "To create a new array with elements that pass a certain condition.",
        "B": "To remove elements from an array.",
        "C": "To sort the elements of an array.",
        "D": "To check if an element exists in an array.",
        "answer": "A"
    },
    {
        "question": "What does the 'len()' function do in Python?",
        "A": "Returns the total number of elements in an array.",
        "B": "Returns the length of a string.",
        "C": "Returns the number of keys in a dictionary.",
        "D": "All of the above.",
        "answer": "D"
    },
    {
        "question": "What is the purpose of the 'range()' function in Python?",
        "A": "To generate a sequence of numbers.",
        "B": "To filter elements in a list.",
        "C": "To iterate through a dictionary.",
        "D": "To perform mathematical operations.",
        "answer": "A"
    },
    {
        "question": "How do you comment multiple lines in Python?",
        "A": "# Comment",
        "B": "/* Comment */",
        "C": "''' Comment '''",
        "D": "// Comment",
        "answer": "C"
    },
    {
        "question": "What does the 'append()' method do in Python?",
        "A": "Adds an element to the end of a list.",
        "B": "Removes an element from a list.",
        "C": "Sorts the elements of a list.",
        "D": "Reverses the order of elements in a list.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of 'dictionary comprehension' in Python?",
        "A": "To create dictionaries using a concise syntax.",
        "B": "To modify existing dictionaries.",
        "C": "To retrieve keys from dictionaries.",
        "D": "To iterate through dictionaries.",
        "answer": "A"
    },
    {
        "question": "How do you declare an empty list in Python?",
        "A": "list()",
        "B": "[]",
        "C": "{}",
        "D": "emptyList()",
        "answer": "B"
    },
    {
        "question": "What does the 'sorted()' function do in Python?",
        "A": "Sorts elements in ascending order.",
        "B": "Sorts elements in descending order.",
        "C": "Randomly shuffles elements.",
        "D": "Reverses the order of elements.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'zip()' function in Python?",
        "A": "To combine two lists into a dictionary.",
        "B": "To compress files into a ZIP archive.",
        "C": "To iterate through multiple lists simultaneously.",
        "D": "To unzip files.",
        "answer": "C"
    },
    {
        "question": "What is a 'lambda function' in Python?",
        "A": "A function that can be called without any arguments.",
        "B": "An anonymous function defined with the 'lambda' keyword.",
        "C": "A function that takes a variable number of arguments.",
        "D": "A function that returns another function.",
        "answer": "B"
    },
    {
        "question": "What does the 'pop()' method do in Python lists?",
        "A": "Removes the first element of a list.",
        "B": "Removes the last element of a list.",
        "C": "Removes the specified element from a list.",
        "D": "Returns the last element of a list.",
        "answer": "B"
    },
    {
        "question": "What does HTML stand for?",
        "A": "Hyper Text Markup Language",
        "B": "Highly Typed Markup Language",
        "C": "Hyperlink and Text Markup Language",
        "D": "High Tech Markup Language",
        "answer": "A"
    },

  
    {
        "question": "What does the 'alt' attribute in the &lt;img&gt; tag represent?",
        "A": "Alternative text for the image",
        "B": "Alignment of the image",
        "C": "Animation of the image",
        "D": "Attribute of the image",
        "answer": "A"
    },


    {
        "question": "Which HTML attribute specifies an inline style for an element?",
        "A": "class",
        "B": "style",
        "C": "font",
        "D": "css",
        "answer": "B"
    },

    {
        "question": "What does the HTML &lt;footer&gt; tag represent?",
        "A": "A section at the bottom of a webpage or document",
        "B": "A section that displays footnotes",
        "C": "An area for copyright information",
        "D": "A navigation element",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the HTML &lt;aside&gt; tag?",
        "A": "To define additional content that is related to the main content",
        "B": "To create a sidebar",
        "C": "To indicate an exception or an alternate pathway",
        "D": "To emphasize text",
        "answer": "A"
    },
 
    {
        "question": "What is the purpose of the HTML &lt;nav&gt; tag?",
        "A": "To define a section of navigation links",
        "B": "To create a nested list",
        "C": "To highlight important text",
        "D": "To add a horizontal line",
        "answer": "A"
    },
    {
        "question": "Which attribute is used in HTML to specify the URL of the linked resource?",
        "A": "src",
        "B": "href",
        "C": "link",
        "D": "url",
        "answer": "B"
    },

    {
        "question": "What is the purpose of the HTML &lt;figure&gt; tag?",
        "A": "To define an image",
        "B": "To specify a caption for an image or a figure",
        "C": "To create a table",
        "D": "To insert a video",
        "answer": "B"
    },
   
    {
        "question": "What is the purpose of the HTML <article> tag?",
        "A": "To define an article or a self-contained piece of content",
        "B": "To create a footer",
        "C": "To mark important text",
        "D": "To define a navigation element",
        "answer": "A"
    },
    {
        "question": "Which HTML tag is used to define a section in a document?",
        "A": "<div>",
        "B": "<section>",
        "C": "<area>",
        "D": "<span>",
        "answer": "B"
    },
    {
        "question": "What is the correct HTML for creating a numbered list?",
        "A": "<ol>",
        "B": "<list>",
        "C": "<ul>",
        "D": "<li>",
        "answer": "A"
    },
    {
        "question": "Which attribute is used to provide additional information about an element?",
        "A": "class",
        "B": "id",
        "C": "src",
        "D": "title",
        "answer": "D"
    },
    {
        "question": "What is the purpose of the HTML <em> tag?",
        "A": "To create a highlighted text",
        "B": "To emphasize text",
        "C": "To create a subscript text",
        "D": "To mark deleted text",
        "answer": "B"
    },
    {
        "question": "Which HTML tag is used to display a horizontal line?",
        "A": "<line>",
        "B": "<hr>",
        "C": "<break>",
        "D": "<hl>",
        "answer": "B"
    },
    {
        "question": "What does the HTML <iframe> tag define?",
        "A": "An inline frame that embeds another document within the current HTML document",
        "B": "An image",
        "C": "A section of navigation links",
        "D": "A footer",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the HTML <strong> tag?",
        "A": "To define a section of strong importance",
        "B": "To create a bold text",
        "C": "To create a heading",
        "D": "To mark an important text",
        "answer": "B"
    },
    {
        "question": "Which attribute is used in the <img> tag to specify an alternative text for an image?",
        "A": "alt",
        "B": "title",
        "C": "src",
        "D": "href",
        "answer": "A"
    },
    {
        "question": "What HTML tag is used to define the navigation links in a document?",
        "A": "<nav>",
        "B": "<links>",
        "C": "<navigate>",
        "D": "<navigation>",
        "answer": "A"
    },
    {
        "question": "What does CSS stand for?",
        "A": "Cascading Style Sheets",
        "B": "Creative Style Sheets",
        "C": "Computer Style Sheets",
        "D": "Coded Style Sheets",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to change the text color of an element?",
        "A": "text-color",
        "B": "color",
        "C": "font-color",
        "D": "text-style",
        "answer": "B"
    },
    {
        "question": "What is the purpose of the 'margin' property in CSS?",
        "A": "To set the space between the border and the content of an element",
        "B": "To set the space outside an element's border",
        "C": "To adjust the size of the text",
        "D": "To set the background of an element",
        "answer": "B"
    },
    {
        "question": "Which CSS property is used to control the size of the font?",
        "A": "font-size",
        "B": "text-size",
        "C": "size",
        "D": "font-style",
        "answer": "A"
    },
    {
        "question": "What does the 'float' property in CSS do?",
        "A": "Aligns an element vertically",
        "B": "Aligns an element horizontally",
        "C": "Wraps text around an element",
        "D": "Creates space between elements",
        "answer": "C"
    },
    {
        "question": "Which CSS property is used to add shadows to elements?",
        "A": "box-shadow",
        "B": "text-shadow",
        "C": "shadow",
        "D": "element-shadow",
        "answer": "A"
    },
    {
        "question": "What does the 'display: inline-block' do in CSS?",
        "A": "Displays an element as an inline-level block container",
        "B": "Displays an element as an inline-level element",
        "C": "Displays an element as a block-level element",
        "D": "Displays an element as a list-item element",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to control the space between lines of text?",
        "A": "line-height",
        "B": "text-spacing",
        "C": "line-spacing",
        "D": "text-height",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'padding' property in CSS?",
        "A": "To set the space between the border and the content of an element",
        "B": "To set the space outside an element's border",
        "C": "To adjust the size of the text",
        "D": "To set the background of an element",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to change the background color of an element?",
        "A": "background-color",
        "B": "bg-color",
        "C": "color-background",
        "D": "element-background",
        "answer": "A"
    },
    {
        "question": "What does the 'position: relative' property do in CSS?",
        "A": "Positions an element relative to its normal position",
        "B": "Positions an element relative to the viewport",
        "C": "Fixes an element's position on the screen",
        "D": "Positions an element absolutely within its parent element",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to create rounded corners?",
        "A": "border-radius",
        "B": "rounded-corners",
        "C": "corner-radius",
        "D": "box-radius",
        "answer": "A"
    },
    {
        "question": "What does the 'z-index' property in CSS control?",
        "A": "The transparency of an element",
        "B": "The depth of an element along the z-axis",
        "C": "The color of an element",
        "D": "The rotation of an element",
        "answer": "B"
    },
    {
        "question": "Which CSS property is used for changing the font of an element?",
        "A": "text-style",
        "B": "font-family",
        "C": "typeface",
        "D": "font-style",
        "answer": "B"
    },
    {
        "question": "What is the purpose of the 'box-sizing' property in CSS?",
        "A": "To specify the border style of an element",
        "B": "To control the sizing of an element's box model",
        "C": "To set the box shadow of an element",
        "D": "To specify the box model for a flex container",
        "answer": "B"
    },
    {
        "question": "Which CSS property is used to control the transparency of an element?",
        "A": "opacity",
        "B": "transparency",
        "C": "visibility",
        "D": "translucency",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'overflow' property in CSS?",
        "A": "To hide the overflow content of an element",
        "B": "To specify the overflow behavior of an element's box",
        "C": "To control the floating elements within a container",
        "D": "To manage the layout of overlapping elements",
        "answer": "B"
    },
    {
        "question": "Which CSS property is used to apply a border to an element?",
        "A": "line",
        "B": "border",
        "C": "outline",
        "D": "stroke",
        "answer": "B"
    },
    {
        "question": "What does the 'flex-direction' property in CSS control?",
        "A": "The direction of the flex container's main axis",
        "B": "The direction of the flex items within a container",
        "C": "The spacing between flex items",
        "D": "The alignment of flex items",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to change the size of an element's text?",
        "A": "font-size",
        "B": "text-size",
        "C": "element-size",
        "D": "size",
        "answer": "A"
    },
    {
        "question": "What does the CSS property 'transition' do?",
        "A": "It specifies the duration and timing function of an element's transition effect",
        "B": "It sets the transformation values of an element",
        "C": "It creates a shadow effect for an element",
        "D": "It determines the layout of child elements within a container",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to change the style of an underline on a link?",
        "A": "text-decoration-style",
        "B": "text-decoration-line",
        "C": "text-decoration-color",
        "D": "text-decoration",
        "answer": "B"
    },
    {
        "question": "What is the purpose of the CSS 'flex' property?",
        "A": "It sets the flex-grow, flex-shrink, and flex-basis properties for a flex item",
        "B": "It defines the flex-grow value for a flex container",
        "C": "It determines the font size of an element",
        "D": "It aligns flex items along the cross-axis",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to set the background image of an element?",
        "A": "background-image",
        "B": "image",
        "C": "background",
        "D": "background-picture",
        "answer": "A"
    },
    {
        "question": "What does the CSS property 'transform' do?",
        "A": "It specifies the spacing between lines of text",
        "B": "It changes the shape, size, or position of an element",
        "C": "It sets the transition effect for an element",
        "D": "It adjusts the opacity of an element",
        "answer": "B"
    },
    {
        "question": "What is the purpose of the 'box-shadow' property in CSS?",
        "A": "To apply a shadow effect around an element's border box",
        "B": "To adjust the spacing between elements",
        "C": "To create rounded corners for an element",
        "D": "To set the background shadow of an element",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to change the space between characters in a text?",
        "A": "letter-spacing",
        "B": "word-spacing",
        "C": "text-spacing",
        "D": "character-spacing",
        "answer": "A"
    },
    {
        "question": "What does the 'box-sizing: border-box' property do in CSS?",
        "A": "It includes the padding and border in an element's total width and height",
        "B": "It sets the box model to use the content-box sizing",
        "C": "It adds extra padding to an element",
        "D": "It adjusts the border size of an element",
        "answer": "A"
    },
    {
        "question": "Which CSS property is used to set the style of the cursor?",
        "A": "cursor-style",
        "B": "mouse-style",
        "C": "pointer-style",
        "D": "cursor",
        "answer": "D"
    },
    {
        "question": "What does the 'text-transform' property do in CSS?",
        "A": "It transforms the font of text within an element",
        "B": "It changes the color of the text",
        "C": "It transforms the text to uppercase, lowercase, or capitalized",
        "D": "It adjusts the text alignment within an element",
        "answer": "C"
    },
    {
        "question": "What is Java?",
        "A": "A scripting language",
        "B": "A markup language",
        "C": "An object-oriented programming language",
        "D": "A database management system",
        "answer": "C"
    },
    {
        "question": "Which keyword is used to define a constant in Java?",
        "A": "let",
        "B": "constant",
        "C": "final",
        "D": "const",
        "answer": "C"
    },
    {
        "question": "What is the main difference between a class and an object in Java?",
        "A": "A class is a blueprint, and an object is an instance of a class.",
        "B": "A class contains methods, and an object contains variables.",
        "C": "A class is used for inheritance, and an object is used for encapsulation.",
        "D": "A class is used for loops, and an object is used for conditional statements.",
        "answer": "A"
    },
    {
        "question": "Which Java keyword is used to define a subclass?",
        "A": "inherits",
        "B": "extends",
        "C": "sub",
        "D": "subclass",
        "answer": "B"
    },
    {
        "question": "What is the 'main' method in Java?",
        "A": "The primary method that starts the execution of a Java program",
        "B": "A method used for mathematical operations",
        "C": "A method used for debugging purposes",
        "D": "A method used to access private variables",
        "answer": "A"
    },
    {
        "question": "Which data type is used to store a single character in Java?",
        "A": "char",
        "B": "character",
        "C": "letter",
        "D": "chr",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'static' keyword in Java?",
        "A": "To define variables that belong to the class itself, rather than to instances of the class",
        "B": "To define variables that can only be accessed within a specific method",
        "C": "To prevent inheritance of a class",
        "D": "To declare a method as final",
        "answer": "A"
    },
    {
        "question": "Which statement is used to terminate the current loop iteration in Java?",
        "A": "continue",
        "B": "exit",
        "C": "break",
        "D": "stop",
        "answer": "C"
    },
    {
        "question": "What does the 'this' keyword refer to in Java?",
        "A": "The previous object in memory",
        "B": "The next object in memory",
        "C": "The current instance of the class",
        "D": "A reserved keyword",
        "answer": "C"
    },
    {
        "question": "Which exception is thrown when an array is accessed with an illegal index?",
        "A": "ArrayIndexOutOfBoundsException",
        "B": "IllegalIndexException",
        "C": "ArrayOutOfRangeException",
        "D": "IndexOutOfBoundsException",
        "answer": "A"
    },
    {
        "question": "What is the difference between '==' and '.equals()' in Java?",
        "A": "'==' compares object references, while '.equals()' compares object contents.",
        "B": "'==' compares primitive types, while '.equals()' compares object references.",
        "C": "'==' is used for arithmetic operations, while '.equals()' is used for string manipulation.",
        "D": "'==' and '.equals()' are identical in their functionality.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'super' keyword in Java?",
        "A": "To access the superclass constructor or members in a subclass",
        "B": "To invoke private methods of the superclass",
        "C": "To override a method in a superclass",
        "D": "To declare a superclass",
        "answer": "A"
    },
    {
        "question": "What does the 'final' keyword do in Java?",
        "A": "It prevents a class from being extended, a method from being overridden, or a variable from being reassigned.",
        "B": "It specifies that a class must be inherited, a method must be overridden, or a variable must be accessed.",
        "C": "It signifies the beginning of a loop or iteration.",
        "D": "It allows access to private members of a class.",
        "answer": "A"
    },
    {
        "question": "What is a Java interface?",
        "A": "A collection of methods and variables that are already defined.",
        "B": "A way to implement multiple inheritance in Java.",
        "C": "A blueprint of a class that can be instantiated.",
        "D": "A contract that defines a set of methods to be implemented by a class.",
        "answer": "D"
    },
    {
        "question": "What is the purpose of the 'try', 'catch', and 'finally' blocks in Java?",
        "A": "To handle exceptions: 'try' for code that might throw an exception, 'catch' for handling the exception, and 'finally' for cleanup.",
        "B": "To control loops and iterations in Java.",
        "C": "To define access levels for classes, methods, and variables.",
        "D": "To specify different types of variables in Java.",
        "answer": "A"
    },
    {
        "question": "What does the 'static' keyword mean for a Java method?",
        "A": "The method belongs to the class rather than to any specific instance of the class.",
        "B": "The method can be accessed only within the same package.",
        "C": "The method is accessible without creating an instance of the class.",
        "D": "The method cannot be overridden.",
        "answer": "A"
    },
    {
        "question": "What is method overloading in Java?",
        "A": "Creating multiple methods with the same name but different parameters within the same class.",
        "B": "Creating methods that perform the same operation on different classes.",
        "C": "Using a method from a superclass in a subclass.",
        "D": "Defining methods in the superclass and allowing subclasses to override them.",
        "answer": "A"
    },
    {
        "question": "What is a constructor in Java?",
        "A": "A method that is used to destroy objects.",
        "B": "A method used to create objects of a class.",
        "C": "A method used to access private members of a class.",
        "D": "A reserved keyword in Java.",
        "answer": "B"
    },
    {
        "question": "What does the 'break' statement do in Java?",
        "A": "Terminates the execution of a loop or a switch statement.",
        "B": "Skips the current iteration of a loop and continues with the next iteration.",
        "C": "Exits the program.",
        "D": "Throws an exception.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'instanceof' operator in Java?",
        "A": "It checks whether an object is an instance of a specific class or its subclasses.",
        "B": "It checks if a variable is uninitialized.",
        "C": "It compares two objects for equality.",
        "D": "It checks if a variable is of primitive data type.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'toString()' method in Java?",
        "A": "It converts a string to an integer.",
        "B": "It converts an object to its string representation.",
        "C": "It converts a string to uppercase.",
        "D": "It converts a string to its ASCII value.",
        "answer": "B"
    },
    {
        "question": "What is a Java package?",
        "A": "A collection of related classes and interfaces.",
        "B": "A folder used to store images and media files.",
        "C": "A database used to store Java code.",
        "D": "A container for user input in Java.",
        "answer": "A"
    },
    {
        "question": "What is the difference between 'ArrayList' and 'LinkedList' in Java?",
        "A": "ArrayList is a resizable array, while LinkedList is a doubly linked list.",
        "B": "ArrayList allows faster access to elements, while LinkedList allows faster insertion and deletion.",
        "C": "ArrayList implements the List interface, while LinkedList implements the Collection interface.",
        "D": "There is no difference between ArrayList and LinkedList.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'Comparator' interface in Java?",
        "A": "To compare objects based on their natural ordering.",
        "B": "To provide a default comparison method for objects.",
        "C": "To sort elements of a collection based on a specified order.",
        "D": "To perform mathematical computations.",
        "answer": "C"
    },
    {
        "question": "What does the 'abstract' keyword indicate in Java?",
        "A": "The method is incomplete and must be implemented in a subclass.",
        "B": "The method is static and cannot be overridden.",
        "C": "The method is final and cannot be modified.",
        "D": "The method is private and cannot be accessed outside the class.",
        "answer": "A"
    },
    {
        "question": "What is the purpose of the 'super()' method in Java?",
        "A": "To call the superclass constructor.",
        "B": "To invoke a method of the superclass.",
        "C": "To initialize the superclass variables.",
        "D": "There is no 'super()' method in Java.",
        "answer": "A"
    },
    {
        "question": "What is a Java annotation?",
        "A": "A comment that provides information about code.",
        "B": "A form of looping structure in Java.",
        "C": "A marker added to classes, methods, or variables to convey metadata.",
        "D": "A type of exception in Java.",
        "answer": "C"
    },
    {
        "question": "What is the 'volatile' keyword used for in Java?",
        "A": "To prevent a class from being extended.",
        "B": "To ensure that only one thread accesses a variable's value.",
        "C": "To define a constant value.",
        "D": "To declare a method as final.",
        "answer": "B"
    },
    {
        "question": "What is a Java Lambda Expression?",
        "A": "A method that doesn't have a name.",
        "B": "A block of code used to handle exceptions.",
        "C": "An anonymous function used to create instances of classes.",
        "D": "A type of loop structure in Java.",
        "answer": "C"
    },
    {
        "question": "What does the 'instanceof' operator do in Java?",
        "A": "Checks if a variable is uninitialized.",
        "B": "Checks if two objects are equal.",
        "C": "Checks if a variable is of a particular type.",
        "D": "Checks if a variable is of a primitive data type.",
        "answer": "C"
    },


  ]
  export default data;