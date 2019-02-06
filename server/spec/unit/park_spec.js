const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Park = require("../../src/db/models").Park;
const Review = require("../../src/db/models").Review;

describe('Parks', () => {
    
    beforeEach((done) => {
        this.user;
        this.park;
   
        sequelize.sync({force: true}).then((res) => {
            User.create({
                username: "wolverine",
                email: "wolverine@xmen.com",
                password: "00x00x00"
            })
            .then((user) => {
                this.user = user;

                Park.create({
                    name: "Mission Dolores Park",
                    address: '19th Street',
                    neighborhood: 'Mission',
                    description: "Leave no trace",
                    reviews: [{
                        userId: this.user.id,
                        body: "Great spot",
                        rating: 5
                    }]
                }, {
                    include: {
                        model: Review,
                        as: "reviews"
                    }
                })
                .then((park) => {
                    this.park = park;
                    done();
                })
            })
        })
      })

    describe('#create()', () => {
        it('should create a park object with a name, address, neighborhood, description, and park Id', (done) => {
            expect(this.park.id).toBe(1);
            expect(this.park.name).toContain("Mission Dolores Park");
            expect(this.park.address).toContain("19th Street");
            expect(this.park.neighborhood).toContain("Mission");
            expect(this.park.description).toContain("Leave no trace");
            done();
        })  
    })

    describe('#getReviews()', () => {
        it('should return all reviews with the park in scope', (done) => {
            this.park.getReviews()
            .then((associatedReviews) => {
                expect(associatedReviews[0].body).toContain("Great spot");
                expect(associatedReviews[0].rating).toEqual(5);
                expect(associatedReviews[0].parkId).toEqual(this.park.id);
                expect(associatedReviews[0].userId).toEqual(this.user.id);
                done();
            })
        })
    })
})
