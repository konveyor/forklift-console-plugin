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
import type { IoK8sApiNetworkingV1NetworkPolicyPeer } from './IoK8sApiNetworkingV1NetworkPolicyPeer';
import {
    IoK8sApiNetworkingV1NetworkPolicyPeerFromJSON,
    IoK8sApiNetworkingV1NetworkPolicyPeerFromJSONTyped,
    IoK8sApiNetworkingV1NetworkPolicyPeerToJSON,
} from './IoK8sApiNetworkingV1NetworkPolicyPeer';
import type { IoK8sApiNetworkingV1NetworkPolicyPort } from './IoK8sApiNetworkingV1NetworkPolicyPort';
import {
    IoK8sApiNetworkingV1NetworkPolicyPortFromJSON,
    IoK8sApiNetworkingV1NetworkPolicyPortFromJSONTyped,
    IoK8sApiNetworkingV1NetworkPolicyPortToJSON,
} from './IoK8sApiNetworkingV1NetworkPolicyPort';

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 * @export
 * @interface IoK8sApiNetworkingV1NetworkPolicyEgressRule
 */
export interface IoK8sApiNetworkingV1NetworkPolicyEgressRule {
    /**
     * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     * @type {Array<IoK8sApiNetworkingV1NetworkPolicyPort>}
     * @memberof IoK8sApiNetworkingV1NetworkPolicyEgressRule
     */
    ports?: Array<IoK8sApiNetworkingV1NetworkPolicyPort>;
    /**
     * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
     * @type {Array<IoK8sApiNetworkingV1NetworkPolicyPeer>}
     * @memberof IoK8sApiNetworkingV1NetworkPolicyEgressRule
     */
    to?: Array<IoK8sApiNetworkingV1NetworkPolicyPeer>;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1NetworkPolicyEgressRule interface.
 */
export function instanceOfIoK8sApiNetworkingV1NetworkPolicyEgressRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1NetworkPolicyEgressRuleFromJSON(json: any): IoK8sApiNetworkingV1NetworkPolicyEgressRule {
    return IoK8sApiNetworkingV1NetworkPolicyEgressRuleFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1NetworkPolicyEgressRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1NetworkPolicyEgressRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyPortFromJSON)),
        'to': !exists(json, 'to') ? undefined : ((json['to'] as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyPeerFromJSON)),
    };
}

export function IoK8sApiNetworkingV1NetworkPolicyEgressRuleToJSON(value?: IoK8sApiNetworkingV1NetworkPolicyEgressRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyPortToJSON)),
        'to': value.to === undefined ? undefined : ((value.to as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyPeerToJSON)),
    };
}

