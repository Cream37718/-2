class Customer{
    constructor(_id,_fullname){
        this.id = _id;
        this.fullname = _fullname;
    }
    walk(){
        console.log("ลูกค้ากำลังเดิน")
    }
}

let c1 = new Customer(1001, "Panida Vaicharoen" )
c1.walk();
let c2 = new Customer(1002, "Pawich Choykhunthod")

console.log("รหัส:"+c1.id+"\nชื่อ-นามสกุล"+c1.fullname)

let Customers={
    id:1005,
    fullname:"Pawich Choykhunthod",
    walk:function(){
        console.log("ลูกค้ากำลังเดิน")
    }
}
console.log("รหัส:"+Customers.id+"\nชื่อ-นามสกุล"+Customers.fullname)
Customers.walk();