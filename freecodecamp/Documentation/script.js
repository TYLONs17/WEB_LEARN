document.addEventListener("DOMContentLoaded", function() {
        //for Hello world
    const jsCode_HelloWorld = `function greetMe(yourName) { alert("Hello " + yourName);}
    greetMe("World");`;
    const codeContainer1 = document.getElementById("jsCode_HelloWorld");
    codeContainer1.textContent = jsCode_HelloWorld;


        //for Declaring variables
    const jsCode_varKeyword = `var x = 42.`;
    const codeContainer2 = document.getElementById("jsCode_varKeyword");
    codeContainer2.textContent = jsCode_varKeyword;
        //for Declaring variables
    const jsCode_assignValue = `x = 42.`;
    const codeContainer3 = document.getElementById("jsCode_assignValue");
    codeContainer3.textContent = jsCode_assignValue;
        //for Declaring variables
    const jsCode_letKeyword = `let y = 13.`;
    const codeContainer4 = document.getElementById("jsCode_letKeyword");
    codeContainer4.textContent = jsCode_letKeyword;


        //for Variable scope
    const jsCode_Globalvar = `if (true) { var x = 5; } console.log(x); // 5`;
    const codeContainer5 = document.getElementById("jsCode_Globalvar");
    codeContainer5.textContent = jsCode_Globalvar;
        //for Variable scope
    const jsCode_Globallet = `if (true) { let y = 5; } console.log(y); // ReferenceError: y is
not defined`;
    const codeContainer6 = document.getElementById("jsCode_Globallet");
    codeContainer6.textContent = jsCode_Globallet;


        //for Constants
    const jsCode_const1 = `const PI = 3.14;`;
    const codeContainer7 = document.getElementById("jsCode_const1");
    codeContainer7.textContent = jsCode_const1;
        //for Constants
    const jsCode_const2 = `// THIS WILL CAUSE AN ERROR function f() {}; const f = 5; // THIS
WILL CAUSE AN ERROR ALSO function f() { const g = 5; var g;
//statements }`;
    const codeContainer8 = document.getElementById("jsCode_const2");
    codeContainer8.textContent = jsCode_const2;
        //for Constants
    const jsCode_const3 = `const MY_OBJECT = {"key": "value"}; MY_OBJECT.key =
"otherValue";`;
    const codeContainer9 = document.getElementById("jsCode_const3");
    codeContainer9.textContent = jsCode_const3;


        //for if...else statements
    const jsCode_if1 = `if (condition) { statement_1; } else { statement_2; }`;
    const codeContainer10 = document.getElementById("jsCode_if1");
    codeContainer10.textContent = jsCode_if1;
        //for if...else statements
    const jsCode_if2 = `if (condition_1) { statement_1; } else if (condition_2) {
statement_2; } else if (condition_n) { statement_n; } else {
statement_last; }`;
    const codeContainer11 = document.getElementById("jsCode_if2");
    codeContainer11.textContent = jsCode_if2;
        //for if...else statements
    const jsCode_if3 = `if (condition) { statement_1_runs_if_condition_is_true;
statement_2_runs_if_condition_is_true; } else {
statement_3_runs_if_condition_is_false;
statement_4_runs_if_condition_is_false; }`;
    const codeContainer12 = document.getElementById("jsCode_if3");
    codeContainer12.textContent = jsCode_if3;
        //for if...else statements
    const jsCode_if4 = `if (x = y) { /* statements here */ }`;
    const codeContainer13 = document.getElementById("jsCode_if4");
    codeContainer13.textContent = jsCode_if4;
        //for if...else statements
    const jsCode_if5 = `if ((x = y)) { /* statements here */ }`;
    const codeContainer14 = document.getElementById("jsCode_if5");
    codeContainer14.textContent = jsCode_if5;


    //for while statements
    const jsCode_while1 = `while (condition) statement`;
    const codeContainer15 = document.getElementById("jsCode_while1");
    codeContainer15.textContent = jsCode_while1;
    //for while statements
    const jsCode_while2 = `var n = 0; var x = 0; while (n < 3) { n++; x += n; }`;
    const codeContainer16 = document.getElementById("jsCode_while2");
    codeContainer16.textContent = jsCode_while2;


    //for Function declarations
    const jsCode_function1 = `function square(number) { return number * number; }`;
    const codeContainer17 = document.getElementById("jsCode_function1");
    codeContainer17.textContent = jsCode_function1;
        //for Function declarations
    const jsCode_function2 = `return number * number;`;
    const codeContainer18 = document.getElementById("jsCode_function2");
    codeContainer18.textContent = jsCode_function2;


});
