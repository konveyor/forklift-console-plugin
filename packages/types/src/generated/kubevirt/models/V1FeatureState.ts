/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
/**
 * Represents if a feature is enabled or disabled.
 * @export
 * @interface V1FeatureState
 */
export interface V1FeatureState {
    /**
     * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
     * @type {boolean}
     * @memberof V1FeatureState
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the V1FeatureState interface.
 */
export function instanceOfV1FeatureState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1FeatureStateFromJSON(json: any): V1FeatureState {
    return V1FeatureStateFromJSONTyped(json, false);
}

export function V1FeatureStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FeatureState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function V1FeatureStateToJSON(value?: V1FeatureState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}

