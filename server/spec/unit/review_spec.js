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

