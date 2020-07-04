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

 
 import { KYCBankAccountCheckResult } from './kYCBankAccountCheckResult.ts';
 import { KYCCheckResult } from './kYCCheckResult.ts';
 import { KYCShareholderCheckResult } from './kYCShareholderCheckResult.ts';

export class KYCVerificationResult {
    'accountHolder': KYCCheckResult;
    /**
    * The result(s) of the checks on the bank account(s).
    */
    'bankAccounts': Array<KYCBankAccountCheckResult>;
    /**
    * The result(s) of the checks on the shareholder(s).
    */
    'shareholders': Array<KYCShareholderCheckResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "KYCCheckResult"
        },
        {
            "name": "bankAccounts",
            "baseName": "bankAccounts",
            "type": "Array<KYCBankAccountCheckResult>"
        },
        {
            "name": "shareholders",
            "baseName": "shareholders",
            "type": "Array<KYCShareholderCheckResult>"
        }    ];

    static getAttributeTypeMap() {
        return KYCVerificationResult.attributeTypeMap;
    }
}

