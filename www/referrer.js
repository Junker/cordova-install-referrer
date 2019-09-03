function getReferrer(success, error) {
    if (!success) {
        return new Promise(function (resolve, reject) {
            getReferrer(resolve, reject);
        });
    }

    cordova.exec(function (result) {
        if (result) {
            success(result);
        } else {
            setTimeout(function () {
                getReferrer(success, error)
            }, 500);
        }
    }, error, 'referrer');
}

exports.getReferrer = getReferrer;
exports.get = getReferrer;
