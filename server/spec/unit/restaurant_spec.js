const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Restaurant = require("../../src/db/models").Restaurant;

describe('Restaurants', () => {
    
    beforeEach((done) => {
        this.user;
        this.restaurant;
   
        sequelize.sync({force: true}).then((res) => {
            User.create({
                username: "wolverine",
                email: "wolverine@xmen.com",
                password: "00x00x00"
            })
            .then((user) => {
                this.user = user;

                Restaurant.create({
                    name: "Pizza Guy",
                    address: "24th Street",
                    neighborhood: "Berkeley",
                    description: "Best pie in town",
                    imageUrl: '../../static/images/pizzaguy.jpg',
                    lat: 33.759815,
                    lng: -84.364534,
                })
                .then((restaurant) => {
                    this.restaurant = restaurant;
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
        it('should create a restaurant object with a name, address, neighborhood, description, and id', (done) => {
            expect(this.restaurant.id).toBe(1);
            expect(this.restaurant.name).toContain("Pizza Guy");
            expect(this.restaurant.address).toContain("24th Street");
            expect(this.restaurant.neighborhood).toContain("Berkeley");
            expect(this.restaurant.description).toContain("Best pie in town");
            expect(this.restaurant.imageUrl).toContain("../../static/images/pizzaguy.jpg");
            expect(this.restaurant.lat).toBe('33.759815');
            expect(this.restaurant.lng).toBe('-84.364534');
            done();
        })  
    })

    // describe('#getReviews()', () => {
    //     it('should return all reviews with the park in scope', (done) => {
    //         this.restaurant.getReviews()
    //         .then((associatedReviews) => {
    //             expect(associatedReviews[0].body).toContain("Try the deep dish");
    //             expect(associatedReviews[0].rating).toEqual(5);
    //             expect(associatedReviews[0].restaurantId).toEqual(this.restaurant.id);
    //             expect(associatedReviews[0].userId).toEqual(this.user.id);
    //             done();
    //         })
    //     })
    // })
})
