import { Metric } from "./metric";
import { Threshold } from "./threshold";

export interface ClusterNode {
    name: string;
    metrics: Array<Metric>;
}