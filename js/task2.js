let student = {
    subjects: [],
    addSubject(lesson) {
        this.subjects.push(lesson);
        return this.subjects;
    },
    removeSubject(lesson) {
        let message = ''
        for(let i = 0; i < this.subjects.length; i++) {
            if(this.subjects[i] === lesson) {
                this.subjects.splice(i, 1);
            }
            else {
             message = "Не вивчається";
            }
        } 
        return message;
    },
  };

student.addSubject('Математика'); // Предмет Математика додано.
student.addSubject('Історія'); // Предмет Історія додано.
student.addSubject('Математика');
console.log(student.subjects);

student.removeSubject('Історія');
console.log(student.subjects);
console.log(student.removeSubject('Англійська'));

