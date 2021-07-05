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
import {
    Dialect,
    DialectFromJSON,
    DialectFromJSONTyped,
    DialectToJSON,
} from './';

/**
 * 
 * @export
 * @interface SqlView
 */
export interface SqlView {
    /**
     * 
     * @type {string}
     * @memberof SqlView
     */
    id?: string;
    /**
     * 
     * @type {Dialect}
     * @memberof SqlView
     */
    dialect?: Dialect;
    /**
     * 
     * @type {string}
     * @memberof SqlView
     */
    sqlText?: string;
}

export function SqlViewFromJSON(json: any): SqlView {
    return SqlViewFromJSONTyped(json, false);
}

export function SqlViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): SqlView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'dialect': !exists(json, 'dialect') ? undefined : DialectFromJSON(json['dialect']),
        'sqlText': !exists(json, 'sqlText') ? undefined : json['sqlText'],
    };
}

export function SqlViewToJSON(value?: SqlView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'dialect': DialectToJSON(value.dialect),
        'sqlText': value.sqlText,
    };
}


