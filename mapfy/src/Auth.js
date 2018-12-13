import LinkedInStrategy from 'passport-linkedin';
//import linked from './config2';

passport.use(new LinkedInStrategy({
    {linked}
},

function(token, tokenSecret, profile, done) {
  User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

export default LinkedInStrategy;

