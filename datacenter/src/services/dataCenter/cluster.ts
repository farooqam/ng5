import { ClusterNode } from "./clusterNode";
import { Threshold } from "./threshold";

export interface Cluster {
    name: string;
    nodes: Array<ClusterNode>;
    thresholds: Array<Threshold>;
}