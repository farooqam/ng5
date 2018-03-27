namespace DataCenterApi.Models
{
  public class Threshold
  {
    public string MetricKey { get; set; }
    public decimal WarnValue { get; set; }

    public decimal DangerValue { get; set; }
  }
}
