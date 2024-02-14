/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiCoreV1ConfigMapEnvSource } from './IoK8sApiCoreV1ConfigMapEnvSource';
import {
    IoK8sApiCoreV1ConfigMapEnvSourceFromJSON,
    IoK8sApiCoreV1ConfigMapEnvSourceFromJSONTyped,
    IoK8sApiCoreV1ConfigMapEnvSourceToJSON,
} from './IoK8sApiCoreV1ConfigMapEnvSource';
import type { IoK8sApiCoreV1SecretEnvSource } from './IoK8sApiCoreV1SecretEnvSource';
import {
    IoK8sApiCoreV1SecretEnvSourceFromJSON,
    IoK8sApiCoreV1SecretEnvSourceFromJSONTyped,
    IoK8sApiCoreV1SecretEnvSourceToJSON,
} from './IoK8sApiCoreV1SecretEnvSource';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 * @export
 * @interface IoK8sApiCoreV1EnvFromSource
 */
export interface IoK8sApiCoreV1EnvFromSource {
    /**
     * 
     * @type {IoK8sApiCoreV1ConfigMapEnvSource}
     * @memberof IoK8sApiCoreV1EnvFromSource
     */
    configMapRef?: IoK8sApiCoreV1ConfigMapEnvSource;
    /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     * @type {string}
     * @memberof IoK8sApiCoreV1EnvFromSource
     */
    prefix?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1SecretEnvSource}
     * @memberof IoK8sApiCoreV1EnvFromSource
     */
    secretRef?: IoK8sApiCoreV1SecretEnvSource;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EnvFromSource interface.
 */
export function instanceOfIoK8sApiCoreV1EnvFromSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1EnvFromSourceFromJSON(json: any): IoK8sApiCoreV1EnvFromSource {
    return IoK8sApiCoreV1EnvFromSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EnvFromSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EnvFromSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configMapRef': !exists(json, 'configMapRef') ? undefined : IoK8sApiCoreV1ConfigMapEnvSourceFromJSON(json['configMapRef']),
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1SecretEnvSourceFromJSON(json['secretRef']),
    };
}

export function IoK8sApiCoreV1EnvFromSourceToJSON(value?: IoK8sApiCoreV1EnvFromSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configMapRef': IoK8sApiCoreV1ConfigMapEnvSourceToJSON(value.configMapRef),
        'prefix': value.prefix,
        'secretRef': IoK8sApiCoreV1SecretEnvSourceToJSON(value.secretRef),
    };
}

