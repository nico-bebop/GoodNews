using webapi.Models;

namespace webapi.Services
{
    public interface INewsService
    {
        NewsResult GetLatestNews(string country, int page, int pageSize);
        NewsResult SearchNews(string keywords, DateOnly dateFrom, DateOnly dateTo, int page, int pageSize);
    }
}
