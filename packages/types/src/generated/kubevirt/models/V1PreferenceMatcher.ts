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
 * PreferenceMatcher references a set of preference that is used to fill fields in the VMI template.
 * @export
 * @interface V1PreferenceMatcher
 */
export interface V1PreferenceMatcher {
    /**
     * InferFromVolume lists the name of a volume that should be used to infer or discover the preference to be used through known annotations on the underlying resource. Once applied to the PreferenceMatcher this field is removed.
     * @type {string}
     * @memberof V1PreferenceMatcher
     */
    inferFromVolume?: string;
    /**
     * InferFromVolumeFailurePolicy controls what should happen on failure when preference the instancetype. Allowed values are: "RejectInferFromVolumeFailure" and "IgnoreInferFromVolumeFailure". If not specified, "RejectInferFromVolumeFailure" is used by default.
     * @type {string}
     * @memberof V1PreferenceMatcher
     */
    inferFromVolumeFailurePolicy?: string;
    /**
     * Kind specifies which preference resource is referenced. Allowed values are: "VirtualMachinePreference" and "VirtualMachineClusterPreference". If not specified, "VirtualMachineClusterPreference" is used by default.
     * @type {string}
     * @memberof V1PreferenceMatcher
     */
    kind?: string;
    /**
     * Name is the name of the VirtualMachinePreference or VirtualMachineClusterPreference
     * @type {string}
     * @memberof V1PreferenceMatcher
     */
    name?: string;
    /**
     * RevisionName specifies a ControllerRevision containing a specific copy of the VirtualMachinePreference or VirtualMachineClusterPreference to be used. This is initially captured the first time the instancetype is applied to the VirtualMachineInstance.
     * @type {string}
     * @memberof V1PreferenceMatcher
     */
    revisionName?: string;
}

/**
 * Check if a given object implements the V1PreferenceMatcher interface.
 */
export function instanceOfV1PreferenceMatcher(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PreferenceMatcherFromJSON(json: any): V1PreferenceMatcher {
    return V1PreferenceMatcherFromJSONTyped(json, false);
}

export function V1PreferenceMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PreferenceMatcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inferFromVolume': !exists(json, 'inferFromVolume') ? undefined : json['inferFromVolume'],
        'inferFromVolumeFailurePolicy': !exists(json, 'inferFromVolumeFailurePolicy') ? undefined : json['inferFromVolumeFailurePolicy'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'revisionName': !exists(json, 'revisionName') ? undefined : json['revisionName'],
    };
}

export function V1PreferenceMatcherToJSON(value?: V1PreferenceMatcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inferFromVolume': value.inferFromVolume,
        'inferFromVolumeFailurePolicy': value.inferFromVolumeFailurePolicy,
        'kind': value.kind,
        'name': value.name,
        'revisionName': value.revisionName,
    };
}

