import { Metric } from "./metric";
import { Threshold } from "./threshold";
import { NodeStatus } from "./nodeStatus.enum";

export interface ClusterNode {
    name: string;
    metrics: Array<Metric>;
    status: NodeStatus
}