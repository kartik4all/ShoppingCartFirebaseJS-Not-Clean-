window.addEventListener("DOMContentLoaded",init);


function init(){
    ifCart();
    ifCheckOut();
ifLogin();
idgenerator();
loadif();
checkUserScreen();
bindFunctions();
checkIfLoginned();
var login=false;
}
function ifCart(){
    var obj = document.querySelector("#proceed");
    if(obj==null){
        console.log("not cart");
    }
    else{
    var userDetail = localStorage.getItem('user');
    var userObj = JSON.parse(userDetail);
    console.log(userObj);
    var cartDetail = localStorage.getItem('cartobj');
    var cartObjj = JSON.parse(cartDetail);
    console.log(cartObjj);
    printCartObj(userObj,cartObjj);

    obj.addEventListener("click",()=>{

        location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/checkout.html";
    });

    }
}

function ifCheckOut(){
    var obj = document.querySelector("#userInfo");
    if(obj==null){
        console.log("not checkout");
    }
    else{
    var userDetail = localStorage.getItem('user');
    var userObj = JSON.parse(userDetail);
    
    var cartDetail = localStorage.getItem('cartobj');
    var cartObjj = JSON.parse(cartDetail);
    
    printCheckoutObj(userObj,cartObjj);

}}
function printCheckoutObj(userObj,cartObj){
    var table = document.querySelector("#showItems");
    var ul = document.querySelector("#info");
        var row = document.createElement("tr");
     var c=   table.appendChild(row);
    for(let key in cartObj ){
        
        var column = document.createElement("td");
        var e= c.appendChild(column);
         console.log(e);
       e.innerHTML= cartObj[key];
    }
    for(let key in userObj){

     
       var li = document.createElement("li");
       ul.appendChild(li);
       li.innerHTML=userObj[key];
    }
}


function printCartObj(userObj,cartObj){
    var table = document.querySelector("#showItems");
        var row = document.createElement("tr");
     var c=   table.appendChild(row);
    for(let key in cartObj ){
        
        var column = document.createElement("td");
        var e= c.appendChild(column);
         console.log(e);
       e.innerHTML= cartObj[key];
       

    }
}
function changeLogin(){
    var login=true;
}


function checkIfLoginned(){

}

var counter;
var newid;

function ifLogin(){
    var details=document.querySelector("#enterDetails");

    if(details==null){
        console.log("Not a login screen");
    }else{
     

        register();
    }
}


function register(){

    var log =  document.querySelector("#login");
    log.addEventListener("click",()=>{
checklogin();

    });
    
document.querySelector("#registerUser").addEventListener("click",()=>{
    document.querySelector("#enterDetails").className='tableshow';
    console.log("ooooooooooo");
    addUser();
});
}



function checklogin(){
    var username= document.querySelector("#username").value;
    var userpswd = document.querySelector("#userpswd").value;
var userobj = ProductOperations.searchUser();

userobj.then(data=>{
    var ind=0;
for(let keys in data){
     var Name = data[keys].name;
     var Pswd = data[keys].pswd;
   
var adminName= data[4].name;
console.log("aminkeycheck",adminName);
adminPswd=data[4].pswd;

if(username==adminName && userpswd== adminPswd){
    console.log("you are the admin");
  console.log("this is the object",data[4]);
  var user = data[4];
  var nuser = JSON.stringify(user);
  console.log(nuser);
  localStorage.setItem('user' , nuser);
    ind=2;
    break;
}


  else  if(username == Name && userpswd==Pswd){
        console.log("matched");
        ind=1;
        var user = data[keys];
  var nuser = JSON.stringify(user);
  console.log(nuser);
  localStorage.setItem('user' , nuser);
      break;
    }   
}
if(ind==1){
    location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/userScreen.html";
}
if(ind==0){
    document.querySelector("#span").innerHTML="invalid user,please register";
}
if(ind==2){
    location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/admin.html";
}

}).catch(err=>{console.log("error in promise",err)});


}
function addUser(){

    var submit=document.querySelector("#submit");
    submit.addEventListener("click",entryUser=>{

        increment();
        var name = document.querySelector("#name").value;
        
        var pswd = document.querySelector("#pswd").value;
        var number = document.querySelector("#number").value;
        var address= document.querySelector("#address").value;
  
        var userObj = new User(newid,name,pswd,number,address);
        
        ProductOperations.addNewUser(userObj);
        changeLogin();
        location.href("http://127.0.0.1:5500/practice/project/pumademo/webpage/userScreen.html");
    });
    
   
}

function checkUserScreen(){
var user=document.querySelector(".userScreen");

if(user==null){
    console.log("not a userSreen");
}else{
    
    userScreenFunctions();
}

}
function userScreenFunctions(){

    loadMenu();
    bindFunctions();
}

function idgenerator(){
counter = autogen();
increment();
}
function increment(){
    newid = counter.next().value;
    console.log("newid is",newid);
}
function loadif(){
var check = document.querySelector("#uploadproducts");
    if(check==null){
        console.log("nextpage");
    }
    else{
        loadMenu();
    }
}
function loadMenu(){
 var obj = ProductOperations.loadMenu();
 obj.then(object=>{
     
    for(var keys in object){
               
              console.log(object[keys]);
           

              for(let key in object[keys]){
                  
    var ul =  document.querySelector("#prodcat");
    var li = document.createElement("li");
    ul.appendChild(li);
    var c =document.createElement("a");
    
     var a = li.appendChild(c);
    
   a.innerHTML= key.newCat;
              }
    }



}).catch(err=>{console.log("error in promise",err)});   //promise problem here


}
function printMenu(object){
    

}
function shoes(){
    document.querySelector("#showshoes").className='shoeshow';
    console.log("shoes pressed");
    fetchshoes();
}
function userScreen(){
    location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/userScreen.html";
}

function bindFunctions() {
   var clearstorage = document.querySelector("#clear");
   if(clearstorage==null){
       console.log("u have localStorage");
   }
   else{
       clearstorage.addEventListener("click",()=>{ localStorage.clear();
        console.log("local storage cleared");});
      
   }
   

    var addtypes=document.querySelector("#addtype");
    if(addtypes==null){
        console.log("addtype");
    }
    else{
        localStorage.setItem('addtypes',addtypes);
        console.log("locaaaalll",localStorage.getItem('addtypes'));
    addtypes.addEventListener("click",addtype);
    }



    var addInDatabases = document.querySelector("#upload");
    if(addInDatabases==null){console.log("upload");
} else{

     addInDatabases.addEventListener("click",addInDatabase);
}




    var uploadproductss = document.querySelector("#uploadproducts");
    if(uploadproductss==null){
        console.log("print");
   
    }
    else{
        uploadproductss.addEventListener("click",uploadproducts);
    }


    

    var shoess=document.querySelector("#shoes");
    if(shoess==null){console.log("upload");
}else{
    console.log("shoe click");
     shoess.addEventListener("click",shoes);
}




var userView = document.querySelector("#userView");
if(userView==null){
    console.log("absent");
}else{
    userView.addEventListener("click",userScreen);
}
}



function uploadproducts(){
    console.log("new page");
     location.href = "http://127.0.0.1:5500/practice/project/pumademo/webpage/AdminUploadProduct.html";
   
}



function fetchshoes(){
    var shoes = ProductOperations.searchProducts();
    console.log(shoes,"ssssssssshhhhhhhhhoes fetchedd");

shoes.then(shoe=>{
   
    for(let key in shoe ){
        var table = document.querySelector("#createDatabase");
        var row = document.createElement("tr");
     var c=   table.appendChild(row);
        console.log(c);
        var item = shoe[key];
        
var index=0;
        for(let tag in item){
            index++;
            var column = document.createElement("td");
           var e= c.appendChild(column);
            console.log(e);
          e.innerHTML= item[tag];
          if(index>3){

var userSection = document.querySelector(".userScreen");
if(userSection==null){

            deleteButton(c,shoe[key]);}
            else{
                addtoCart(c,shoe[key]);
            }
          }
        }
       
    }
}).catch(err=>{console.log("error",err);})

}

function addtoCart(c,currentObj){
    
    var button=  document.createElement("button");
    button.innerHTML="AddtoCart";
    var logg = localStorage.getItem('user');
if(logg==null)
{

    button.addEventListener("click",()=>{
    
                    gotoLogin();                                
  
    });}
    else{ 
button.addEventListener("click",()=>{
    var ob = JSON.stringify(currentObj);
    console.log(ob);
    localStorage.setItem('cartobj',ob);
    gotoCart();
});



    }
      c.appendChild(button);

}
function gotoCart(){
    location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/cart.html";
}

function gotoLogin(){
    location.href="http://127.0.0.1:5500/practice/project/pumademo/webpage/loginScreen.html";
}

function deleteButton(c,currentObj){
    console.log("button");
  var button=  document.createElement("button");
  button.innerHTML="Delete";
  button.addEventListener("click",addData=>{
ProductOperations.deleteProduct(currentObj);
fetchshoes();                                                   //yet to be tested after inserting items

  });
    c.appendChild(button);
}




function addInDatabase(){


var producturl=document.querySelector("#url").value;
var productname=document.querySelector("#name").value;
var productprice = document.querySelector("#price").value;
var productObject = new Product(newid,productname,producturl,productprice);

ProductOperations.addProduct(productObject);
increment();
}

var newCat;
function setName(){
    
    
    
     newCat = document.querySelector("#categoryName").value; 
     var heading  = document.createElement("th");
     var head = document.createElement("a");                                                       
     var x = document.querySelector("#prodcat").appendChild(heading);
     var y =x.appendChild(head);
     y.innerHTML=newCat;
     var menuObject = new Menu(newid,newCat);
     ProductOperations.addMenu(menuObject);
   
    
}

function addtype(){
    increment();
    document.querySelector("#categoryName").className='catshow';
    
    document.querySelector("#categoryName").addEventListener("keyup",function(e){
        e.preventDefault();
        if(e.keyCode==13){
            increment();
            setName();
        }
    
    });
 
}

