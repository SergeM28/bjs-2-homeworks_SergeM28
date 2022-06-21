class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
  fix() {
    this.state = this.state * 1.5;
    return this.state;
  }
  
  set state (number) {
    this._state = number;
    if (this.state < 0) {
      this._state = 0;
    }
  
    else if (this.state > 100) {
      this._state = 100;
    }
  
    else {
      this._state = this.state;
    }
  }
  
  get state () {
    return this._state;
  }
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); 
  console.log(sherlock.state); 
  sherlock.fix();
  console.log(sherlock.state); 
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); 
  picknick.state = 10;
  console.log(picknick.state); 
  picknick.fix();
  console.log(picknick.state);
  
  
  
  //Задача №2
  
  class Library extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
     super(releaseDate, pagesCount);
      this.name = name;
      this.books = [];
    }
   
    addBook(book) {
     if (this.state > 30) {
       this.books.push(book);
     }
   }
  
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
        return null;
      }
    
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          return this.books.splice([i], 1)[0];
        }
      }
       
          return null;
      }
  }
  
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); 
  console.log(library.findBookBy("releaseDate", 1924).name); 
  
  console.log("Количество книг до выдачи: " + library.books.length); 
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); 


  //Задача №3
  
  class Student {
    constructor (fullname, journal) {
      this.fullname = fullname;
      this.journal = {};
    }
  
  addMark(mark, subject) {
    if ((mark < 1 || mark > 5) && (typeof mark !== "number")) {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5")
    }
    if (this.journal[subject] === undefined) {
      this.journal[subject] = [];
    }
    return this.journal[subject].push(mark);
  }
  
  getAverageBySubject(subject) {
    let averageMark = 0;
    if (this.journal[subject] === undefined) {
      return console.log("Несуществующий предмет");
    }
    if (this.journal[subject] !== undefined) {
      if (this.journal[subject].length > 0) {
        let sum = 0;
        this.journal[subject].forEach((mark) => {sum += mark});
        averageMark = sum / this.journal[subject].length;
      }
    }
    return averageMark;
  }
  
  getAverage() {
    let sumOfMarks = 0;
    let countOfSubjects = 0;
    Object.entries(this.journal).forEach(([subject]) => {sumOfMarks += this.getAverageBySubject(subject);
  countOfSubjects++;
  });
    return sumOfMarks / countOfSubjects;
  }
  
    exclude(reason) {
      this.excluded = reason;
    }
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "algebra");
  student.addMark(5, "algebra");
  student.addMark(5, "geometry");
  student.addMark(4, "geometry");
  student.addMark(6, "geometry"); 
  student.getAverageBySubject("geometry"); 
  student.getAverageBySubject("biology"); 
  student.getAverage(); 
  student.exclude("Исключен за попытку подделать оценки");