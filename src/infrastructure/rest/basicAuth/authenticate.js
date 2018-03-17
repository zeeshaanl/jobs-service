const unauthorized = (res) => {
    res.set('WWW-Authenticate', 'Basic realm=Secure Area');
    return res.send(401);
};

const authenticate = (req, res, next) => {
    const auth = req.headers['authorization'];

    if (!auth) {
        unauthorized(res)
    } else if (auth) {
        const origAuth = auth.split(' '); // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part
        const buff = new Buffer(origAuth[1], 'base64');
        const plainAuth = buff.toString();

        // At this point plainAuth = "username:password"

        const [username, password] = plainAuth.split(':');

        if ((username === process.env.JOB_PAGE_USER) && (password === process.env.JOB_PAGE_PASS)) {   // Is the username/password correct?
            res.statusCode = 200;  // OK
            return next();
        }
        else {
            unauthorized(res)
        }

    }
};

export default authenticate;
