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
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 * @export
 * @interface IoK8sApiRbacV1PolicyRule
 */
export interface IoK8sApiRbacV1PolicyRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. "" represents the core API group and "*" represents all API groups.
     * @type {Array<string>}
     * @memberof IoK8sApiRbacV1PolicyRule
     */
    apiGroups?: string[];
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
     * @type {Array<string>}
     * @memberof IoK8sApiRbacV1PolicyRule
     */
    nonResourceURLs?: string[];
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     * @type {Array<string>}
     * @memberof IoK8sApiRbacV1PolicyRule
     */
    resourceNames?: string[];
    /**
     * Resources is a list of resources this rule applies to. '*' represents all resources.
     * @type {Array<string>}
     * @memberof IoK8sApiRbacV1PolicyRule
     */
    resources?: string[];
    /**
     * Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
     * @type {Array<string>}
     * @memberof IoK8sApiRbacV1PolicyRule
     */
    verbs: string[];
}

/**
 * Check if a given object implements the IoK8sApiRbacV1PolicyRule interface.
 */
export function instanceOfIoK8sApiRbacV1PolicyRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "verbs" in value;

    return isInstance;
}

export function IoK8sApiRbacV1PolicyRuleFromJSON(json: any): IoK8sApiRbacV1PolicyRule {
    return IoK8sApiRbacV1PolicyRuleFromJSONTyped(json, false);
}

export function IoK8sApiRbacV1PolicyRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiRbacV1PolicyRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'nonResourceURLs': !exists(json, 'nonResourceURLs') ? undefined : json['nonResourceURLs'],
        'resourceNames': !exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}

export function IoK8sApiRbacV1PolicyRuleToJSON(value?: IoK8sApiRbacV1PolicyRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'nonResourceURLs': value.nonResourceURLs,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}

