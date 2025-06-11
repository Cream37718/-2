const bcrypt = require('bcryptjs');
const password = "password";
const myHash = '$2b$10$RF6LNmYETaS/ZWoK/MDtq.nNNhwWeurKfWosPdNCKBYbyli5SOEZC';

bcrypt.compare(password, myHash, function(err,res){
    if (res==true){
        console.log('password match')
    }
    else{
        console.log('mismatch please try again')
    }
});