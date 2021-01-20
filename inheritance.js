"use strict";

// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

/**
 *
 * @param {string} name
 * @param {string} surname
 * @param {num} year
 */
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError();
    }
    this._name = newName;
  }
  get name() {
    return this._name;
  }
  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError();
    }
    this._surname = newSurname;
  }
  get surname() {
    return this._surname;
  }
  getFullName() {
    return `${this._name}${this._surname}`;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }
  get year() {
    return this._year;
  }
  getCourse() {
    const currentYear = new Date();
    const course = currentYear.getFullYear() - this._year.getFullYear() + 1;
    if (course < 1) {
      throw RangeError("You are not a student");
    }
    if (course > 5) {
      throw RangeError("You have completed your training");
    }
    return course;
  }
}

// const courseStudent = new Student ("Petr", "Petrovich", new Date("2020")); // console.log (2)
// const courseStudent = new Student ("Petr", "Petrovich", new Date("2017")); // console.log (5)
// const courseStudent = new Student ("Petr", "Petrovich", new Date("2015")); // console.log (You have completed your training)
// const courseStudent = new Student("Petr", "Petrovich", new Date("2024")); // console.log (You are not a student yet)
