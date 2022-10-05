function getReferrer(success, error) {
    if (!success) {
        return new Promise(function (resolve, reject) {
            getReferrer(resolve, reject);
        });
    }

    cordova.exec(success, error, 'referrer');
}

exports.getReferrer = getReferrer;
exports.get = getReferrer;
