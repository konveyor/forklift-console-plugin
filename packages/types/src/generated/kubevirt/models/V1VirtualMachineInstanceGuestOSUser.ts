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
 * VirtualMachineGuestOSUser is the single user of the guest os
 * @export
 * @interface V1VirtualMachineInstanceGuestOSUser
 */
export interface V1VirtualMachineInstanceGuestOSUser {
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSUser
     */
    domain?: string;
    /**
     * 
     * @type {number}
     * @memberof V1VirtualMachineInstanceGuestOSUser
     */
    loginTime?: number;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSUser
     */
    userName: string;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceGuestOSUser interface.
 */
export function instanceOfV1VirtualMachineInstanceGuestOSUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userName" in value;

    return isInstance;
}

export function V1VirtualMachineInstanceGuestOSUserFromJSON(json: any): V1VirtualMachineInstanceGuestOSUser {
    return V1VirtualMachineInstanceGuestOSUserFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestOSUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceGuestOSUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'loginTime': !exists(json, 'loginTime') ? undefined : json['loginTime'],
        'userName': json['userName'],
    };
}

export function V1VirtualMachineInstanceGuestOSUserToJSON(value?: V1VirtualMachineInstanceGuestOSUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': value.domain,
        'loginTime': value.loginTime,
        'userName': value.userName,
    };
}

