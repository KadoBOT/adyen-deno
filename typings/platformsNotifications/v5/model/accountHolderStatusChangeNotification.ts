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

 
 import { AccountHolderStatusChangeNotificationContent } from './accountHolderStatusChangeNotificationContent.ts';
 import { NotificationErrorContainer } from './notificationErrorContainer.ts';

export class AccountHolderStatusChangeNotification {
    'content'?: AccountHolderStatusChangeNotificationContent;
    'error'?: NotificationErrorContainer;
    /**
    * The date and time when an event has been completed.
    */
    'eventDate': Date;
    /**
    * The event type of the notification.
    */
    'eventType': string;
    /**
    * The user or process that has triggered the notification.
    */
    'executingUserKey': string;
    /**
    * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
    */
    'live': boolean;
    /**
    * The PSP reference of the request from which the notification originates.
    */
    'pspReference': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "AccountHolderStatusChangeNotificationContent"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "NotificationErrorContainer"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "Date"
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "string"
        },
        {
            "name": "executingUserKey",
            "baseName": "executingUserKey",
            "type": "string"
        },
        {
            "name": "live",
            "baseName": "live",
            "type": "boolean"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderStatusChangeNotification.attributeTypeMap;
    }
}

