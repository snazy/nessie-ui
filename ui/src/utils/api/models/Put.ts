/* tslint:disable */
/* eslint-disable */
/**
 * Nessie API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Contents,
    ContentsFromJSON,
    ContentsFromJSONTyped,
    ContentsToJSON,
    ContentsKey,
    ContentsKeyFromJSON,
    ContentsKeyFromJSONTyped,
    ContentsKeyToJSON,
} from './';

/**
 *
 * @export
 * @interface Put
 */
export interface Put {
    /**
     *
     * @type {ContentsKey}
     * @memberof Put
     */
    key?: ContentsKey;
    /**
     *
     * @type {Contents}
     * @memberof Put
     */
    contents?: Contents;
}

export function PutFromJSON(json: any): Put {
    return PutFromJSONTyped(json, false);
}

export function PutFromJSONTyped(json: any, ignoreDiscriminator: boolean): Put {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'key': !exists(json, 'key') ? undefined : ContentsKeyFromJSON(json['key']),
        'contents': !exists(json, 'contents') ? undefined : ContentsFromJSON(json['contents']),
    };
}

export function PutToJSON(value?: Put | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'key': ContentsKeyToJSON(value.key),
        'contents': ContentsToJSON(value.contents),
    };
}
