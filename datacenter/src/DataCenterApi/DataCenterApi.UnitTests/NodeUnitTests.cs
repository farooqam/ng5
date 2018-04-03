using DataCenterApi.Models;
using FluentAssertions;
using System.Collections.Generic;
using Xunit;

namespace DataCenterApi.UnitTests
{
  public class NodeUnitTests
  {
    [Fact]
    public void Default_Status_Is_NoThresholdsSet()
    {
      var node = new ClusterNode();
      node.SetStatus();

      node.Status.Should().Be(NodeStatus.NoThresholdsSet);
    }

    [Theory]
    [InlineData(MetricStatus.NoThresholdSet, MetricStatus.Danger, MetricStatus.Good, MetricStatus.Warn, NodeStatus.Danger)]
    [InlineData(MetricStatus.NoThresholdSet, MetricStatus.Warn, MetricStatus.Good, MetricStatus.Warn, NodeStatus.Warn)]
    [InlineData(MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.Good, MetricStatus.Good, NodeStatus.Good)]
    [InlineData(MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, NodeStatus.NoThresholdsSet)]
    public void SetStatus_Sets_Appropriate_Status(
      MetricStatus status1,
      MetricStatus status2,
      MetricStatus status3,
      MetricStatus status4,
      NodeStatus expectedStatus)
    {
      var node = new ClusterNode
      {
        Metrics = new List<Metric>
        {
          new Metric {Status = status1},
          new Metric {Status = status2},
          new Metric {Status = status3},
          new Metric {Status = status4},
        }
      };

      node.SetStatus();
      
      node.Status.Should().Be(expectedStatus);

    }
  }
}
