using DataCenterApi.Models;
using FluentAssertions;
using System.Collections.Generic;
using Xunit;

namespace DataCenterApi.UnitTests
{
  public class ClusterUnitTests
    {
      [Fact]
      public void Default_Status_Is_NoThresholdsSet()
      {
        var cluster = new Cluster();
        cluster.SetStatus();

        cluster.Status.Should().Be(ClusterStatus.NoThresholdsSet);
      }

      [Theory]
      [InlineData(MetricStatus.NoThresholdSet, MetricStatus.Danger, MetricStatus.Good, MetricStatus.Warn, ClusterStatus.Danger)]
      [InlineData(MetricStatus.NoThresholdSet, MetricStatus.Warn, MetricStatus.Good, MetricStatus.Warn, ClusterStatus.Warn)]
      [InlineData(MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.Good, MetricStatus.Good, ClusterStatus.Good)]
      [InlineData(MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, MetricStatus.NoThresholdSet, ClusterStatus.NoThresholdsSet)]
      public void SetStatus_Sets_Appropriate_Status(
            MetricStatus status1,
            MetricStatus status2,
            MetricStatus status3,
            MetricStatus status4,
            ClusterStatus expectedStatus)
      {
        var cluster = new Cluster
        {
          ClusterNodes = new List<ClusterNode>
          {
            new ClusterNode
            {
              Metrics = new List<Metric>
              {
                new Metric {Status = status1},
                new Metric {Status = status2},
                new Metric {Status = status3},
                new Metric {Status = status4},
              }
            }
          }
        };

        cluster.SetStatus();

        cluster.Status.Should().Be(expectedStatus);

      }
    }
}
