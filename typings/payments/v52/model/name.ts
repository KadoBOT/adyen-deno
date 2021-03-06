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

 

export class Name {
    /**
    * The first name.
    */
    'firstName': string;
    /**
    * The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
    */
    'gender': Name.GenderEnum;
    /**
    * The name\'s infix, if applicable. >A maximum length of twenty (20) characters is imposed.
    */
    'infix'?: string;
    /**
    * The last name.
    */
    'lastName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "Name.GenderEnum"
        },
        {
            "name": "infix",
            "baseName": "infix",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Name.attributeTypeMap;
    }
}

export namespace Name {
    export enum GenderEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
