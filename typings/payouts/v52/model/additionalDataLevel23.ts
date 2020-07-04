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

 

export class AdditionalDataLevel23 {
    /**
    * Customer code, if supplied by a customer. Encoding: ASCII. Max length: 25 characters. > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Total tax amount, in minor units.  For example, 2000 means USD 20.00. Max length: 12 characters. > Required for Level 2 and Level 3 data.
    */
    'enhancedSchemeDataTotalTaxAmount'?: number;
    /**
    * Shipping amount, in minor units.  For example, 2000 means USD 20.00. Max length: 12 characters.
    */
    'enhancedSchemeDataFreightAmount'?: number;
    /**
    * Duty amount, in minor units.  For example, 2000 means USD 20.00. Max length: 12 characters.
    */
    'enhancedSchemeDataDutyAmount'?: number;
    /**
    * The postal code of a destination address.  Encoding: ASCII. Max length: 10 characters. > Required for American Express.
    */
    'enhancedSchemeDataDestinationPostalCode'?: string;
    /**
    * Destination state or province code.  Encoding: ASCII.Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationStateProvinceCode'?: string;
    /**
    * The postal code of a \"ship-from\" address.  Encoding: ASCII. Max length: 10 characters.
    */
    'enhancedSchemeDataShipFromPostalCode'?: string;
    /**
    * Destination country code.  Encoding: ASCII. Max length: 3 characters.
    */
    'enhancedSchemeDataDestinationCountryCode'?: string;
    /**
    * Order date. * Format: `ddMMyy`  Encoding: ASCII. Max length: 6 characters.
    */
    'enhancedSchemeDataOrderDate'?: string;
    /**
    * Item commodity code. Encoding: ASCII. Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrCommodityCode'?: string;
    /**
    * Item description. Encoding: ASCII. Max length: 26 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDescription'?: string;
    /**
    * Product code. Encoding: ASCII. Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrProductCode'?: string;
    /**
    * Quantity, specified as an integer value. Value must be greater than 0. Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrQuantity'?: number;
    /**
    * Item unit of measurement. Encoding: ASCII. Max length: 3 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure'?: string;
    /**
    * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes). Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrUnitPrice'?: number;
    /**
    * Discount amount, in minor units.  For example, 2000 means USD 20.00. Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrDiscountAmount'?: number;
    /**
    * Total amount, in minor units. For example, 2000 means USD 20.00. Max length: 12 characters.
    */
    'enhancedSchemeDataItemDetailLineItemNrTotalAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enhancedSchemeDataCustomerReference",
            "baseName": "enhancedSchemeData.customerReference",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTotalTaxAmount",
            "baseName": "enhancedSchemeData.totalTaxAmount",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataFreightAmount",
            "baseName": "enhancedSchemeData.freightAmount",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataDutyAmount",
            "baseName": "enhancedSchemeData.dutyAmount",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataDestinationPostalCode",
            "baseName": "enhancedSchemeData.destinationPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataDestinationStateProvinceCode",
            "baseName": "enhancedSchemeData.destinationStateProvinceCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataShipFromPostalCode",
            "baseName": "enhancedSchemeData.shipFromPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataDestinationCountryCode",
            "baseName": "enhancedSchemeData.destinationCountryCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataOrderDate",
            "baseName": "enhancedSchemeData.orderDate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrCommodityCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].commodityCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrDescription",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].description",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrProductCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].productCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrQuantity",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].quantity",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrUnitPrice",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitPrice",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrDiscountAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].discountAmount",
            "type": "number"
        },
        {
            "name": "enhancedSchemeDataItemDetailLineItemNrTotalAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].totalAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataLevel23.attributeTypeMap;
    }
}
