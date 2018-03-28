namespace DataCenterApi.Models
{
  public class Threshold
  {
    public string MetricKey { get; set; }
    public object WarnValue { get; set; }

    public object DangerValue { get; set; }
  }
}
