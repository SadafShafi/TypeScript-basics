class myClass {

    name:string;
    age:number;
    sex:string;


    constructor(name:string,age:number,sex:string){
        this.name = name;
        this.age = age;
        this.sex = sex;

    }

    print(){
        console.log("Name : "+this.name);
        console.log("age : "+this.age);
        console.log("sex : "+this.sex);
    }
}

let Classmate = new myClass("sadaf",23,"male");

Classmate.print();
