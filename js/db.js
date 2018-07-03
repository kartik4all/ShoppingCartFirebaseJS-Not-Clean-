const ProductOperations = {

addProduct(productObject){
    
    firebase.database().ref('products/shoes/' + productObject.newid).set(productObject);
    alert("Record Added");
},
addMenu(menuObject){
firebase.database().ref('menu/'+menuObject.newid).set(menuObject);
alert("Menu Item Added");
},
loadMenu(){
var pr = new Promise((resolve,reject)=>{
   var menuref= firebase.database().ref('menu/');
menuref.on('value',(snapshot)=>{
    var object = snapshot.val();
    console.log(object);
resolve(object);
});
});
return pr;
},
searchProducts(){

    var pro = new Promise((resolve,reject)=>{
        var prods = firebase.database().ref('products/shoes/');
        prods.on('value',(snapshot)=>{
            var object = snapshot.val();
            resolve(object);
            console.log("products",object);
        });
    });
return pro;

},
deleteProduct(currentobj){
    var obj = firebase.database().ref('products/shoes/'+ currentobj.newid );
    obj.remove();
},
addToCart(currentobj){
    //var obj = firebase.database().ref('cart');

},
addNewUser(user){

    var obj = firebase.database().ref('user/'+ user.newid).set(user);
    alert("user registered");
},
searchUser(){
    var pro = new Promise((resolve,reject)=>{
        var prods = firebase.database().ref('user/');
        
        prods.on('value',(snapshot)=>{
            var object = snapshot.val();
            resolve(object);
            
        });
    });
return pro;
}

}