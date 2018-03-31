import { MetricStatus } from "./metricStatus.enum";

export interface Metric {
    key: string,
    value: any,
    description: string,
    status: MetricStatus
}