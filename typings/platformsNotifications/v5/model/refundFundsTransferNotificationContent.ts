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

 
 import { Amount } from './amount.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { OperationStatus } from './operationStatus.ts';

export class RefundFundsTransferNotificationContent {
    'amount': Amount;
    /**
    * Invalid fields list.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
    */
    'merchantReference'?: string;
    /**
    * A PSP reference of the original fund transfer.
    */
    'originalReference': string;
    'status'?: OperationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationStatus"
        }    ];

    static getAttributeTypeMap() {
        return RefundFundsTransferNotificationContent.attributeTypeMap;
    }
}

