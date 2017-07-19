var prog1 = (function () {
    function prog1(nm) {
        this.name = nm;
    }
    prog1.prototype.call = function () {
        console.log("name is" + this.name);
    };
    return prog1;
}());
var obj = new prog1("Pinkal");
obj.call();
var prog2 = (function () {
    function prog2(nm, ag) {
        this.name = nm;
        this.age = ag;
    }
    prog2.prototype.name2 = function () {
        console.log("Name is :" + this.name);
    };
    prog2.prototype.show = function () {
        console.log("Pinkal age is:" + this.age);
    };
    return prog2;
}());
var obj1 = new prog2("Pinkal", 26);
obj1.name2();
obj1.show();
var person1 = {
    fname: "Guru",
    lname: "patel",
    hello: function () { console.log("new"); }
};
console.log(person1.fname);
console.log(person1.lname);
