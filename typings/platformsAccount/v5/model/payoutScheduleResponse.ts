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

 

export class PayoutScheduleResponse {
    /**
    * The date of the next scheduled payout.
    */
    'nextScheduledPayout': Date;
    /**
    * The payout schedule of the account. >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
    */
    'schedule': PayoutScheduleResponse.ScheduleEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nextScheduledPayout",
            "baseName": "nextScheduledPayout",
            "type": "Date"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "PayoutScheduleResponse.ScheduleEnum"
        }    ];

    static getAttributeTypeMap() {
        return PayoutScheduleResponse.attributeTypeMap;
    }
}

export namespace PayoutScheduleResponse {
    export enum ScheduleEnum {
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
