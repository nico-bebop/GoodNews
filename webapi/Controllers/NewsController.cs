using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers;

[ApiController]
[Route("api/news")]
[ResponseCache(Duration = 120, Location = ResponseCacheLocation.Any)]
public class NewsController : ControllerBase
{
    private readonly ILogger<NewsController> _logger;
    private readonly INewsService _newsService;

    public NewsController(ILogger<NewsController> logger, INewsService newsService)
    {
        _logger = logger;
        _newsService = newsService;
    }

    [HttpGet("top-headlines")]
    public NewsResult GetLatest(string country, int page = 1, int pageSize = 10)
    {
        return _newsService.GetLatestNews(country, page, pageSize);
    }

    [HttpGet("search")]
    public NewsResult Search(string language, string keywords, DateOnly dateFrom, DateOnly dateTo, int page = 1, int pageSize = 10)
    {
        return _newsService.SearchNews(language, keywords, dateFrom, dateTo, page, pageSize);
    }
}
