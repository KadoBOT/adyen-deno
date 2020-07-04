/**
 * Adyen Payout API
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Online payouts](https://docs.adyen.com/checkout/online-payouts).
 *
 * The version of the OpenAPI document: 52
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class ModifyResponse {
    /**
    * This field contains additional data, which may be returned in a particular response.
    */
    'additionalData'?: object;
    /**
    * Adyen\'s 16-character string reference associated with the transaction. This value is globally unique; quote it when communicating with us about this response.
    */
    'pspReference': string;
    /**
    * The response: * In case of success, it is either `payout-confirm-received` or `payout-decline-received`. * In case of an error, an informational message is returned.
    */
    'response': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModifyResponse.attributeTypeMap;
    }
}

