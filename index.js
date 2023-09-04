
var form=document.getElementById("form");
function validate(event)
{
    event.preventDefault();

    let input = document.getElementById("inp").value;
    let name = document.getElementById("name");
    let alert = document.getElementById("alert"); 
    if(input.length==0){
            alert.innerText= "Input field is mandatory"
    }
    else if(input.length<6 || input.length>10){
        alert.innerText = "please enter input length between 6 to 10";
    }
    // else if(input.length>=6 && input.length<=10){
    //     for(let i=0; i<input.length; i++){
    //         if(input[i]>=0 && input[i]<=9 ){
    //             alert.innerText= "Only alphabets are allowed";
    //             break;
    //         }
    //     }
    // }
    else{

        var letters = /^[A-Za-z]+$/;
        if(input.match(letters))
        {
            "Successfull!!!";
            name.innerText =  "Welcome " + input;
        }
        else
        {
            alert.innerText = "Only alphabets are allowed";
        }
    }
    setTimeout(() => {
        alert.innerText= "";
    }, 2000);
}

form.addEventListener('submit', validate);

// function zero(){
//     let name = document.getElementById("name");
//     name.innerText = "";
// }

// function text(event){
//     event.preventDefault();
//     let input = document.getElementById("inp").value;
//     console.log(input);
//     for(let i=0; i<input.length; i++){
//         if((input.charAt(i) >='A' && input.charAt(i) >='Z') ||
//                 (input.charAt(i) >='a' && input.charAt(i) >='z')){
//                 console.log(charAt(i));
//         }else{
//             alert("Only alphabets allowed !!!");
//             break;
//         }
//     }
//     validate();
// }
// text();
// validate();