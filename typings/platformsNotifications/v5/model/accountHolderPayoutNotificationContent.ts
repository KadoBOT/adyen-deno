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
 import { BankAccountDetail } from './bankAccountDetail.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { LocalDate } from './localDate.ts';
 import { OperationStatus } from './operationStatus.ts';

export class AccountHolderPayoutNotificationContent {
    /**
    * The code of the account from which the payout was made.
    */
    'accountCode': string;
    /**
    * The code of the Account Holder to which the payout was made.
    */
    'accountHolderCode': string;
    'amount'?: Amount;
    /**
    * The payout amounts (per currency).
    */
    'amounts'?: Array<Amount>;
    'bankAccountDetail'?: BankAccountDetail;
    /**
    * A description of the payout.
    */
    'description'?: string;
    'estimatedArrivalDate'?: LocalDate;
    /**
    * Invalid fields list.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The merchant reference.
    */
    'merchantReference'?: string;
    /**
    * The PSP reference of the original payout.
    */
    'originalPspReference'?: string;
    'status'?: OperationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "amounts",
            "baseName": "amounts",
            "type": "Array<Amount>"
        },
        {
            "name": "bankAccountDetail",
            "baseName": "bankAccountDetail",
            "type": "BankAccountDetail"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "estimatedArrivalDate",
            "baseName": "estimatedArrivalDate",
            "type": "LocalDate"
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
            "name": "originalPspReference",
            "baseName": "originalPspReference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OperationStatus"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderPayoutNotificationContent.attributeTypeMap;
    }
}

