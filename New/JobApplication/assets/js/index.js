
const resultList=[];
let result={
    Name:0,
    Email:0,
    Phone:0,
    HTML:0,
    CSS:0,
    JS:0,

}

function registration(){
    result={
        Name:0,
        Email:0,
        Phone:0,
        HTML:0,
        CSS:0,
        JS:0,
    }
var formEl = document.forms.applicationForm;
var formData = new FormData(formEl);

var name = formData.get('name');
var email = formData.get('email');
var phone = formData.get('phoneNO');
var HTML_Experience= formData.get('checkbox1');
var CSS_Experience= formData.get('checkbox2');
var JS_Experience= formData.get('checkbox3');

console.log("Form Object: ",formEl);
console.log("Form Data: ",formData);

console.log("Name:",name);
console.log("Email:",email);
console.log("Phone:",phone);
console.log("HTML",HTML_Experience);
console.log("CSS",CSS_Experience);
console.log("Java Script",JS_Experience);


result.Name=name;
result.Email=email;
result.Phone=phone;
result.HTML=HTML_Experience;
result.CSS=CSS_Experience;
result.JS=JS_Experience;
resultList.push(result);
generateValue();
console.log("Result Object",resultList)
}




function generateValue(){
    var tableElement="";
    var divData = document.getElementById("dataDiv");
    for (var i = 0; i < resultList.length; i++) {
        tableElement = tableElement +  "<div class='container'><span> Name: " + resultList[i].Name + "</span> <br/><span>Email: " + resultList[i].Email + "</span> <br/><span>Phone: " + resultList[i].Phone +  "</span> <br/><span>HTML :"+ resultList[i].HTML+"</span><br/><span>CSS :"+ resultList[i].CSS+"</span><br/><span>Java Script:"+ resultList[i].JS +"</span></div>";


    }
    console.log("HTML Elements",tableElement);
    divData.innerHTML=tableElement;
}




