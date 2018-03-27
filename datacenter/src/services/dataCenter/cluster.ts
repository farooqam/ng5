import { ClusterNode } from "./clusterNode";

export interface Cluster {
    name: string,
    nodes: Array<ClusterNode>
}