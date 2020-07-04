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

 
 import { CommonField } from './commonField.ts';
 import { ExternalPlatform } from './externalPlatform.ts';
 import { MerchantDevice } from './merchantDevice.ts';
 import { ShopperInteractionDevice } from './shopperInteractionDevice.ts';

export class ApplicationInfo {
    'adyenLibrary'?: CommonField;
    'adyenPaymentSource'?: CommonField;
    'externalPlatform'?: ExternalPlatform;
    'merchantApplication'?: CommonField;
    'merchantDevice'?: MerchantDevice;
    'shopperInteractionDevice'?: ShopperInteractionDevice;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adyenLibrary",
            "baseName": "adyenLibrary",
            "type": "CommonField"
        },
        {
            "name": "adyenPaymentSource",
            "baseName": "adyenPaymentSource",
            "type": "CommonField"
        },
        {
            "name": "externalPlatform",
            "baseName": "externalPlatform",
            "type": "ExternalPlatform"
        },
        {
            "name": "merchantApplication",
            "baseName": "merchantApplication",
            "type": "CommonField"
        },
        {
            "name": "merchantDevice",
            "baseName": "merchantDevice",
            "type": "MerchantDevice"
        },
        {
            "name": "shopperInteractionDevice",
            "baseName": "shopperInteractionDevice",
            "type": "ShopperInteractionDevice"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationInfo.attributeTypeMap;
    }
}

