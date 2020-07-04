/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v5/createAccountHolder ```
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { DocumentDetail } from './documentDetail.ts';

export class UploadDocumentRequest {
    /**
    * The content of the document as represented by a Base64-encoded string.  To learn about requirements, see [Bank account check](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks/bank-account-check#requirements) and [Photo ID check](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks/photo-id-check#requirements).
    */
    'documentContent': string;
    'documentDetail': DocumentDetail;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentContent",
            "baseName": "documentContent",
            "type": "string"
        },
        {
            "name": "documentDetail",
            "baseName": "documentDetail",
            "type": "DocumentDetail"
        }    ];

    static getAttributeTypeMap() {
        return UploadDocumentRequest.attributeTypeMap;
    }
}
