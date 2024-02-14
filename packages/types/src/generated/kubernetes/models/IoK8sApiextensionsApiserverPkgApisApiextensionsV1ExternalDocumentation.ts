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
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation {
    /**
     * 
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation
     */
    url?: string;
}

/**
 * Check if a given object implements the IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation interface.
 */
export function instanceOfIoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation {
    return IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationFromJSONTyped(json, false);
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'url': value.url,
    };
}

