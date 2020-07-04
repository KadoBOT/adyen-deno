/**
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay/marketpay-notifications).
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class ViasAddress {
    /**
    * The name of the city. >Required if either `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.
    */
    'city'?: string;
    /**
    * The two-character country code of the address. The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\'). > If you don\'t know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
    */
    'country': string;
    /**
    * The number or name of the house.
    */
    'houseNumberOrName'?: string;
    /**
    * The postal code. >A maximum of five (5) digits for an address in the USA, or a maximum of ten (10) characters for an address in all other countries. >Required if either `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.
    */
    'postalCode'?: string;
    /**
    * The abbreviation of the state or province. >Two (2) characters for an address in the USA or Canada, or a maximum of three (3) characters for an address in all other countries. >Required for an address in the USA or Canada if either `houseNumberOrName`, `street`, `city`, or `postalCode` are provided.
    */
    'stateOrProvince'?: string;
    /**
    * The name of the street. >The house number should not be included in this field; it should be separately provided via `houseNumberOrName`. >Required if either `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.
    */
    'street'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "houseNumberOrName",
            "baseName": "houseNumberOrName",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "stateOrProvince",
            "baseName": "stateOrProvince",
            "type": "string"
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ViasAddress.attributeTypeMap;
    }
}

