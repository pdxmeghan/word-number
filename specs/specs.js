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
});
