const sequelize = require("../../src/db/models/index").sequelize;
const Park = require("../../src/db/models").Park;

describe('Parks', () => {
    
    beforeEach((done) => {
        this.park;
   
        sequelize.sync({force: true}).then((res) => {
            Park.create({
              name: "Mission Dolores Park",
              address: '19th Street',
              neighborhood: 'Mission',
              description: "Leave no trace"
            })
            .then((park) => {
              this.park = park;
              done();
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
})
