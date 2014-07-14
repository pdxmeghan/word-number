describe("wordNumber", function() {
  it("will return a word for a number", function() {
    wordNumber("5").should.equal("five");
  });
  it("will return a word for a two-digit number", function() {
    wordNumber("23").should.equal("twenty three");
  });
});
