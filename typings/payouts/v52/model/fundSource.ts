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

 
 import { Address } from './address.ts';
 import { Card } from './card.ts';
 import { Name } from './name.ts';

export class FundSource {
    /**
    * a map of name/value pairs for passing in additional/industry-specific data
    */
    'additionalData'?: object;
    'billingAddress'?: Address;
    'card'?: Card;
    /**
    * the email address of the person
    */
    'shopperEmail'?: string;
    'shopperName'?: Name;
    /**
    * the telephone number of the person
    */
    'telephoneNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FundSource.attributeTypeMap;
    }
}

