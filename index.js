class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  

    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  const myCircle = new Circle(5); 
  
  console.log(myCircle.radius); 
  
  console.log(myCircle.diameter); 
  myCircle.diameter = 12; 
  console.log(myCircle.radius); 
  
  console.log(myCircle.circumference); 
  myCircle.circumference = 50; 
  console.log(myCircle.radius); 
  
  console.log(myCircle.area); 
  console.log(myCircle.radius); 
  