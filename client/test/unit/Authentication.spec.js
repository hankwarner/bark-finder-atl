import { authenticationService } from '../../src/services/AuthenticationService';
import User from '../../../server/src/db/models/user';
import sequelize from "../../../server/src/db/models/index";

describe('authentication services', () => {
  beforeEach((done) => {
    this.user;

    sequelize.sync({force: true})
    .then((res) => {
      User.create({
        username: "lorem",
        email: "lorem@ipsem.com",
        password: "1a2b3c4d5e6"
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

  describe('login', () => {
    it('should login the user', () => {
      authenticationService.login({
        username: this.username,
        password: this.password
      });
      expect(response.data.user.username).toEqual(this.user.username);
      expect(response.data.user.email).toEqual(this.user.email);
    })
  })

  describe('register', () => {
    it('should register a new user', () => {      
      var newUser = {
        email: 'megaman@capcom.com',
        username: 'megaman',
        password: 'pewpewpew',
        passwordConfirmation: 'pewpewpew'
      }
      
      authenticationService.register(newUser);
      expect(response.data.user.username).toEqual(newUser.username);
      expect(response.data.user.token).not.toBeNull();
    })
  })
})
