using System;
using System.Collections.Generic;
using System.Linq;
using DataCenterApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DataCenterApi.Controllers
{
  [Route("api/clusters")]
  public class ClusterController : Controller
  {
    private readonly List<Cluster> _clusters = new List<Cluster>
    {
      new Cluster
      {
        Name = "cluster1",
        Nodes = new List<ClusterNode>
        {
          new ClusterNode
          {
            Name = "node1"
          },
          new ClusterNode
          {
            Name = "node2"
          },
          new ClusterNode
          {
            Name = "node3"
          },
          new ClusterNode
          {
            Name = "node4"
          }
        },
        Thresholds = new List<Threshold>
        {
          new Threshold {MetricKey = "cpuPct", WarnValue = 80.0, DangerValue = 90.0},
          new Threshold {MetricKey = "availMemPct", WarnValue = 90.0, DangerValue = 95.0}
        }
      },
      new Cluster
      {
        Name = "cluster2",
        Nodes = new List<ClusterNode>
        {
          new ClusterNode
          {
            Name = "node1"
          },
          new ClusterNode
          {
            Name = "node2"
          },
          new ClusterNode
          {
            Name = "node3"
          },
          new ClusterNode
          {
            Name = "node4"
          }
        },
        Thresholds = new List<Threshold>
        {
          new Threshold {MetricKey = "cpuPct", WarnValue = 5.0, DangerValue = 70.0},
          new Threshold {MetricKey = "availMemPct", WarnValue = 75.0, DangerValue = 95.0}
        }
      }
    };


    [HttpGet]
    public IEnumerable<Cluster> Get()
    {
      AddCpuMetric(_clusters[0], 50, 100);
      AddAvailableMemoryPctMetric(_clusters[0], 50, 0);

      AddCpuMetric(_clusters[1], 10, 80);
      AddAvailableMemoryPctMetric(_clusters[1], 90, 20);

      foreach (var cluster in _clusters)
      {
        cluster.SetStatus();

        foreach (var node in cluster.Nodes)
        {
          node.SetStatus();
        }
      }

      return _clusters.AsEnumerable();
    }

    private void AddCpuMetric(Cluster cluster, double low, double high)
    {
      var range = Math.Abs(high - low);

      foreach (var node in cluster.Nodes)
      {
        var random = new Random();
        var cpu = random.NextDouble(low, high);
        var metric = new Metric {Key = "cpuPct", Value = cpu, Description = "Utilization of CPU cores."};
        metric.SetStatus(cluster.Thresholds);
        node.Metrics.Add(metric);
        
      }
    }

    private void AddAvailableMemoryPctMetric(Cluster cluster, double low, double high)
    {
      var range = Math.Abs(high - low);

      foreach (var node in cluster.Nodes)
      {
        var random = new Random();
        var mem = random.NextDouble(low, high);
        var metric = new Metric {Key = "availMemPct", Value = mem, Description = "Percentage of memory available."};
        metric.SetStatus(cluster.Thresholds);
        node.Metrics.Add(metric);
      }
    }
  }
}
