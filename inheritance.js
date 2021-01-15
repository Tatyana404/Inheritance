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
 * @param {number} year
 * @param {number} thisYear
 * @param {number} yearAdmission
 */
class User {
  constructor(name, surname) {
    // if (typeof name || typeof surname !== "string") {
    //   throw new TypeError("Parameters have unappropriate type");
    // }
    this._name = name;
    this._surname = surname;
  }
  getFullName() {
    return `${this._name}${this._surname}`;
  }
}
class Student extends User {
  constructor(name, surname, entryYear) {
    // if (typeof entryYear !== "number") {
    //   throw new TypeError("Parameters have unappropriate type");
    // }
    super(name, surname);
    this._entryYear = entryYear;
  }
  getCourse() {
    const currentYear = new Date();
    const course =
      currentYear.getFullYear() - this._entryYear.getFullYear() + 1;
    if (currentYear >= this._entryYear) {
      throw RangeError("You are not a student yet");
    }
    return course;
  }
}
