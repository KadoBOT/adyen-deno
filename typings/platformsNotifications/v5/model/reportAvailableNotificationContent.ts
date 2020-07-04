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

 

export class ReportAvailableNotificationContent {
    /**
    * The code of the Account to which the report applies.
    */
    'accountCode'?: string;
    /**
    * The type of Account to which the report applies.
    */
    'accountType'?: string;
    /**
    * The date of the event to which the report applies.
    */
    'eventDate'?: Date;
    /**
    * The URL at which the report can be accessed.
    */
    'remoteAccessUrl'?: string;
    /**
    * Indicates whether the event resulted in a success.
    */
    'success'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "Date"
        },
        {
            "name": "remoteAccessUrl",
            "baseName": "remoteAccessUrl",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReportAvailableNotificationContent.attributeTypeMap;
    }
}
