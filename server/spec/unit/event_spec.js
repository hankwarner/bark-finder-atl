const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Event = require("../../src/db/models").Event;
const Review = require("../../src/db/models").Review;

describe('Events', () => {
    
    beforeEach((done) => {
        this.user;
        this.event;
   
        sequelize.sync({force: true}).then((res) => {
            User.create({
                username: "wolverine",
                email: "wolverine@xmen.com",
                password: "00x00x00"
            })
            .then((user) => {
                this.user = user;

                Event.create({
                    name: "Bark in the park",
                    address: "908 Hank Aaron Drive",
                    neighborhood: "Turner Field",
                    description: "Bring your dog to the ball game.",
                    imageUrl: '../../static/images/turnerfield.jpg',
                    lat: 33.559812,
                    lng: -84.464537,
                    reviews: [{
                        userId: this.user.id,
                        body: "Best game of the year",
                        rating: 5
                    }]
                }, {
                    include: {
                        model: Review,
                        as: "reviews"
                    }
                })
                .then((event) => {
                    this.event = event;
                    done();
                })
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
      })

    describe('#create()', () => {
        it('should create an event object with a name, address, neighborhood, description, and id', (done) => {
            expect(this.event.id).toBe(1);
            expect(this.event.name).toContain("Bark in the park");
            expect(this.event.address).toContain("908 Hank Aaron Drive");
            expect(this.event.neighborhood).toContain("Turner Field");
            expect(this.event.description).toContain("Bring your dog to the ball game.");
            expect(this.event.imageUrl).toContain("../../static/images/turnerfield.jpg");
            expect(this.event.lat).toBe('33.559812');
            expect(this.event.lng).toBe('-84.464537');
            done();
        })  
    })

    describe('#getReviews()', () => {
        it('should return all reviews with the event in scope', (done) => {
            this.event.getReviews()
            .then((associatedReviews) => {
                expect(associatedReviews[0].body).toContain("Best game of the year");
                expect(associatedReviews[0].rating).toEqual(5);
                expect(associatedReviews[0].eventId).toEqual(this.event.id);
                expect(associatedReviews[0].userId).toEqual(this.user.id);
                done();
            })
        })
    })
})
