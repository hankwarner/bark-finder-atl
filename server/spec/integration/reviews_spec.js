const request = require('request');
const base = 'http://localhost:8080/#/parks';
const server = require("../../src/app");
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Park = require("../../src/db/models").Park;
const Review = require("../../src/db/models").Review;

describe("routes : parks", () => {
  beforeEach((done) => {
    this.user;
    this.park;

    sequelize.sync({force: true}).then((res) => {
      User.create({
        username: "gambit",
        email: "gambit@xmen.com",
        password: "Aceofspades"
      })
      .then((user) => {
        this.user = user;

        Park.create({
          name: "Mission Dolores Park",
          address: '19th Street',
          neighborhood: 'Mission',
          description: "Leave no trace",
          imageUrl: '../../static/images/mission.jpg',
          lat: 33.759815,
          lng: -84.364534,
        })
        .then((park) => {
          this.park = park;
          done();
        })
      })
      .catch((err) => {
        console.log(err);
        done();
      })
    })
  })
  
  describe("POST /parks/:id/review/create", () => {
    const options = {
      url: `${base}/${this.park.id}/review/create`,
      form: {
        userId: this.user.id,
        parkId: this.park.id,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        rating: 5
      }
    }
    it("should create a new review", (done) => {
      request.post(options, (err, res, body) => {
        Park.findOne({where: {name: "Mission Dolores Park"}})
        .then((park) => {
          expect(res.statusCode).toBe(303);
          expect(park.name).toBe("blink-182 songs");
          expect(park.neighborhood).toBe("Mission");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
      })
    })
  })
})