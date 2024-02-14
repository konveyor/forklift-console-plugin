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
import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import {
    IoK8sApiAutoscalingV2MetricIdentifierFromJSON,
    IoK8sApiAutoscalingV2MetricIdentifierFromJSONTyped,
    IoK8sApiAutoscalingV2MetricIdentifierToJSON,
} from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';
import {
    IoK8sApiAutoscalingV2MetricTargetFromJSON,
    IoK8sApiAutoscalingV2MetricTargetFromJSONTyped,
    IoK8sApiAutoscalingV2MetricTargetToJSON,
} from './IoK8sApiAutoscalingV2MetricTarget';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 * @export
 * @interface IoK8sApiAutoscalingV2PodsMetricSource
 */
export interface IoK8sApiAutoscalingV2PodsMetricSource {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricIdentifier}
     * @memberof IoK8sApiAutoscalingV2PodsMetricSource
     */
    metric: IoK8sApiAutoscalingV2MetricIdentifier;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricTarget}
     * @memberof IoK8sApiAutoscalingV2PodsMetricSource
     */
    target: IoK8sApiAutoscalingV2MetricTarget;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2PodsMetricSource interface.
 */
export function instanceOfIoK8sApiAutoscalingV2PodsMetricSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metric" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV2PodsMetricSourceFromJSON(json: any): IoK8sApiAutoscalingV2PodsMetricSource {
    return IoK8sApiAutoscalingV2PodsMetricSourceFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2PodsMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2PodsMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metric': IoK8sApiAutoscalingV2MetricIdentifierFromJSON(json['metric']),
        'target': IoK8sApiAutoscalingV2MetricTargetFromJSON(json['target']),
    };
}

export function IoK8sApiAutoscalingV2PodsMetricSourceToJSON(value?: IoK8sApiAutoscalingV2PodsMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metric': IoK8sApiAutoscalingV2MetricIdentifierToJSON(value.metric),
        'target': IoK8sApiAutoscalingV2MetricTargetToJSON(value.target),
    };
}

