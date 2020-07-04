/**
 * Adyen for Platforms: Notification Configuration API
 * The Notification Configuration API provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a KYC check or a payout has been completed.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay/marketpay-notifications). ## Authentication To connect to the Notification Configuration API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Notification Configuration API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Notification/v1/createNotificationConfiguration ```
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { NotificationEventConfiguration } from './notificationEventConfiguration.ts';

export class NotificationConfigurationDetails {
    /**
    * Indicates whether the notification subscription is active.
    */
    'active'?: boolean;
    /**
    * The API version of the notification to send.
    */
    'apiVersion'?: number;
    /**
    * A description of the notification subscription configuration. >Required when creating a configuration, forbidden when updating a configuration.
    */
    'description'?: string;
    /**
    * The types of events whose notifications apply to this configuration.
    */
    'eventConfigs': Array<NotificationEventConfiguration>;
    /**
    * A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.  >Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. \"b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27\").  The omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).
    */
    'hmacSignatureKey'?: string;
    /**
    * The ID of the configuration. >Required if updating an existing configuration, ignored during the creation of a configuration.
    */
    'notificationId'?: number;
    /**
    * The password to use when accessing the notifyURL with the specified username.
    */
    'notifyPassword'?: string;
    /**
    * The URL to which the notifications are to be sent.
    */
    'notifyURL': string;
    /**
    * The username to use when accessing the notifyURL.
    */
    'notifyUsername'?: string;
    /**
    * The SSL protocol employed by the endpoint. >Permitted values: `SSL`, `SSLInsecureCiphers`, `TLS`, `TLSv10`, `TLSv10InsecureCiphers`, `TLSv11`, `TLSv12`.
    */
    'sslProtocol'?: NotificationConfigurationDetails.SslProtocolEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "eventConfigs",
            "baseName": "eventConfigs",
            "type": "Array<NotificationEventConfiguration>"
        },
        {
            "name": "hmacSignatureKey",
            "baseName": "hmacSignatureKey",
            "type": "string"
        },
        {
            "name": "notificationId",
            "baseName": "notificationId",
            "type": "number"
        },
        {
            "name": "notifyPassword",
            "baseName": "notifyPassword",
            "type": "string"
        },
        {
            "name": "notifyURL",
            "baseName": "notifyURL",
            "type": "string"
        },
        {
            "name": "notifyUsername",
            "baseName": "notifyUsername",
            "type": "string"
        },
        {
            "name": "sslProtocol",
            "baseName": "sslProtocol",
            "type": "NotificationConfigurationDetails.SslProtocolEnum"
        }    ];

    static getAttributeTypeMap() {
        return NotificationConfigurationDetails.attributeTypeMap;
    }
}

export namespace NotificationConfigurationDetails {
    export enum SslProtocolEnum {
        SSL = <any> 'SSL',
        SSLInsecureCiphers = <any> 'SSLInsecureCiphers',
        TLS = <any> 'TLS',
        TLSv10 = <any> 'TLSv10',
        TLSv10InsecureCiphers = <any> 'TLSv10InsecureCiphers',
        TLSv11 = <any> 'TLSv11',
        TLSv12 = <any> 'TLSv12'
    }
}