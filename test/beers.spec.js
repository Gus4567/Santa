const { howmany } = require("../src/utils/beers");

describe("given beers function", () => {
  describe("when temp less than 20 and number is 10 ", () => {
    test("should be return 2 beers packages", () => {
      const temp = 19;
      const number = 10;
      expect(howmany(number, temp)).toBe(2);
    });
  });

  describe("when temp is equal or more than 20 and temp is equal or less than 24 and number is 15", () => {
   test("should be return 3 beers packages", ()=>{
     const temp=22
     const number=15
     expect(howmany(number, temp)).toBe(3)
   })
  });

  describe("when temp is more higher than 24 and number is 20 ", ()=>{
    test("should be return 7 beers packages", () =>{
      const temp= 25
      const number= 20
      expect(howmany(number, temp)).toBe(7)
    })
  })

});
