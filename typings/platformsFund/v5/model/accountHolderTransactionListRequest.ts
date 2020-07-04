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

 
 import { TransactionListForAccount } from './transactionListForAccount.ts';

export class AccountHolderTransactionListRequest {
    /**
    * The code of the account holder that owns the account(s) of which retrieve the transaction list.
    */
    'accountHolderCode': string;
    /**
    * A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.
    */
    'transactionListsPerAccount'?: Array<TransactionListForAccount>;
    /**
    * A list of statuses to include in the transaction list. If left blank, all transactions will be included. >Permitted values: >* `PendingCredit` - a pending balance credit. >* `CreditFailed` - a pending credit failure; the balance will not be credited. >* `Credited` - a credited balance. >* `PendingDebit` - a pending balance debit (e.g., a refund). >* `DebitFailed` - a pending debit failure; the balance will not be debited. >* `Debited` - a debited balance (e.g., a refund). >* `DebitReversedReceived` - a pending refund reversal. >* `DebitedReversed` - a reversed refund. >* `ChargebackReceived` - a received chargeback request. >* `Chargeback` - a processed chargeback. >* `ChargebackReversedReceived` - a pending chargeback reversal. >* `ChargebackReversed` - a reversed chargeback. >* `Converted` - converted. >* `ManualCorrected` - manual booking/adjustment by Adyen. >* `Payout` - a payout. >* `PayoutReversed` - a reversed payout. >* `PendingFundTransfer` - a pending transfer of funds from one account to another. >* `FundTransfer` - a transfer of funds from one account to another.
    */
    'transactionStatuses'?: Array<AccountHolderTransactionListRequest.TransactionStatusesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "transactionListsPerAccount",
            "baseName": "transactionListsPerAccount",
            "type": "Array<TransactionListForAccount>"
        },
        {
            "name": "transactionStatuses",
            "baseName": "transactionStatuses",
            "type": "Array<AccountHolderTransactionListRequest.TransactionStatusesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderTransactionListRequest.attributeTypeMap;
    }
}

export namespace AccountHolderTransactionListRequest {
    export enum TransactionStatusesEnum {
        Chargeback = <any> 'Chargeback',
        ChargebackCorrection = <any> 'ChargebackCorrection',
        ChargebackCorrectionReceived = <any> 'ChargebackCorrectionReceived',
        ChargebackReceived = <any> 'ChargebackReceived',
        ChargebackReversed = <any> 'ChargebackReversed',
        ChargebackReversedReceived = <any> 'ChargebackReversedReceived',
        Converted = <any> 'Converted',
        CreditFailed = <any> 'CreditFailed',
        CreditReversed = <any> 'CreditReversed',
        CreditReversedReceived = <any> 'CreditReversedReceived',
        Credited = <any> 'Credited',
        DebitFailed = <any> 'DebitFailed',
        DebitReversedReceived = <any> 'DebitReversedReceived',
        Debited = <any> 'Debited',
        DebitedReversed = <any> 'DebitedReversed',
        Fee = <any> 'Fee',
        FundTransfer = <any> 'FundTransfer',
        FundTransferReversed = <any> 'FundTransferReversed',
        ManualCorrected = <any> 'ManualCorrected',
        Payout = <any> 'Payout',
        PayoutReversed = <any> 'PayoutReversed',
        PendingCredit = <any> 'PendingCredit',
        PendingDebit = <any> 'PendingDebit',
        PendingFundTransfer = <any> 'PendingFundTransfer',
        SecondChargeback = <any> 'SecondChargeback',
        SecondChargebackReceived = <any> 'SecondChargebackReceived'
    }
}
