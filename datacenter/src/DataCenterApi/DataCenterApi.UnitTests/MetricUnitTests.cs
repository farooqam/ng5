using DataCenterApi.Models;
using FluentAssertions;
using Xunit;

namespace DataCenterApi.UnitTests
{
  public class MetricUnitTests
  {
    [Fact]
    public void Default_Status_Is_NoThresholdSet()
    {
      var metric = new Metric();
      metric.Status.Should().Be(MetricStatus.NoThresholdSet);
    }

    [Fact]
    public void SetStatus_When_Threshold_Not_Found_Sets_Metric_Status_To_NoThresholdSet()
    {
      var metric = new Metric { Key = "metric", Value = 0.987m };
      var threshold = new Threshold { MetricKey = "foo", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.NoThresholdSet);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Good()
    {
      var metric = new Metric {Key = "metric", Value = 0.987m};
      var threshold = new Threshold {MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m};
      metric.SetStatus(new []{threshold});

      metric.Status.Should().Be(MetricStatus.Good);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Good_At_Boundary()
    {
      var metric = new Metric { Key = "metric", Value = 0.99999m };
      var threshold = new Threshold { MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Good);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Warn()
    {
      var metric = new Metric { Key = "metric", Value = 1.489m };
      var threshold = new Threshold { MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Warn);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Warn_At_Boundary()
    {
      var metric = new Metric { Key = "metric", Value = 1m };
      var threshold = new Threshold { MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Warn);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Danger()
    {
      var metric = new Metric { Key = "metric", Value =1.51m };
      var threshold = new Threshold { MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Danger);
    }

    [Fact]
    public void SetStatus_Sets_Metric_Status_To_Danger_At_Boundary()
    {
      var metric = new Metric { Key = "metric", Value = 1.5m };
      var threshold = new Threshold { MetricKey = "metric", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Danger);
    }

    [Fact]
    public void SetStatus_Key_Casing_Does_Not_Matter()
    {
      var metric = new Metric { Key = "metric", Value = 1.51m };
      var threshold = new Threshold { MetricKey = "MetriC", DangerValue = 1.5m, WarnValue = 1m };
      metric.SetStatus(new[] { threshold });

      metric.Status.Should().Be(MetricStatus.Danger);
    }
  }
}
