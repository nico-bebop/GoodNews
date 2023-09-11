using Newtonsoft.Json;
using webapi.Models;

namespace webapi.Services
{
    public class NewsDirectService : INewsService
    {
        private readonly IConfiguration _configuration;
        private readonly string? apiKey;
        private readonly string? baseUrl;

        public NewsDirectService(IConfiguration configuration)
        {
            _configuration = configuration;

            apiKey = _configuration.GetValue<string>("NEWS_API_KEY");
            baseUrl = _configuration.GetValue<string>("NEWS_API_URL");
        }

        public NewsResult GetLatestNews(string country, int page, int pageSize)
        {
            using var client = new HttpClient();

            client.BaseAddress = new Uri(baseUrl + "top-headlines");
            client.DefaultRequestHeaders.Add("x-api-key", apiKey);
            client.DefaultRequestHeaders.Add("user-agent", "good-news");

            string parameters = string.Format("?country={0}&page={1}&pageSize={2}", country, page, pageSize);
            HttpResponseMessage response = client.GetAsync(parameters).Result;

            if (response.IsSuccessStatusCode)
            {
                var result = response.Content.ReadAsStringAsync().Result;
                return JsonConvert.DeserializeObject<NewsResult>(result);
            }

            return new NewsResult();
        }

        public NewsResult SearchNews(string keywords, DateOnly dateFrom, DateOnly dateTo, int page, int pageSize)
        {
            using var client = new HttpClient();

            client.BaseAddress = new Uri(baseUrl + "everything");
            client.DefaultRequestHeaders.Add("x-api-key", apiKey);
            client.DefaultRequestHeaders.Add("user-agent", "good-news");

            string parameters = string.Format("?q={0}&from={1}&to={2}&page={3}&pageSize={4}", keywords, dateFrom, dateTo, page, pageSize);
            HttpResponseMessage response = client.GetAsync(parameters).Result;

            if (response.IsSuccessStatusCode)
            {
                var result = response.Content.ReadAsStringAsync().Result;
                return JsonConvert.DeserializeObject<NewsResult>(result);
            }

            return new NewsResult();
        }
    }
}
