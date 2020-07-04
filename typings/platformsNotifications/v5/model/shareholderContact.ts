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

 
 import { ViasAddress } from './viasAddress.ts';
 import { ViasName } from './viasName.ts';
 import { ViasPersonalData } from './viasPersonalData.ts';
 import { ViasPhoneNumber } from './viasPhoneNumber.ts';

export class ShareholderContact {
    'address'?: ViasAddress;
    /**
    * The e-mail address of the contact.
    */
    'email'?: string;
    /**
    * The phone number of the contact provided as a single string.  It will be handled as a landline phone. **Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"
    */
    'fullPhoneNumber'?: string;
    'name'?: ViasName;
    'personalData'?: ViasPersonalData;
    'phoneNumber'?: ViasPhoneNumber;
    /**
    * The unique identifier (UUID) of the Shareholder. >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**  >**If, during an Account Holder create request, a UUID is provided, the creation of the Shareholder will fail while the creation of the Account Holder will continue.**  >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**  >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.** 
    */
    'shareholderCode'?: string;
    /**
    * Merchant reference to the Shareholder.
    */
    'shareholderReference'?: string;
    /**
    * The URL of the website of the contact.
    */
    'webAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "ViasAddress"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "fullPhoneNumber",
            "baseName": "fullPhoneNumber",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "ViasName"
        },
        {
            "name": "personalData",
            "baseName": "personalData",
            "type": "ViasPersonalData"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "ViasPhoneNumber"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        },
        {
            "name": "shareholderReference",
            "baseName": "shareholderReference",
            "type": "string"
        },
        {
            "name": "webAddress",
            "baseName": "webAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ShareholderContact.attributeTypeMap;
    }
}

