const sequelize = require("../../src/db/models/index").sequelize;
const Park = require("../../src/db/models").Park;
const User = require("../../src/db/models").User;
const Review = require("../../src/db/models").Review;

describe('Reviews', () => {
    
    beforeEach((done) => {
        this.park;
        this.user;
        this.review;
   
        sequelize.sync({force: true}).then((res) => {
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

              User.create({
                username: "wolverine",
                email: "wolverine@xmen.com",
                password: "00x00x00"
              })
              .then((user) => {
                  this.user = user
                  
                  Review.create({
                    userId: this.user.id,
                    parkId: this.park.id,
                    body: "Great spot",
                    rating: 5
                })
                .then((review) => {
                    this.review = review;
                    done();
                })
              })
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
      })

    describe('#create()', () => {
        it('should create a review object with a userId, parkId, body, and rating', (done) => {
            Review.create({
                userId: this.user.id,
                parkId: this.park.id,
                body: "This place rules.",
                rating: 5
            })
            .then((review) => {
                expect(review.id).toBe(2);
                expect(review.userId).toEqual(this.user.id);
                expect(review.parkId).toEqual(this.park.id);
                expect(review.body).toContain("This place rules.");
                expect(review.rating).toEqual(5);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
            
        })

        it('should not create a review object with a missing userId, parkId, and rating', (done) => {
            Review.create({
                body: "Totally rad park."
            })
            .then((review) => {
                done();
            })
            .catch((err) => {
                expect(err.message).toContain('Review.rating cannot be null');
                expect(err.message).toContain('Review.userId cannot be null');
                done();
            })
        })

        it('should create a review object with a length over 255 but less than 10000 characters', (done) => {
            Review.create({
                userId: this.user.id,
                parkId: this.park.id,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                rating: 5
            })
            .then((review) => {
                expect(review.body).toContain("Lorem ipsum dolor sit amet")
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
    })

    describe("#setPark()", () => {
        it("should associate a review and a park together", (done) => {
            Park.create({
                name: "Golden Gate Park",
                address: 'Haight Street',
                neighborhood: 'Haight-Ashbury',
                description: "Your wildest dreams",
                imageUrl: '../../static/images/ggp.jpg',
                lat: 33.734815,
                lng: -84.364343,
            })
          .then((newPark) => {
            expect(this.review.parkId).toBe(this.park.id);

            this.review.setPark(newPark)

            .then((review) => {
              expect(review.parkId).toBe(newPark.id);
              done();
            })
          })
        })
    })

})

