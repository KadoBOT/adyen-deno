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

 
 import { AccountHolderDetails } from './accountHolderDetails.ts';
 import { AccountHolderStatus } from './accountHolderStatus.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { KYCVerificationResult } from './kYCVerificationResult.ts';

export class UpdateAccountHolderResponse {
    /**
    * The code of the account holder.
    */
    'accountHolderCode'?: string;
    'accountHolderDetails'?: AccountHolderDetails;
    'accountHolderStatus': AccountHolderStatus;
    /**
    * The description of the account holder.
    */
    'description'?: string;
    /**
    * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The legal entity of the account holder.
    */
    'legalEntity': UpdateAccountHolderResponse.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The reference of a request.  Can be used to uniquely identify the request.
    */
    'pspReference': string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'verification': KYCVerificationResult;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "accountHolderDetails",
            "baseName": "accountHolderDetails",
            "type": "AccountHolderDetails"
        },
        {
            "name": "accountHolderStatus",
            "baseName": "accountHolderStatus",
            "type": "AccountHolderStatus"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "UpdateAccountHolderResponse.LegalEntityEnum"
        },
        {
            "name": "primaryCurrency",
            "baseName": "primaryCurrency",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "KYCVerificationResult"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAccountHolderResponse.attributeTypeMap;
    }
}

export namespace UpdateAccountHolderResponse {
    export enum LegalEntityEnum {
        Business = <any> 'Business',
        Individual = <any> 'Individual',
        NonProfit = <any> 'NonProfit',
        Partnership = <any> 'Partnership',
        PublicCompany = <any> 'PublicCompany'
    }
}
