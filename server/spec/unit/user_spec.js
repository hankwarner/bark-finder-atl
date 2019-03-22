const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const authenticationQueries = require("../../src/db/queries/authenticationQueries");

describe("User", () => {
  beforeEach((done) => {
    this.user;

    sequelize.sync({force: true})
    .then((res) => {
      User.create({
        username: "wolverine",
        email: "wolverine@xmen.com",
        password: "00x00x00"
      })
      .then((user) => {
        this.user = user;
        done();
      })
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
        username: "wolverine",
        email: "wolverine@xmen.com",
        password: "abcd1234"
      })
      .then((user) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Validation error");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })

    it("should not create a user with a username already taken", (done) => {
      User.create({
        username: "wolverine",
        email: "gambit@xmen.com",
        password: "abcd1234"
      })
      .then((user) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Validation error");
        done();
      })
    })

    it("should return a the user object given a userID", (done) => {
      authenticationQueries.getUserById(this.user.id, (err, user) => {
        expect(err).toBeNull();
        expect(user.id).toEqual(this.user.id);
        done();
      });
    })

    it("should return a the user object given an email address", (done) => {
      authenticationQueries.getUserById(this.user.email, (err, user) => {
        expect(err).toBeNull();
        expect(user.email).toEqual(this.user.email);
        done();
      });
    })

    it("should return a the user object given a username", (done) => {
      authenticationQueries.getUserById(this.user.username, (err, user) => {
        expect(err).toBeNull();
        expect(user.username).toEqual(this.user.username);
        done();
      });
    })
  })
})