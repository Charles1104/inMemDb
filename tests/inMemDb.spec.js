const chai = require('chai');
const expect = chai.expect;
const database = require ('../inMemDb.js');

describe('dataBase', () => {

  it('dataBase to return an object', () => {
    expect(database).to.be.an('Object');
  });

  it('dataBase.byId to return an function', () => {
    expect(database.byId).to.be.an('function');
  });

  it('dataBase.youngest to return an function', () => {
    expect(database.youngest).to.be.an('function');
  });

  it('dataBase.oldest to return an object', () => {
    expect(database.oldest).to.be.an('function');
  });

  it('dataBase.males to return an object', () => {
    expect(database.males).to.be.an('function');
  });

  it('dataBase.females to return an object', () => {
    expect(database.females).to.be.an('function');
  });

  it('dataBase.employees to return an object', () => {
    expect(database.employees).to.be.an('function');
  });

});

// describe('dabatase.id', () => {

//   it('the parameter of byId should be a number', () => {
//     expect(database.byId.bind(null,[4,5])).to.throw("Only string as argument");
//     expect(database.byId.bind(null,6)).to.throw("Only string as argument");
//     expect(database.byId.bind(null,{gender: "male"})).to.throw("Only string as argument");
//   });
// });

describe('the subfunctions should return what is expected', () => {

  it('database.byId should return the object refering to this id', () => {
    expect(database.byId(1)).to.deep.equal({ name: 'Alice', age: 12, gender: 'f', jobType: 'st' });
    expect(database.byId(4)).to.deep.equal({ name: 'David', age: 9, gender: 'm', jobType: 'na' });
    expect(database.byId(8)).to.deep.equal({ name: 'Hannah', age: 15, gender: 'f', jobType: 'na' });
    expect(database.byId(15)).to.deep.equal(undefined);

  });

  it('database.youngest should return the object refering to the youngest age', () => {
    expect(database.youngest()).to.deep.equal({ name: 'Kathy', age: 8, gender: 'f', jobType: 'na' });
  });

  it('database.oldest should return the object refering to the youngest age', () => {
    expect(database.oldest()).to.deep.equal({ name: 'Eric', age: 61, gender: 'm', jobType: 'dv' });
  });

  it('database.males should return an array with all the males', () => {
    expect(database.males()).to.deep.equal([{ name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },{ name: 'David', age: 9, gender: 'm', jobType: 'na' },{ name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },{ name: 'Fred', age: 45, gender: 'm', jobType: 'dv' }, { name: 'George', age: 38, gender: 'm', jobType: 'dv' },{ name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },{ name: 'Liam', age: 20, gender: 'm', jobType: 'st' }]);
  });

  it('database.females should return an array with all the males', () => {
    expect(database.females()).to.deep.equal([{ name: 'Alice', age: 12, gender: 'f', jobType: 'st' },{ name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },{ name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },{ name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },{ name: 'Kathy', age: 8, gender: 'f', jobType: 'na'}]);
  });

    it('database.employees should return the object refering to the employees working for the specified job', () => {
    expect(database.employees('dv')).to.deep.equal([{ name: 'Bob', age: 21, gender: 'm', jobType: 'DevLeague' },{ name: 'Claire', age: 56, gender: 'f', jobType: 'DevLeague' },{ name: 'Eric', age: 61, gender: 'm', jobType: 'DevLeague' },{ name: 'Fred', age: 45, gender: 'm', jobType: 'DevLeague' },{ name: 'George', age: 38, gender: 'm', jobType: 'DevLeague' },{ name: 'Jake', age: 27, gender: 'm', jobType: 'DevLeague' }]);
    });

});

