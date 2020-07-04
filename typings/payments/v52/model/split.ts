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

 
 import { SplitAmount } from './splitAmount.ts';

export class Split {
    /**
    * The account to which this split applies.  >Required if the type is `MarketPlace`.
    */
    'account'?: string;
    'amount': SplitAmount;
    /**
    * A description of this split.
    */
    'description'?: string;
    /**
    * The reference of this split. Used to link other operations (e.g. captures and refunds) to this split.  >Required if the type is `MarketPlace`.
    */
    'reference'?: string;
    /**
    * The type of this split.  >Permitted values: `Default`, `PaymentFee`, `VAT`, `Commission`, `MarketPlace`, `BalanceAccount`.
    */
    'type': Split.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "SplitAmount"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Split.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Split.attributeTypeMap;
    }
}

export namespace Split {
    export enum TypeEnum {
        BalanceAccount = <any> 'BalanceAccount',
        Commission = <any> 'Commission',
        Default = <any> 'Default',
        MarketPlace = <any> 'MarketPlace',
        PaymentFee = <any> 'PaymentFee',
        VAT = <any> 'VAT',
        Verification = <any> 'Verification'
    }
}