import { ClusterNode } from "./clusterNode";
import { Threshold } from "./threshold";
import { ClusterStatus } from "./clusterStatus.enum";

export interface Cluster {
    name: string;
    clusterNodes: Array<ClusterNode>;
    thresholds: Array<Threshold>;
    status: ClusterStatus;

}
