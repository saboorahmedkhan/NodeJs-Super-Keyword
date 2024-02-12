// The Super keyword is used to call the constructor of its parent class to access
// the parent's properties and methods.

class Person{
    name: string
    gender:string
    constructor (n:string,g:string){
        this.name=n
        this.gender=g
    }
    welcome(){
        console.log(`Hello, how are you `)
    }
}

class Student extends Person{
    
    rollNum:number
    constructor (n:string,g:string,r:number){
        super(n,g)
        this.rollNum=r
    }
    welcome(){
        super.welcome()
        console.log(`Hello ${this.name}`)
    }
}

class Teacher extends Person{
    email:string
    constructor(n:string,g:string,e:string){
        super(n,g)
        this.email=e
    }
    welcome(): void {
        super.welcome()
    }
}

let t = new Teacher ("Saboor","M","abc@abc");

console.log(t.welcome())