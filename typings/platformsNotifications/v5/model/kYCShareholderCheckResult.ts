/**
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay/marketpay-notifications).
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { KYCCheckStatusData } from './kYCCheckStatusData.ts';

export class KYCShareholderCheckResult {
    /**
    * A list of the checks and their statuses.
    */
    'checks': Array<KYCCheckStatusData>;
    /**
    * The code of the shareholder to which the check applies.
    */
    'shareholderCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checks",
            "baseName": "checks",
            "type": "Array<KYCCheckStatusData>"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return KYCShareholderCheckResult.attributeTypeMap;
    }
}

