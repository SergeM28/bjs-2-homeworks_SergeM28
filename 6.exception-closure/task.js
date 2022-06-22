function parseCount(value) {
    const number = Number.parseInt(value);
    if (number) {
      return number;
    }
      const parseCountError = new Error("Невалидное значение");
      throw parseCountError;
    }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    }
    catch (error) {
      return error;
    }
  }
  


  //Задача №2

  class Triangle {
    constructor(a, b, c) {
      if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
        const triangle = new Error ("Треугольник с такими сторонами не существует");
      throw triangle;
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }
  
  getArea() {
    let p = (this.getPerimeter()) / 2;
    let area = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    return area;
  }
  }
  
  function getTriangle (a, b, c) {
    try {
      return new Triangle(a, b, c);
    }
    catch (error) {
      const triangle = new Object();
      triangle.getArea = function() {
        return "Ошибка! Треугольник не существует";
      };
      triangle.getPerimeter = function() {
        return "Ошибка! Треугольник не существует";
      }
      return triangle;
    }
  }