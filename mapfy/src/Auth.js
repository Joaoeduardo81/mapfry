import LinkedInStrategy from 'passport-linkedin';

passport.use(new LinkedInStrategy({
  consumerKey: "778z9t10nsrwax",
  consumerSecret: "iTOgePcJpxbnB9OX",
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
},
function(token, tokenSecret, profile, done) {
  User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));