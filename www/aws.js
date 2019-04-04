"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const config_1 = require("./config/config");
const c = config_1.config.dev;
//Configure AWS
//TODO IF ENV IS DEV
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
exports.s3 = new AWS.S3({
    signatureVersion: 'v4',
    region: c.aws_reigion,
    params: { Bucket: c.aws_media_bucket }
});
/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
function getGetSignedUrl(key) {
    return 'https://s3-us-west-1.amazonaws.com/udacity-content/images/icon-error.svg';
    // const signedUrlExpireSeconds = 60 * 5
    // const url = s3.getSignedUrl('getObject', {
    //     Bucket: feedUrlBucket,
    //     Key: key,
    //     Expires: signedUrlExpireSeconds
    //   });
    // return url;
}
exports.getGetSignedUrl = getGetSignedUrl;
/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
function getPutSignedUrl(key) {
    return 'wompwomp';
    // const signedUrlExpireSeconds = 60 * 5
    // const url = s3.getSignedUrl('putObject', {
    //   Bucket: feedUrlBucket,
    //   Key: key,
    //   Expires: signedUrlExpireSeconds
    // });
    // return url;
}
exports.getPutSignedUrl = getPutSignedUrl;
//# sourceMappingURL=aws.js.map