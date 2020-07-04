/**
 * POS Terminal Management API
 * This API provides endpoints for Point of sale (POS) Terminal Management. You can use the API to assign terminals to a merchant account or store, find where a terminal is assigned, and retrieve a list of all terminals assigned to your company account, merchant account, or store.  For more information on using the APIs, refer to [Assign terminals in bulk](https://docs.adyen.com/point-of-sale/managing-terminals/board-terminal/bulk-assign-terminals).  ## Authentication Each request to the Terminal Management API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_API_key\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Terminal Management API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://postfmapi-test.adyen.com/postfmapi/terminal/v1/getTerminalsUnderAccount ```
 *
 * The version of the OpenAPI document: 1
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class FindTerminalRequest {
    /**
    * The unique terminal ID in the format `[Device model]-[Serial number]`.   For example, **V400m-324689776**.
    */
    'terminal': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "terminal",
            "baseName": "terminal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FindTerminalRequest.attributeTypeMap;
    }
}

