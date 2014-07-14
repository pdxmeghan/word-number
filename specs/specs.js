describe("wordNumber", function() {
  it("will return a word for a number", function() {
    wordNumber("5").should.equal("five");
  });
  it("will return a word for a two-digit number", function() {
    wordNumber("23").should.equal("twenty three");
  });
  it("will return a word for a three-digit number", function()  {
    wordNumber("478").should.equal("four hundred seventy eight");
  });
  it("will return a word for a four-digit number", function()  {
    wordNumber("1234").should.equal("one thousand two hundred thirty four");
  });
  it("will return a word for a five-digit number", function() {
    wordNumber("25678").should.equal("twenty five thousand six hundred seventy eight");
  })
  it("will return a word for a thirteen-digit number", function() {
    wordNumber("1458746383927").should.equal("one trillion four hundred fifty eight billion seven hundred forty six million three hundred eighty three thousand nine hundred twenty seven");
  })
});
