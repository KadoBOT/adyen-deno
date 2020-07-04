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

 
 import { ErrorFieldType } from './errorFieldType.ts';
 import { Message } from './message.ts';

export class PaymentFailureNotificationContent {
    /**
    * Missing or invalid fields that caused the payment error.
    */
    'errorFields': Array<ErrorFieldType>;
    'errorMessage': Message;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorFields",
            "baseName": "errorFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "Message"
        }    ];

    static getAttributeTypeMap() {
        return PaymentFailureNotificationContent.attributeTypeMap;
    }
}

