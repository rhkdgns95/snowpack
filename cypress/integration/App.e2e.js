describe("App E2E", () => {
  before(() => {
    cy.visit('http://localhost:3000');
    // cy.waitForReact();
  });
  it("헤더와 버튼이 존재 (True)", (done) => {
    // cy.visit('http://localhost:3000');
    cy.get("h1").should("have.text", "hello world");
    cy.get("button.toggle").should("have.text", "열기");
    done();
  });

  it("팝업창 열기", (done) => {
    cy.get("button.toggle").should("have.text", "열기");
    cy.get("button.toggle").click();
    cy.get("button.toggle").should("have.text", "닫기");
    done();
  });

  it("닫기 버튼 클릭", (done) => {
    cy.get("button.toggle").should("have.text", "닫기");
    cy.get("button.toggle").click();
    cy.get("button.toggle").should("have.text", "열기");
    done();
  });
});
