using System;

namespace DataCenterApi
{
  public static class Extensions
  {
    public static double NextDouble(this Random random, double min, double max)
    {
      var range = Math.Abs(min - max);
      return random.NextDouble() * range + min;
    }
  }
}
