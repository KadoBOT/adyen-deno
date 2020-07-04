/**
 * Adyen Payout API
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Online payouts](https://docs.adyen.com/checkout/online-payouts).
 *
 * The version of the OpenAPI document: 52
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class BrowserInfo {
    /**
    * The accept header value of the shopper\'s browser.
    */
    'acceptHeader': string;
    /**
    * The color depth of the shopper\'s browser in bits per pixel. This should be obtained by using the browser\'s `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 32 or 48 bit color depth.
    */
    'colorDepth': number;
    /**
    * Boolean value indicating if the shopper\'s browser is able to execute Java.
    */
    'javaEnabled': boolean;
    /**
    * Boolean value indicating if the shopper\'s browser is able to execute JavaScript. A default \'true\' value is assumed if the field is not present.
    */
    'javaScriptEnabled'?: boolean;
    /**
    * The `navigator.language` value of the shopper\'s browser (as defined in IETF BCP 47).
    */
    'language': string;
    /**
    * The total height of the shopper\'s device screen in pixels.
    */
    'screenHeight': number;
    /**
    * The total width of the shopper\'s device screen in pixels.
    */
    'screenWidth': number;
    /**
    * Time difference between UTC time and the shopper\'s browser local time, in minutes.
    */
    'timeZoneOffset': number;
    /**
    * The user agent value of the shopper\'s browser.
    */
    'userAgent': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptHeader",
            "baseName": "acceptHeader",
            "type": "string"
        },
        {
            "name": "colorDepth",
            "baseName": "colorDepth",
            "type": "number"
        },
        {
            "name": "javaEnabled",
            "baseName": "javaEnabled",
            "type": "boolean"
        },
        {
            "name": "javaScriptEnabled",
            "baseName": "javaScriptEnabled",
            "type": "boolean"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "screenHeight",
            "baseName": "screenHeight",
            "type": "number"
        },
        {
            "name": "screenWidth",
            "baseName": "screenWidth",
            "type": "number"
        },
        {
            "name": "timeZoneOffset",
            "baseName": "timeZoneOffset",
            "type": "number"
        },
        {
            "name": "userAgent",
            "baseName": "userAgent",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BrowserInfo.attributeTypeMap;
    }
}

