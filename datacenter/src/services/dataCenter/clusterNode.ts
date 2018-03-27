import { Metric } from "./metric";

export interface ClusterNode {
    name: string;
    metrics: Array<Metric>
}