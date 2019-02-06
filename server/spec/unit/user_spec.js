const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {
  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    })
  })

  describe("#create()", () => {
    it("should create a User object with a valid username, email and password", (done) => {
      User.create({
        username: "wolverine",
        email: "wolverine@xmen.com",
        password: "00x00x00"
      })
      .then((user) => {
        expect(user.email).toBe("wolverine@xmen.com");
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })

    it("should not create a user with invalid email", (done) => {
      User.create({
        username: "wolverine",
        email: "wolverine",
        password: "1234567890"
      })
      .then((user) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("must be a valid email");
        done();
      })
    })

    it("should not create a user with an email already taken", (done) => {
      User.create({
        username: "gambit",
        email: "gambit@xmen.com",
        password: "abcd1234"
      })
      .then((user) => {

        User.create({
            username: "gambit1",
            email: "gambit@xmen.com",
          password: "cards"
        })
        .then((user) => {
          done();
        })
        .catch((err) => {
          expect(err.message).toContain("Validation error");
          done();
        })
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })

    it("should not create a user with a username already taken", (done) => {
        User.create({
          username: "gambit",
          email: "gambit@xmen.com",
          password: "abcd1234"
        })
        .then((user) => {
  
          User.create({
              username: "gambit",
              email: "gambit1@xmen.com",
            password: "cards"
          })
          .then((user) => {
            done();
          })
          .catch((err) => {
            expect(err.message).toContain("Validation error");
            done();
          })
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })

  })
})