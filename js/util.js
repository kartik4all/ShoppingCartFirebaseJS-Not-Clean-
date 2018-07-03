var config = {
    apiKey: "AIzaSyALXC9rNc96WpF6Hb3-DAC8E_PUqgadWoM",
    authDomain: "puma-6fdbb.firebaseapp.com",
    databaseURL: "https://puma-6fdbb.firebaseio.com",
    projectId: "puma-6fdbb",
    storageBucket: "puma-6fdbb.appspot.com",
    messagingSenderId: "269666528166"
  };
  firebase.initializeApp(config);

  function* autogen(){
      var counter=10;
      while(true){
          yield counter;
          counter++;
      }
  }

  class Menu{
      constructor(newid,newcat){
          this.newid=newid;
          this.newcat=newcat;
      }
  }
  class Cart{
    constructor(newid,productname,producturl,productprice){
        this.newid=newid;
        this.productname=productname;
        this.producturl=producturl;
        this.productprice=productprice;
    }
  }
  class User{
      constructor(newid,name,pswd,number,address){
          this.newid=newid;
          this.name=name;
          this.pswd=pswd;
          this.number=number;
          this.address=address;
      }
  }

  //my localstorage has user and cartobj