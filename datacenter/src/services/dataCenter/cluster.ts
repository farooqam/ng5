import { ClusterNode } from "./clusterNode";
import { Threshold } from "./threshold";

export interface Cluster {
    name: string;
    clusterNodes: Array<ClusterNode>;
    thresholds: Array<Threshold>;
}