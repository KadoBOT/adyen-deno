/**
 * Adyen Payment API
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v52/authorise ```
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
