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

export class TransferFundsNotificationContent {
    'amount': Amount;
    /**
    * The code of the Account to which funds were credited.
    */
    'destinationAccountCode': string;
    /**
    * Invalid fields list.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The reference provided by the merchant.
    */
    'merchantReference'?: string;
    /**
    * The code of the Account from which funds were debited.
    */
    'sourceAccountCode': string;
    'status'?: OperationStatus;
    /**
    * The transfer code.
    */
    'transferCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "destinationAccountCode",
            "baseName": "destinationAccountCode",
            "type": "string"
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
            "name": "sourceAccountCode",
            "baseName": "sourceAccountCode",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationStatus"
        },
        {
            "name": "transferCode",
            "baseName": "transferCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferFundsNotificationContent.attributeTypeMap;
    }
}
