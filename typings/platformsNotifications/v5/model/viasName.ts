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

 

export class ViasName {
    /**
    * The first name.
    */
    'firstName': string;
    /**
    * The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
    */
    'gender': ViasName.GenderEnum;
    /**
    * The name\'s infix, if applicable. >A maximum length of twenty (20) characters is imposed.
    */
    'infix'?: string;
    /**
    * The last name.
    */
    'lastName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "ViasName.GenderEnum"
        },
        {
            "name": "infix",
            "baseName": "infix",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ViasName.attributeTypeMap;
    }
}

export namespace ViasName {
    export enum GenderEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
