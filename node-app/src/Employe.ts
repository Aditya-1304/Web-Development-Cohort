interface person {
  name : string,
  age : number,
  greet(phrase : string) : void;
}

class employee implements person {
  name : string;
  age : number;

  constructor(n: string , a:number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
      console.log(`${phrase} ${this.name}`);
      
  }
}

const e = new employee("Aditya",22);