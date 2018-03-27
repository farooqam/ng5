import { Injectable } from '@angular/core';
import { Cluster } from './cluster';

@Injectable()
export class DataCenterService {

    private _clusters: Array<Cluster>;

    constructor() {
        this._clusters = [
            {
                name: 'Cluster1',
                nodes: [
                    {
                        name: 'node1',
                        metrics: [
                            {key:'cpuPct', value: 88.343},
                            {key: 'availMemPct', value: 50}
                            
                        ]
                    },
                    {
                        name: 'node2',
                        metrics: [
                            {key:'cpuPct', value: 77.110},
                            {key: 'availMemPct', value: 80}
                            
                        ]
                    },
                    {
                        name: 'node3',
                        metrics: [
                            {key:'cpuPct', value: 99.001},
                            {key: 'availMemPct', value: 5}
                            
                        ]
                    },
                    {
                        name: 'node4',
                        metrics: [
                            {key:'cpuPct', value: 20},
                            {key: 'availMemPct', value: 99}
                            
                        ]
                    }
                ],
                thresholds: [
                    {metricKey: 'cpuPct', warnValue: 80, dangerValue: 90},
                    {metricKey: 'availMemPct', warnValue: 10, dangerValue: 5}
                ]
            },
            {
                name: 'Cluster2',
                nodes: [
                    {
                        name: 'node1',
                        metrics: [
                            {key:'cpuPct', value: 20},
                            {key: 'availMemPct', value: 99}
                            
                        ]
                    },
                    {
                        name: 'node2',
                        metrics: [
                            {key:'cpuPct', value: 45},
                            {key: 'availMemPct', value: 80}
                            
                        ]
                    },
                    {
                        name: 'node3',
                        metrics: [
                            {key:'cpuPct', value: 55},
                            {key: 'availMemPct', value: 60}
                            
                        ]
                    },
                    {
                        name: 'node4',
                        metrics: [
                            {key:'cpuPct', value: 88},
                            {key: 'availMemPct', value: 3}
                            
                        ]
                    }
                ],
                thresholds: [
                    {metricKey: 'cpuPct', warnValue: 50, dangerValue: 70},
                    {metricKey: 'availMemPct', warnValue: 50, dangerValue: 25}
                ]
            }
        ];
    }

    getClusters(): Array<Cluster> {
        return this._clusters.slice();
    }
}
