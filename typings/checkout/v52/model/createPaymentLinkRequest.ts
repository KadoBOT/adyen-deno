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

 
 import { Address } from './address.ts';
 import { Amount } from './amount.ts';
 import { LineItem } from './lineItem.ts';

export class CreatePaymentLinkRequest {
    /**
    * List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount': Amount;
    'billingAddress'?: Address;
    /**
    * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The shopper\'s country code.
    */
    'countryCode': string;
    'deliveryAddress'?: Address;
    /**
    * A short description visible on the Pay By Link page. Maximum length: 280 characters.
    */
    'description'?: string;
    /**
    * The date that the Pay By Link expires, in ISO 8601 format. For example, 2019-11-23T12:25:28Z. Maximum expiry date should be 30 days from when the payment link is created. If not provided, the default expiry duration is 24 hours.
    */
    'expiresAt'?: string;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This parameter is required for open invoice (_buy now, pay later_) payment methods such AfterPay, Klarna, RatePay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * Website URL used for redirection after payment is completed. If provided, a **Continue** button will be shown on the page. If shoppers select the button, they are redirected to the specified URL.
    */
    'returnUrl'?: string;
    /**
    * Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
    */
    'reusable'?: boolean;
    /**
    * The shopper\'s email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
    */
    'shopperEmail'?: string;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    /**
    * The shopper\'s reference to uniquely identify this shopper (e.g. user ID or account ID). > This field is required for recurring payments.
    */
    'shopperReference'?: string;
    /**
    * The physical store, for which this payment is processed.
    */
    'store'?: string;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored.
    */
    'storePaymentMethod'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "Address"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "reusable",
            "baseName": "reusable",
            "type": "boolean"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentLinkRequest.attributeTypeMap;
    }
}

