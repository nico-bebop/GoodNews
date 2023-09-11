using Newtonsoft.Json;

namespace webapi.Models;
public class Article
{
    [JsonProperty("source")]
    public Source? Source { get; set; }

    [JsonProperty("author")]
    public string? Author { get; set; }

    [JsonProperty("title")]
    public string? Title { get; set; }

    [JsonProperty("description")]
    public object? Description { get; set; }

    [JsonProperty("url")]
    public string? Url { get; set; }

    [JsonProperty("urlToImage")]
    public object? UrlToImage { get; set; }

    [JsonProperty("publishedAt")]
    public DateTime? PublishedAt { get; set; }

    [JsonProperty("content")]
    public object? Content { get; set; }
}

public class Source
{
    [JsonProperty("id")]
    public string? Id { get; set; }

    [JsonProperty("name")]
    public string? Name { get; set; }
}
