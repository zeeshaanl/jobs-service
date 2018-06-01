import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey';

class FirebaseAdmin {
    constructor() {
        this.admin = admin;
        this.admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://jobi-9dfd0.firebaseio.com"
        });
    }

    /**
     *
     * @param {string} idToken
     * @returns {Promise<string>}
     */
    async verifyIdToken(idToken) {
        const decodedToken = await this.admin.auth().verifyIdToken(idToken, true);
        return decodedToken.uid;
    }
}

const firebaseAdminInstance = new FirebaseAdmin();

export default firebaseAdminInstance;