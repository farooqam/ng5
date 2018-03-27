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
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node2',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node3',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node4',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    }
                ]
            },
            {
                name: 'Cluster2',
                nodes: [
                    {
                        name: 'node1',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node2',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node3',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    },
                    {
                        name: 'node4',
                        metrics: [
                            {key:'numericMetric', value: 100.12},
                            {key: 'textMetric', value: 'Hello'},
                            {key: 'objectMetric', value: {
                                'foo': 'bar',
                                'baz': 123
                            }}
                        ]
                    }
                ]
            }
        ];
    }

    getClusters(): Array<Cluster> {
        return this._clusters.slice();
    }
}
