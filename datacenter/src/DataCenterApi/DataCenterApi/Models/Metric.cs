using System;
using System.Collections.Generic;
using System.Linq;

namespace DataCenterApi.Models
{
  public class Metric
  {
    public string Key { get; set; }
    public object Value { get; set; }

    public string Description { get; set; }

    public MetricStatus Status { get; set; }

    public void SetStatus(IEnumerable<Threshold> thresholds)
    {
      var threshold = thresholds.FirstOrDefault(t => string.Compare(t.MetricKey, Key, StringComparison.InvariantCultureIgnoreCase) == 0);

      if (threshold == null)
      {
        return;
      }

      var dangerVal = (IComparable)threshold.DangerValue;
      var warnVal = (IComparable) threshold.WarnValue;
      var metricVal = (IComparable) Value;

      if (metricVal.CompareTo(dangerVal) >= 0)
      {
        Status = MetricStatus.Danger;
        return;
      }

      if (metricVal.CompareTo(warnVal) >= 0)
      {
        Status = MetricStatus.Warn;
        return;
      }

      Status = MetricStatus.Good;
    }
  }
}
