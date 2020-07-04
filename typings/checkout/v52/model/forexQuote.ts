/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v52/payments ```
 *
 * The version of the OpenAPI document: 52
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { Amount } from './amount.ts';

export class ForexQuote {
    /**
    * The account name.
    */
    'account'?: string;
    /**
    * The account type.
    */
    'accountType'?: string;
    'baseAmount'?: Amount;
    /**
    * The base points.
    */
    'basePoints': number;
    'buy'?: Amount;
    'interbank'?: Amount;
    /**
    * The reference assigned to the forex quote request.
    */
    'reference'?: string;
    'sell'?: Amount;
    /**
    * The signature to validate the integrity.
    */
    'signature'?: string;
    /**
    * The source of the forex quote.
    */
    'source'?: string;
    /**
    * The type of forex.
    */
    'type'?: string;
    /**
    * The date until which the forex quote is valid.
    */
    'validTill': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string"
        },
        {
            "name": "baseAmount",
            "baseName": "baseAmount",
            "type": "Amount"
        },
        {
            "name": "basePoints",
            "baseName": "basePoints",
            "type": "number"
        },
        {
            "name": "buy",
            "baseName": "buy",
            "type": "Amount"
        },
        {
            "name": "interbank",
            "baseName": "interbank",
            "type": "Amount"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "sell",
            "baseName": "sell",
            "type": "Amount"
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "validTill",
            "baseName": "validTill",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ForexQuote.attributeTypeMap;
    }
}

