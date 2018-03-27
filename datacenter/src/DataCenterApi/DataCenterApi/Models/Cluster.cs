using System.Collections.Generic;

namespace DataCenterApi.Models
{
  public class Cluster
  {
    public string Name { get; set; }
    public List<ClusterNode> ClusterNodes { get; set; }

    public List<Threshold> Thresholds { get; set; }
  }
}
