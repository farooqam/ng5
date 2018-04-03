using System.Collections.Generic;
using System.Linq;

namespace DataCenterApi.Models
{
  public class ClusterNode
  {
    public string Name { get; set; }
    public List<Metric> Metrics { get; set; }

    public NodeStatus Status { get; set; }

    public ClusterNode()
    {
      Metrics = new List<Metric>();
    }

    public void SetStatus()
    {
      if (!Metrics.Any())
      {
        Status = NodeStatus.NoThresholdsSet;
        return;
      }

      Status = (NodeStatus)Metrics.Select(m => m.Status).Max();
    }
  }
}
