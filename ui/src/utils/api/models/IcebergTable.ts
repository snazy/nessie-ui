/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IcebergTable
 */
export interface IcebergTable {
    /**
     * 
     * @type {string}
     * @memberof IcebergTable
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IcebergTable
     */
    metadataLocation: string;
}

export function IcebergTableFromJSON(json: any): IcebergTable {
    return IcebergTableFromJSONTyped(json, false);
}

export function IcebergTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): IcebergTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadataLocation': json['metadataLocation'],
    };
}

export function IcebergTableToJSON(value?: IcebergTable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'metadataLocation': value.metadataLocation,
    };
}


