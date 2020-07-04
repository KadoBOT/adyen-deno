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

 
 import { FieldType } from './fieldType.ts';

export class ErrorFieldType {
    /**
    * The validation error code.
    */
    'errorCode'?: number;
    /**
    * A description of the validation error.
    */
    'errorDescription'?: string;
    'fieldType'?: FieldType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "number"
        },
        {
            "name": "errorDescription",
            "baseName": "errorDescription",
            "type": "string"
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "FieldType"
        }    ];

    static getAttributeTypeMap() {
        return ErrorFieldType.attributeTypeMap;
    }
}

