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

 

export class ResponseAdditionalDataDeliveryAddress {
    /**
    * The delivery address city passed in the payment request.
    */
    'deliveryAddressCity'?: string;
    /**
    * The delivery address country passed in the payment request.  Example: NL
    */
    'deliveryAddressCountry'?: string;
    /**
    * The delivery address house number or name passed in the payment request.
    */
    'deliveryAddressHouseNumberOrName'?: string;
    /**
    * The delivery address postal code passed in the payment request.  Example: 1011 DJ
    */
    'deliveryAddressPostalCode'?: string;
    /**
    * The delivery address state or province passed in the payment request.  Example: NH
    */
    'deliveryAddressStateOrProvince'?: string;
    /**
    * The delivery address street passed in the payment request.
    */
    'deliveryAddressStreet'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deliveryAddressCity",
            "baseName": "deliveryAddress.city",
            "type": "string"
        },
        {
            "name": "deliveryAddressCountry",
            "baseName": "deliveryAddress.country",
            "type": "string"
        },
        {
            "name": "deliveryAddressHouseNumberOrName",
            "baseName": "deliveryAddress.houseNumberOrName",
            "type": "string"
        },
        {
            "name": "deliveryAddressPostalCode",
            "baseName": "deliveryAddress.postalCode",
            "type": "string"
        },
        {
            "name": "deliveryAddressStateOrProvince",
            "baseName": "deliveryAddress.stateOrProvince",
            "type": "string"
        },
        {
            "name": "deliveryAddressStreet",
            "baseName": "deliveryAddress.street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataDeliveryAddress.attributeTypeMap;
    }
}

