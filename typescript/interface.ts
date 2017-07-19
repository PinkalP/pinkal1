class prog1{
    name:string;
    constructor(nm: string)
    {
        this.name=nm;
   }
   call():void{
       console.log("name is"+this.name);
   }
}
var obj=new prog1("Pinkal");
obj.call();

class prog2{
    name:string;
    age:number;
    constructor(nm:string,ag:number)
    {
    this.name=nm;
    this.age=ag;
    }
name2():void{
    console.log("Name is :"+this.name);
    }
show():void{
    console.log("Pinkal age is:"+this.age);
    }
}
var obj1=new prog2("Pinkal",26);
obj1.name2();
obj1.show();

interface person{
    fname:string,
    lname:string,
    hello:()=>void
}
var person1:person={
fname:"Guru",
lname:"patel",
hello:()=>{console.log("new")}
};

console.log(person1.fname);
console.log(person1.lname);

