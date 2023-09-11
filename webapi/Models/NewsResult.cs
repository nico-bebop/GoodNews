using Newtonsoft.Json;

namespace webapi.Models
{
    public class NewsResult
    {
        [JsonProperty("status")]
        public string? Status { get; set; }

        [JsonProperty("totalResults")]
        public int? TotalResults { get; set; }

        [JsonProperty("articles")]
        public List<Article>? Articles { get; set; }
    }
}
