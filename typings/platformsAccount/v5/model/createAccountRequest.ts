/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v5/createAccountHolder ```
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class CreateAccountRequest {
    /**
    * The code of Account Holder under which to create the account.
    */
    'accountHolderCode': string;
    /**
    * A description of the account.
    */
    'description'?: string;
    /**
    * A set of key and value pairs for general use by the merchant. The keys do not have specific names and may be used for storing miscellaneous data as desired. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The payout schedule of the prospective account. >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
    */
    'payoutSchedule'?: CreateAccountRequest.PayoutScheduleEnum;
    /**
    * The reason for the payout schedule choice. >Required if the payoutSchedule is `HOLD`.
    */
    'payoutScheduleReason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "payoutSchedule",
            "baseName": "payoutSchedule",
            "type": "CreateAccountRequest.PayoutScheduleEnum"
        },
        {
            "name": "payoutScheduleReason",
            "baseName": "payoutScheduleReason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountRequest.attributeTypeMap;
    }
}

export namespace CreateAccountRequest {
    export enum PayoutScheduleEnum {
        BIWEEKLYON1STAND15THATMIDNIGHT = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        BIWEEKLYON1STAND15THATNOON = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_NOON',
        DAILY = <any> 'DAILY',
        DAILY6PM = <any> 'DAILY_6PM',
        DAILYAU = <any> 'DAILY_AU',
        DAILYEU = <any> 'DAILY_EU',
        DAILYUS = <any> 'DAILY_US',
        DEFAULT = <any> 'DEFAULT',
        EVERY6HOURSFROMMIDNIGHT = <any> 'EVERY_6_HOURS_FROM_MIDNIGHT',
        HOLD = <any> 'HOLD',
        MONTHLY = <any> 'MONTHLY',
        WEEKLY = <any> 'WEEKLY',
        WEEKLYONTUEFRIMIDNIGHT = <any> 'WEEKLY_ON_TUE_FRI_MIDNIGHT',
        YEARLY = <any> 'YEARLY'
    }
}
