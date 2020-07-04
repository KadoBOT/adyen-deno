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

 
 import { AccountInfo } from './accountInfo.ts';
 import { AdditionalData3DSecure } from './additionalData3DSecure.ts';
 import { AdditionalDataAirline } from './additionalDataAirline.ts';
 import { AdditionalDataCarRental } from './additionalDataCarRental.ts';
 import { AdditionalDataCommon } from './additionalDataCommon.ts';
 import { AdditionalDataLevel23 } from './additionalDataLevel23.ts';
 import { AdditionalDataLodging } from './additionalDataLodging.ts';
 import { AdditionalDataOpenInvoice } from './additionalDataOpenInvoice.ts';
 import { AdditionalDataRatepay } from './additionalDataRatepay.ts';
 import { AdditionalDataRetry } from './additionalDataRetry.ts';
 import { AdditionalDataRisk } from './additionalDataRisk.ts';
 import { AdditionalDataRiskStandalone } from './additionalDataRiskStandalone.ts';
 import { AdditionalDataTemporaryServices } from './additionalDataTemporaryServices.ts';
 import { Address } from './address.ts';
 import { Amount } from './amount.ts';
 import { ApplicationInfo } from './applicationInfo.ts';
 import { BrowserInfo } from './browserInfo.ts';
 import { Company } from './company.ts';
 import { ForexQuote } from './forexQuote.ts';
 import { Installments } from './installments.ts';
 import { LineItem } from './lineItem.ts';
 import { MerchantRiskIndicator } from './merchantRiskIndicator.ts';
 import { Name } from './name.ts';
 import { RiskData } from './riskData.ts';
 import { Split } from './split.ts';
 import { ThreeDS2RequestData } from './threeDS2RequestData.ts';
 import { ThreeDSecureData } from './threeDSecureData.ts';

export class PaymentRequest {
    'accountInfo'?: AccountInfo;
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices;
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'billingAddress'?: Address;
    'browserInfo'?: BrowserInfo;
    /**
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
    */
    'channel'?: PaymentRequest.ChannelEnum;
    'company'?: Company;
    /**
    * Conversion ID that corresponds to the Id generated for tracking user payment journey.
    */
    'conversionId'?: string;
    /**
    * The shopper country.  Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or DE
    */
    'countryCode'?: string;
    /**
    * The shopper\'s date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
    */
    'dateOfBirth'?: Date;
    'dccQuote'?: ForexQuote;
    'deliveryAddress'?: Address;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliveryDate'?: Date;
    /**
    * A string containing the shopper\'s device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
    */
    'deviceFingerprint'?: string;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
    */
    'enableRealTimeUpdate'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The type of the entity the payment is processed for.
    */
    'entityType'?: PaymentRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    'installments'?: Installments;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for Klarna, AfterPay, and RatePay.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
    */
    'mcc'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
    */
    'merchantOrderReference'?: string;
    'merchantRiskIndicator'?: MerchantRiskIndicator;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limitations: Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\".
    */
    'metadata'?: object;
    'mpiData'?: ThreeDSecureData;
    /**
    * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
    */
    'orderReference'?: string;
    /**
    * Required for the 3D Secure 2 `channel` **Web** integration.  Set this parameter to the origin URL of the page that you are loading the 3D Secure Component from.
    */
    'origin'?: string;
    /**
    * The collection that contains the type of the payment method and its specific information (e.g. `idealIssuer`).
    */
    'paymentMethod': object;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * Defines a recurring payment type. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: PaymentRequest.RecurringProcessingModelEnum;
    /**
    * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
    */
    'redirectFromIssuerMethod'?: string;
    /**
    * Specifies the redirect method (GET or POST) when redirecting to the issuer.
    */
    'redirectToIssuerMethod'?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name`
    */
    'returnUrl': string;
    'riskData'?: RiskData;
    /**
    * The maximum validity of the session.
    */
    'sessionValidity'?: string;
    /**
    * The shopper\'s email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > Required for 3D Secure 2 transactions. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: PaymentRequest.ShopperInteractionEnum;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * The shopper\'s reference to uniquely identify this shopper (e.g. user ID or account ID). > This field is required for recurring payments.
    */
    'shopperReference'?: string;
    /**
    * The text to appear on the shopper\'s bank statement.
    */
    'shopperStatement'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/marketpay/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored.
    */
    'storePaymentMethod'?: boolean;
    /**
    * The physical store, for which this payment is processed.
    */
    'store'?: string;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    'threeDS2RequestData'?: ThreeDS2RequestData;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountInfo",
            "baseName": "accountInfo",
            "type": "AccountInfo"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "browserInfo",
            "baseName": "browserInfo",
            "type": "BrowserInfo"
        },
        {
            "name": "captureDelayHours",
            "baseName": "captureDelayHours",
            "type": "number"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PaymentRequest.ChannelEnum"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company"
        },
        {
            "name": "conversionId",
            "baseName": "conversionId",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date"
        },
        {
            "name": "dccQuote",
            "baseName": "dccQuote",
            "type": "ForexQuote"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "Address"
        },
        {
            "name": "deliveryDate",
            "baseName": "deliveryDate",
            "type": "Date"
        },
        {
            "name": "deviceFingerprint",
            "baseName": "deviceFingerprint",
            "type": "string"
        },
        {
            "name": "enableOneClick",
            "baseName": "enableOneClick",
            "type": "boolean"
        },
        {
            "name": "enablePayOut",
            "baseName": "enablePayOut",
            "type": "boolean"
        },
        {
            "name": "enableRealTimeUpdate",
            "baseName": "enableRealTimeUpdate",
            "type": "boolean"
        },
        {
            "name": "enableRecurring",
            "baseName": "enableRecurring",
            "type": "boolean"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "PaymentRequest.EntityTypeEnum"
        },
        {
            "name": "fraudOffset",
            "baseName": "fraudOffset",
            "type": "number"
        },
        {
            "name": "installments",
            "baseName": "installments",
            "type": "Installments"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantOrderReference",
            "baseName": "merchantOrderReference",
            "type": "string"
        },
        {
            "name": "merchantRiskIndicator",
            "baseName": "merchantRiskIndicator",
            "type": "MerchantRiskIndicator"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "orderReference",
            "baseName": "orderReference",
            "type": "string"
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "object"
        },
        {
            "name": "recurringExpiry",
            "baseName": "recurringExpiry",
            "type": "string"
        },
        {
            "name": "recurringFrequency",
            "baseName": "recurringFrequency",
            "type": "string"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "PaymentRequest.RecurringProcessingModelEnum"
        },
        {
            "name": "redirectFromIssuerMethod",
            "baseName": "redirectFromIssuerMethod",
            "type": "string"
        },
        {
            "name": "redirectToIssuerMethod",
            "baseName": "redirectToIssuerMethod",
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
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
        },
        {
            "name": "sessionValidity",
            "baseName": "sessionValidity",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperIP",
            "baseName": "shopperIP",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "PaymentRequest.ShopperInteractionEnum"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "threeDS2RequestData",
            "baseName": "threeDS2RequestData",
            "type": "ThreeDS2RequestData"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        },
        {
            "name": "trustedShopper",
            "baseName": "trustedShopper",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentRequest.attributeTypeMap;
    }
}

export namespace PaymentRequest {
    export enum ChannelEnum {
        IOS = <any> 'iOS',
        Android = <any> 'Android',
        Web = <any> 'Web'
    }
    export enum EntityTypeEnum {
        NaturalPerson = <any> 'NaturalPerson',
        CompanyName = <any> 'CompanyName'
    }
    export enum RecurringProcessingModelEnum {
        CardOnFile = <any> 'CardOnFile',
        Subscription = <any> 'Subscription',
        UnscheduledCardOnFile = <any> 'UnscheduledCardOnFile'
    }
    export enum ShopperInteractionEnum {
        Ecommerce = <any> 'Ecommerce',
        ContAuth = <any> 'ContAuth',
        Moto = <any> 'Moto',
        POS = <any> 'POS'
    }
}
