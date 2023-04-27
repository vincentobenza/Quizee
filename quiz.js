
const frontpage = document.querySelector('.startbtn')
const startbtn = frontpage.querySelector('button');
const infobox = document.querySelector('.infobox');
const exitbtn = infobox.querySelector('.quit');
const continuebtn = infobox.querySelector('.restart');
const quizpage = document.querySelector('.quizbox');
const resultpage = document.querySelector('.resultbox');
const replay = resultpage.querySelector('.restart');
const quit = resultpage.querySelector('.quit');
const nextques = quizpage.querySelector('.nextbtn');
const timer = document.getElementById('timeleft');
const curr_score = document.getElementById('editscore');

let score = 0;
let quesno = 0;
let time_left = 15;
let timeout_id = 0;
let timeinterval_id = 0;



const quizlist = [
    {
        //1.
        ques: "What does HTML stand for ?",
        ans: "Hyper Text Markup Language",
        opt1: "Hyper Text Markup Language",
        opt2: "Hyper Text Transfer Protocol",
        opt3: "Hyper Text Multiple Language",
        opt4: "Hyper Tool Markup Language"
    },
    {
        //2.
        ques: "Which of the following is not a Computer Programming Language",
        ans:  "Microsoft Word",
        opt1: "Python ",
        opt2: "JavaScript",
        opt3: "Microsoft Word",
        opt4: "PHP"
    },
    {
        //3.
        ques: "HTML is considered as ______ ?",
        ans:  "Markup Language",
        opt1: "Programming Language",
        opt2: "OOP language",
        opt3: "High level language",
        opt4: "Markup Language"
    },
    {
        //4.
        ques: "HTML uses ______?",
        ans:  "Fixed tags defined by the language",
        opt1: "User-defined tags",
        opt2: "Predefined tags",
        opt3: "Fixed tags defined by the language",
        opt4: "Tags for links only"
    },
    {
        //5.
        ques: "HTML was first proposed in ___.",
        ans:  "1990",
        opt1: "1980",
        opt2: "1990",
        opt3: "1995",
        opt4: "2000"
    },
    {
        //6.
        ques: "Which of the following is not a browser?",
        ans:  "Microsoft Bing",
        opt1: "Mozilla Firefox",
        opt2: "Netscape",
        opt3: "Microsoft Bing",
        opt4: "Opera"
    },
    {
        //7.
        ques: "Who is the main author of the HTML?",
        ans:  "Tim Berners-Lee",
        opt1: "Brendan Eich",
        opt2: "Tim Berners-Lee",
        opt3: "Web developer",
        opt4: "Google Inc"
    },
    {
        //8.
        ques: "If we want to set the style for just one element, which css selector will we use?",
        ans:  "id",
        opt1: "text",
        opt2: "id",
        opt3: "class",
        opt4: "name"
    },
    {
        //9.
        ques: "The HTML tag that specifies a CSS style embedded in an element is called ____?",
        ans:  "Style",
        opt1: "Design",
        opt2: "Style",
        opt3: "Modify",
        opt4: "Define"
    },
    {
        //10.
        ques: "The HTML standard which does not require double quotes around the values of an attribute is called ______?",
        ans:  "HTML 5",
        opt1: "HTML 1",
        opt2: "HTML 3",
        opt3: "HTML 5",
        opt4: "HTML 7"
    },
    {
        //11.
        ques: "A stricter type of HTML document is known as ______?",
        ans:  "XHTML",
        opt1: "DHTML",
        opt2: "XHTML",
        opt3: "XML",
        opt4: "HTML"
    },
    {
        //12.
        ques: "An HTML document can contain _____",
        ans:  "All the answers are true",
        opt1: "Attributes",
        opt2: "Tags",
        opt3: "Raw text",
        opt4: "All the answers are true"
    },
    {
        //13.
        ques: "A page designed in HTML is called _____",
        ans:  "Web Page",
        opt1: "Application",
        opt2: "Cover page",
        opt3: "Front-end",
        opt4: "Web Page"
    },
    {
        //14.
        ques: "An HTML document is saved with the ____ extension.",
        ans:  ".html",
        opt1: ".htl",
        opt2: ".html",
        opt3: ".hml",
        opt4: ".htnl"
    },
    {
        //15.
        ques: "The HTML document contains a root tag called ____",
        ans:  "HTML",
        opt1: "HEAD",
        opt2: "Title",
        opt3: "Body",
        opt4: "HTML"
    },
    {
        //16.
        ques: "Choose the correct HTML tag for a large title.",
        ans:  "H1",
        opt1: "H1",
        opt2: "Heading",
        opt3: "Head",
        opt4: "H6"
    },
    {
        //17.
        ques: "If we want to use a nice green dotted border around an image, which css property are we going to use?",
        ans:  "border-style",
        opt1: "border-style",
        opt2: "border-decoration",
        opt3: "border-color",
        opt4: "border-line"
    },
    {
        //18.
        ques: "CSS is an acronym for _____",
        ans:  "Cascading Style Sheet",
        opt1: "Cascading Style Sheet",
        opt2: "Costume Style Sheet",
        opt3: "Cascading System Style",
        opt4: "None of the above"
    },
    {
        //19.
        ques: "Which of the following protocols is not used on the Internet?",
        ans:  "WIRL",
        opt1: "Gopher",
        opt2: "HTTP",
        opt3: "WIRL",
        opt4: "Telnet"
    },
    {
        //20.
        ques: "The internal clock in JavaScript counts from midnight _____.?",
        ans:  "January 1, 1970",
        opt1: "January 1, 1972",
        opt2: "January 1, 1947",
        opt3: "January 1, 1980",
        opt4: "January 1, 1970"
    },
    {
        //21.
        ques: "What attribute can be added to many HTML/XHTML elements to identify them as a member of a specific group?",
        ans:  "class",
        opt1: "Id",
        opt2: "class",
        opt3: "div",
        opt4: "span"
    },
    {
        //22.
        ques: "DNS translates __________",
        ans:  "the domain name as IP address",
        opt1: "IP address as a domain name",
        opt2: "the domain name as IP address",
        opt3: "Both A and B are true.",
        opt4: "the domain name as physical address (MAC)"
    },
    {
        //23.
        ques: "Which tag is used to list items with bullets?",
        ans:  "ul",
        opt1: "bullet",
        opt2: "list",
        opt3: "ul",
        opt4: "ol"
    },
    {
        //24.
        ques: "The first page of a website is called _____.",
        ans:  "Home page",
        opt1: "Design page",
        opt2: "Home page",
        opt3: "Front page",
        opt4: "Main page"
    },
    {
        //25.
        ques: "Which of the following is correct about features of JavaScript?",
        ans:  "All of the above",
        opt1: "JavaScript is a lightweight, interpreted programming language.",
        opt2: "JavaScript is designed for creating network-centric applications.",
        opt3: "JavaScript is complementary to and integrated with Java",
        opt4: "All of the above"
    },
    {
        //26.
        ques: "JavaScript is the programming language of the _____.",
        ans:  "Web",
        opt1: "Desktop",
        opt2: "Mobile",
        opt3: "Web",
        opt4: "Server"
    },
    {
        //27.
        ques: "Which type of JavaScript language is _____?",
        ans:  "Object-based",
        opt1: "Object-oriented",
        opt2: "Object-based",
        opt3: "Functional programming",
        opt4: "All of the above"
    },
    {
        //28.
        ques: "Which of the following statement(s) is true about the JavaScript?",
        ans:  "It is a scripting language used to make the website interactive",
        opt1: "It is a scripting language used to make the website interactive",
        opt2: "It is an advanced version of Java for Desktop and Mobile application development",
        opt3: "It is a markup language of Java to develop the webpages",
        opt4: "All of the above"
    },
    {
        //29.
        ques: "Which JavaScript method is used to convert a date to a UTC string (a date display standard)?",
        ans:  "toUTCString()",
        opt1: "toUtcString()",
        opt2: "utcString()",
        opt3: "toUTCString()",
        opt4: "toutcstring()"
    },
    {
        //30.
        ques: "JavaScript code can be written in ____.",
        ans:  "JavaScript file and in HTML document directly",
        opt1: "JavaScript file (.js file)",
        opt2: "HTML document directly",
        opt3: "JavaScript file and in HTML document directly",
        opt4: "In style sheets (.css file)"
    },
    {
        //31.
        ques: "Which symbol is used separate JavaScript statements?",
        ans:  "Semicolon (;)",
        opt1: "Comma (,)",
        opt2: "Colon (:)",
        opt3: "Hyphen (_)",
        opt4: "Semicolon (;)"
    },
    {
        //32.
        ques: "JavaScript ignores?",
        ans:  "All of the above",
        opt1: "newlines",
        opt2: "tabs",
        opt3: "spaces",
        opt4: "All of the above"
    },
    {
        //33.
        ques: "Which JavaScript method is used to access an HTML element by id?",
        ans:  "getElementById(id)",
        opt1: "getElementById()",
        opt2: "getElement(id)",
        opt3: "getElementById(id)",
        opt4: "elementById(id)"
    },
    {
        //34.
        ques: "Which JavaScript method is used to write HTML output?",
        ans:  "document.write()",
        opt1: "document.output()",
        opt2: "document.write()",
        opt3: "console.log()",
        opt4: "document.writeHTML()"
    },
    {
        //35.
        ques: "Which JavaScript method is used to write on browser's console?",
        ans:  "console.log()",
        opt1: "console.write()",
        opt2: "console.output()",
        opt3: "console.log()",
        opt4: "console.writeHTML()"
    },
    {
        //36.
        ques: "In JavaScript, single line comment begins with ___.",
        ans:  "//",
        opt1: "#",
        opt2: "$",
        opt3: "/",
        opt4: "//"
    },
    {
        //37.
        ques: "Which JavaScript keyword is used to declare a variable?",
        ans:  "var",
        opt1: "Var",
        opt2: "Let",
        opt3: "var",
        opt4: "All of the above"
    },
    {
        //38.
        ques: "How many keywords are there in JavaScript to declare variables or constants?",
        ans:  "3",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4"
    },
    {
        //39.
        ques: "The const keyword is used to define a ______.",
        ans:  "Constant",
        opt1: "Function scopes variable",
        opt2: "Block scoped variable",
        opt3: "Constant",
        opt4: "Constant with no initial value"
    },
    {
        //40.
        ques: "Which is the correct syntax to declare a constant in JavaScript?",
        ans:  "const constant_name = value;",
        opt1: "const constant_name;",
        opt2: "constant_name const;",
        opt3: "constant_name const = value;",
        opt4: "const constant_name = value;"
    },
    {
        //41.
        ques: "Which is the exponentiation operator in JavaScript?",
        ans:  "**",
        opt1: "exp()",
        opt2: "^",
        opt3: "**",
        opt4: "pow"
    },
    {
        //42.
        ques: "JavaScript arrays are written with _____.",
        ans:  "square brackets []",
        opt1: "round brackets ()",
        opt2: "curly brackets {}",
        opt3: "double quotes",
        opt4: "square brackets []"
    },
    {
        //43.
        ques: "Which JavaScript operator is used to determine the type of a variable?",
        ans:  "typeof",
        opt1: "typeof",
        opt2: "TypeOf",
        opt3: "typeOf",
        opt4: "sizeof"  
    },
    {
        //44.
        ques: "Which is the correct syntax of JavaScript typeof operator?",
        ans:  "Both A. and B.",
        opt1: "typeof variable/value",
        opt2: "typeof(variable/value)",
        opt3: "Both A. and B.",
        opt4: "None of the above"
    },
    {
        //45.
        ques: "Which keyword is used to define a JavaScript function?",
        ans:  "function",
        opt1: "module",
        opt2: "fun",
        opt3: "func",
        opt4: "function"
    },
    {
        //46.
        ques: "In JavaScript a variable contains one value while an object may contain ___.",
        ans:  "Many values",
        opt1: "One value",
        opt2: "Two values",
        opt3: "Three values",
        opt4: "Many values"
    },
    {
        //47.
        ques: "Which is the correct syntax to access an object property in JavaScript?",
        ans:  "Both B. and C.",
        opt1: "objectName:propertyName",
        opt2: "propertyName",
        opt3: "objectName propertyName",
        opt4: "Both B. and C."
    },
    {
        //48.
        ques: "Which property is used to get the length of a string in JavaScript?",
        ans:  "length",
        opt1: "strlen",
        opt2: "len",
        opt3: "length",
        opt4: "Length"
    },
    {
        //49.
        ques: "Which character is used to break up a code line within a text string in JavaScript?",
        ans:  "Single backslash",
        opt1: "Single quote",
        opt2: "Single backslash",
        opt3: "Double quote",
        opt4: "Tipple single quote"
    },
    {
        //50.
        ques: "Which JavaScript method is used to get a number as a string?",
        ans:  "toString()",
        opt1: "toString()",
        opt2: "intToString()",
        opt3: "parseInteger()",
        opt4: "All of the above"
    },
    {
        //51.
        ques: "For a particular font its size attribute can be an absolute value ranging form.",
        ans:  "1-10",
        opt1: "1-10",
        opt2: "1-9",
        opt3: "1-8",
        opt4: "1-7"
    },
    {
        //52.
        ques: "The Major components of the Web browser are _",
        ans:  "All Of the Above.",
        opt1: "Menu Bar.",
        opt2: "ToolBar.",
        opt3: "Location",
        opt4: "All Of the Above."
    },
    {
        //53.
        ques: "The _ element can be used to identify your html file to the outside world.",
        ans:  "none of the above",
        opt1: "title",
        opt2: "body",
        opt3: "head",
        opt4: "none of the above"
    },
    {
        //54.
        ques: ". Which of the following tags do not require a terminator?",
        ans:  "none of the above",
        opt1: "u",
        opt2: "br",
        opt3: "b",
        opt4: "none of the above"
    },
    {
        //55.
        ques: "Which element has very similar properties to the DIV element?",
        ans:  "span",
        opt1: "strong",
        opt2: "span",
        opt3: "table",
        opt4: "All the answers are true"
    },
    {
        //56.
        ques: "HTML web pages can be read and rendered by the _________.",
        ans:  "Web browser",
        opt1: "Compiler",
        opt2: "Server",
        opt3: "Web browser",
        opt4: "Interpreter"
    },
    {
        //57.
        ques: "Which of the following is not an attribute of the <form> tag",
        ans:  "url",
        opt1: "action",
        opt2: "method",
        opt3: "name",
        opt4: "url"
    },
    {
        //58.
        ques: "HTML is a subset of ______ ?",
        ans:  "SGML",
        opt1: "SGMD",
        opt2: "SGMT",
        opt3: "None of the above",
        opt4: "SGML"
    },
    {
        //59.
        ques: "What is the latest version of CSS available?",
        ans:  "CSS3",
        opt1: "CSS2",
        opt2: "CSS3",
        opt3: "CSS3.1",
        opt4: "CSS4"
    },
    {
        //60.
        ques: "Which of the following properties defines the font size of the text?",
        ans:  "font-size",
        opt1: "text-size",
        opt2: "font-size",
        opt3: "size",
        opt4: "text"
    },
    {
        //61.
        ques: "Which of the following properties defines the spacing between letters?",
        ans:  "letter-spacing",
        opt1: "space",
        opt2: "line-height",
        opt3: "letter-spacing",
        opt4: "None of the above"
    },
    {
        //62.
        ques: "GIF means _______________",
        ans:  "Graphics Interchange Format",
        opt1: "Graph Interchange Format",
        opt2: "Graphics Interlinked Format",
        opt3: "Graphics Interchange Format",
        opt4: "None of the above"
    },
    {
        //63.
        ques: "Which of the following CSS selectors selects an element that does not have sub-elements?",
        ans:  ":empty",
        opt1: ":empty",
        opt2: ":nochild",
        opt3: ":inheritance",
        opt4: ":no-child"
    },
    {
        //64.
        ques: "In css, what h1 can be called as ______",
        ans:  "Selector",
        opt1: "Selector",
        opt2: "Attribute",
        opt3: "Value",
        opt4: "Label"
    },
    {
        //65.
        ques: "In css, what can “color:red” be called?",
        ans:  "Declaration",
        opt1: "Rule",
        opt2: "Attribute",
        opt3: "Value",
        opt4: "Declaration"
    },
    {
        //66.
        ques: "How to create a function in JavaScript?",
        ans:  "function f()",
        opt1: "function f()",
        opt2: "function = f()",
        opt3: "function:f()",
        opt4: "None of the above"
    },
    {
        //67.
        ques: "How many parameters can be passed to a function?",
        ans:  "One for each argument",
        opt1: "Any",
        opt2: "As much as you want",
        opt3: "One for each argument",
        opt4: "One argument"
    },
    {
        //68.
        ques: "Which of these parameters is not valid?",
        ans:  "an operator",
        opt1: "text",
        opt2: "a variable",
        opt3: "an operator",
        opt4: "a number"
    },
    {
        //69.
        ques: "Which event is specific to the keyboard?",
        ans:  "onkeypress",
        opt1: "onkeypress",
        opt2: "onkeydown",
        opt3: "onclick",
        opt4: "onfocus"
    },
    {
        //70.
        ques: "What event do you use to perform something after the page has finished loading?",
        ans:  "onload",
        opt1: "onfinished",
        opt2: "onload",
        opt3: "onunload",
        opt4: "oncomplete"
    },
    {
        //71.
        ques: "Which keyword catches all values except those specified?",
        ans:  "default",
        opt1: "all",
        opt2: "any",
        opt3: "default",
        opt4: "otherwise"
    },
    {
        //72.
        ques: "Which of the following is not a property of window object?",
        ans:  "menu",
        opt1: "document",
        opt2: "menu",
        opt3: "navigator",
        opt4: "history"
    },
    {
        //73.
        ques: "Which declaration provides the value of a function?",
        ans:  "return",
        opt1: "return",
        opt2: "cancel",
        opt3: "continue",
        opt4: "valueOf"
    },
    {
        //74.
        ques: "Which property is object oriented?",
        ans:  "variable",
        opt1: "function",
        opt2: "if statement",
        opt3: "variable",
        opt4: "keyword"
    },
    {
        //75.
        ques: "You are working on a JavaScript project. How do I request inputs from the user?",
        ans:  "Prompt()",
        opt1: "Alert()",
        opt2: "Display()",
        opt3: "Prompt()",
        opt4: "Display()"
    },


];


const pressed = (curr_id) => {

    curr_text = document.getElementById(curr_id);

    for (let i = 0; i < optlist.length; i++) {
        if (optlist[i].textContent == curr.ans) {
            optlist[i].setAttribute("style", "background-color: #3ab251;");
        }
    }

    if (curr_text.textContent != curr.ans) {
        curr_text.setAttribute("style", "background-color: #fa2626;");
    }
    else {
        score += 1;
    }
    document.getElementById('1').style.pointerEvents = "none";
    document.getElementById('2').style.pointerEvents = "none";
    document.getElementById('3').style.pointerEvents = "none";
    document.getElementById('4').style.pointerEvents = "none";
}






    const loadques = () => {

    let curr_ques_no = document.getElementById('currquesno');
    optlist = quizpage.querySelectorAll('.option');

    let random_ques_no = parseInt(Math.random() * quizlist.length);
    curr = quizlist[random_ques_no];

    let average = document.getElementById("averageTxt");
    let cgr = document.getElementById("cgrTxt");


    document.getElementById('1').style.pointerEvents = "auto";
    document.getElementById('2').style.pointerEvents = "auto";
    document.getElementById('3').style.pointerEvents = "auto";
    document.getElementById('4').style.pointerEvents = "auto";


    for (let i = 0; i < optlist.length; i++) {

        optlist[i].setAttribute("style", "color:white");

    }

    if (quesno == 75) {
        quizpage.classList.remove('show');
        resultpage.classList.add('show');
        curr_score.innerText = "Hello your score is " + score;

    
        if(score >= 35){
            cgr.innerHTML = "Congratulations!";
            cgr.style.color = "#f8e777"
        }
        else{
            cgr.innerHTML = "Try it Again!";
            cgr.style.color = "#f95a64"
        }
    
        let averageText = (score * 100) / 50;
        average.innerHTML = "Your average is " + averageText + "%";

    }

    else {
        let curr_ques = quizpage.querySelector('.ques');
        if (quesno == 74){
            nextques.innerHTML = "Submit Quiz"
        }

        curr_ques.textContent = curr.ques;

        optlist[0].innerHTML = curr.opt1;
        optlist[1].innerHTML = curr.opt2;
        optlist[2].innerHTML = curr.opt3;
        optlist[3].innerHTML = curr.opt4;
       }

    curr_ques_no.innerHTML = quesno + 1;


}

startbtn.addEventListener('click', () => {
    frontpage.classList.add('hide');
    infobox.classList.add('show');
});

exitbtn.addEventListener('click', () => {
    infobox.classList.remove('show');
    frontpage.classList.remove('hide');
});

continuebtn.addEventListener('click', () => {
    infobox.classList.remove('show');
    quizpage.classList.add('show');
    loadques();
});


replay.addEventListener('click', () => {
    quesno = 0;
    score = 0;
    nextques.innerHTML = "Next"
    console.log('replay button clicked');
    resultpage.classList.remove('show');
    quizpage.classList.add('show');
    loadques();

});

quit.addEventListener('click', () => {
    nextques.innerHTML = "Next"
    quesno = 0;
    score = 0;
    resultpage.classList.remove('show');
    frontpage.classList.remove('hide');

});

nextques.addEventListener('click', callQues = () => {
    quesno += 1;
    loadques();
});





