/**
 * Adyen BinLookup API
 * The BIN Lookup API provides endpoints for retrieving information, such as cost estimates, and 3D Secure supported version based on a given BIN.
 *
 * The version of the OpenAPI document: 50
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class ThreeDS2CardRangeDetail {
    /**
    * Card brand.
    */
    'brandCode'?: string;
    /**
    * BIN end range.
    */
    'endRange'?: string;
    /**
    * BIN start range.
    */
    'startRange'?: string;
    /**
    * 3D Secure protocol version.
    */
    'threeDS2Version'?: string;
    /**
    * In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.
    */
    'threeDSMethodURL'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brandCode",
            "baseName": "brandCode",
            "type": "string"
        },
        {
            "name": "endRange",
            "baseName": "endRange",
            "type": "string"
        },
        {
            "name": "startRange",
            "baseName": "startRange",
            "type": "string"
        },
        {
            "name": "threeDS2Version",
            "baseName": "threeDS2Version",
            "type": "string"
        },
        {
            "name": "threeDSMethodURL",
            "baseName": "threeDSMethodURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2CardRangeDetail.attributeTypeMap;
    }
}
