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

 

export class ModificationResult {
    /**
    * This field contains additional data, which may be returned in a particular modification response.
    */
    'additionalData'?: object;
    /**
    * Adyen\'s 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * Indicates if the modification request has been received for processing.
    */
    'response'?: ModificationResult.ResponseEnum;

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
            "type": "ModificationResult.ResponseEnum"
        }    ];

    static getAttributeTypeMap() {
        return ModificationResult.attributeTypeMap;
    }
}

export namespace ModificationResult {
    export enum ResponseEnum {
        CaptureReceived = <any> '[capture-received]',
        CancelReceived = <any> '[cancel-received]',
        RefundReceived = <any> '[refund-received]',
        CancelOrRefundReceived = <any> '[cancelOrRefund-received]',
        AdjustAuthorisationReceived = <any> '[adjustAuthorisation-received]',
        TechnicalCancelReceived = <any> '[technical-cancel-received]',
        VoidPendingRefundReceived = <any> '[voidPendingRefund-received]'
    }
}
