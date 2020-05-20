const functions = require('firebase-functions');
const app = require('express')();
const FBauth = require('./util/fbAuth');

const { 
    getAllScreams,
    postOneScream,
    getScream,
    commentOnScream,
    likeScream,
    unlikeScream
} = require('./handlers/screams');
const { 
    signUp, 
    login, 
    uploadImage, 
    addUserDetails, 
    getAuthenticatedUser 
} = require('./handlers/users');

app.get('/screams', getAllScreams);
app.post('/scream', FBauth, postOneScream);
app.post('/user/image', FBauth, uploadImage);
app.post('/user', FBauth, addUserDetails);
app.get('/user', FBauth, getAuthenticatedUser);
app.get('/scream/:screamId', getScream);
app.post('/scream/:screamId/comment', FBauth, commentOnScream);
app.get('/scream/:screamId/like', FBauth, likeScream);
app.get('/scream/:screamId/unlike', FBauth, unlikeScream);

app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.region('us-central1').https.onRequest(app);