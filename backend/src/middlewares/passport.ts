import passportJwt from "passport-jwt";
import passport from "passport";
import { User } from "../models/User";

// lets create our strategy for web token
var strategy = new passportJwt.Strategy({
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SIGN || 'bidding'
}, async function (payload, next) {
    var user = await User.findOne({ _id: payload.id, username: payload.username });
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
// use the strategy
passport.use(strategy);

export default passport;