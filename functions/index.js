const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const createNotice = ((notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

exports.userCreated = functions.auth.user()
    .onCreate(user => {

        return admin.firestore.collection('users')
        .doc(user.uid).get().then(doc => {

            const newUser = doc.data();
            const notification = {
                content: 'New Party Joined us',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotice(notification);
        });
});

