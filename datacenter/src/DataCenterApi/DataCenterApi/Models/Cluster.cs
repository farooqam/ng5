using System.Collections.Generic;
using System.Linq;

namespace DataCenterApi.Models
{
  public class Cluster
  {
    public string Name { get; set; }
    public List<ClusterNode> ClusterNodes { get; set; }
    public List<Threshold> Thresholds { get; set; }
    public ClusterStatus Status { get; set; }

    public Cluster()
    {
      ClusterNodes = new List<ClusterNode>();
      Thresholds = new List<Threshold>();
    }

    public void SetStatus()
    {
      if (!ClusterNodes.Any())
      {
        Status = ClusterStatus.NoThresholdsSet;
        return;
      }

      Status = (ClusterStatus)ClusterNodes.SelectMany(n => n.Metrics).Select(m => m.Status).Max();
    }
  }
}
