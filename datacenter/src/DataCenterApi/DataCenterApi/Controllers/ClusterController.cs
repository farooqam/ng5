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
        ClusterNodes = new List<ClusterNode>
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
          new Threshold {MetricKey = "cpuPct", WarnValue = 80, DangerValue = 90},
          new Threshold {MetricKey = "availMemPct", WarnValue = 10, DangerValue = 5}
        }
      },
      new Cluster
      {
        Name = "cluster2",
        ClusterNodes = new List<ClusterNode>
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
          new Threshold {MetricKey = "cpuPct", WarnValue = 50, DangerValue = 70},
          new Threshold {MetricKey = "availMemPct", WarnValue = 50, DangerValue = 25}
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

      return _clusters.AsEnumerable();
    }

    private void AddCpuMetric(Cluster cluster, int low, int high)
    {
      var range = Math.Abs(high - low);

      foreach (var node in cluster.ClusterNodes)
      {
        var random = new Random();
        var cpu = random.NextDouble() * range;
        node.Metrics.Add(new Metric {Key = "cpuPct", Value = cpu});
      }
    }

    private void AddAvailableMemoryPctMetric(Cluster cluster, int low, int high)
    {
      var range = Math.Abs(high - low);

      foreach (var node in cluster.ClusterNodes)
      {
        var random = new Random();
        var mem = random.NextDouble() * range;
        node.Metrics.Add(new Metric { Key = "availMemPct", Value = mem });
      }
    }
  }
}
