using System.Collections.Generic;

namespace DataCenterApi.Models
{
  public class ClusterNode
  {
    public string Name { get; set; }
    public List<Metric> Metrics { get; set; }

    public ClusterNode()
    {
      Metrics = new List<Metric>();
    }
  }
}
