/**
 * Adyen for Platforms: Fund API
 * The Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include actions such as the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay). ## Authentication To connect to the Fund API, you must use basic authentication credentials of your web service user. If you don\'t have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Fund API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Fund/v5/accountHolderBalance ```
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { Amount } from './amount.ts';

export class TransferFundsRequest {
    'amount': Amount;
    /**
    * The code of the account to which the funds are to be credited. >The state of the Account Holder of this account must be Active.
    */
    'destinationAccountCode': string;
    /**
    * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
    */
    'merchantReference'?: string;
    /**
    * The code of the account from which the funds are to be debited. >The state of the Account Holder of this account must be Active and allow payouts.
    */
    'sourceAccountCode': string;
    /**
    * The code related to the type of transfer being performed. >The permitted codes differ for each platform account and are defined in their service level agreement.
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
            "name": "transferCode",
            "baseName": "transferCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferFundsRequest.attributeTypeMap;
    }
}

