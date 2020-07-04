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

 

export class ShopperInput {
    /**
    * Specifies visibility of billing address fields.  Permitted values: * editable * hidden * readOnly
    */
    'billingAddress'?: ShopperInput.BillingAddressEnum;
    /**
    * Specifies visibility of delivery address fields.  Permitted values: * editable * hidden * readOnly
    */
    'deliveryAddress'?: ShopperInput.DeliveryAddressEnum;
    /**
    * Specifies visibility of personal details.  Permitted values: * editable * hidden * readOnly
    */
    'personalDetails'?: ShopperInput.PersonalDetailsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "ShopperInput.BillingAddressEnum"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "ShopperInput.DeliveryAddressEnum"
        },
        {
            "name": "personalDetails",
            "baseName": "personalDetails",
            "type": "ShopperInput.PersonalDetailsEnum"
        }    ];

    static getAttributeTypeMap() {
        return ShopperInput.attributeTypeMap;
    }
}

export namespace ShopperInput {
    export enum BillingAddressEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
    export enum DeliveryAddressEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
    export enum PersonalDetailsEnum {
        Editable = <any> 'editable',
        Hidden = <any> 'hidden',
        ReadOnly = <any> 'readOnly'
    }
}
