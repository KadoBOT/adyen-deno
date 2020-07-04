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

 

export class ResponseAdditionalDataBillingAddress {
    /**
    * The billing address city passed in the payment request.
    */
    'billingAddressCity'?: string;
    /**
    * The billing address country passed in the payment request.  Example: NL
    */
    'billingAddressCountry'?: string;
    /**
    * The billing address house number or name passed in the payment request.
    */
    'billingAddressHouseNumberOrName'?: string;
    /**
    * The billing address postal code passed in the payment request.  Example: 1011 DJ
    */
    'billingAddressPostalCode'?: string;
    /**
    * The billing address state or province passed in the payment request.  Example: NH
    */
    'billingAddressStateOrProvince'?: string;
    /**
    * The billing address street passed in the payment request.
    */
    'billingAddressStreet'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddressCity",
            "baseName": "billingAddress.city",
            "type": "string"
        },
        {
            "name": "billingAddressCountry",
            "baseName": "billingAddress.country",
            "type": "string"
        },
        {
            "name": "billingAddressHouseNumberOrName",
            "baseName": "billingAddress.houseNumberOrName",
            "type": "string"
        },
        {
            "name": "billingAddressPostalCode",
            "baseName": "billingAddress.postalCode",
            "type": "string"
        },
        {
            "name": "billingAddressStateOrProvince",
            "baseName": "billingAddress.stateOrProvince",
            "type": "string"
        },
        {
            "name": "billingAddressStreet",
            "baseName": "billingAddress.street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataBillingAddress.attributeTypeMap;
    }
}

