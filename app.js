class Triangle {
  constructor(a,b,c){
    for(let side of [a,b,c]){
      if(!Number.isFinite(side) || side<=0 ){
        throw new Error("Sides must be positive!")
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet(){
    console.log("hello from triangle");
  }
  display(){
    return (`Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`)
  }
  getArea(){
    const {a,b,c} = this;
    const s = (a+b+c) / 2;
    return Math.sqrt(s * (s-a) * (s-b) * (s-c));
  }
  isBig(){
    return this.getArea() > 50;
  }
}
const t1 = new Triangle(3,4,5)



class RightTriangle extends Triangle{
  constructor(a,b,c){
    if (a*a + b*b !== c*c){
      throw new Error('Invalid C side for right triangle');
    }
    super(a,b,c);
  }
  display(){
    return "right " + super.display();
  }
}