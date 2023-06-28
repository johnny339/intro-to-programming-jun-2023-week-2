namespace ShoppingAPi.Controllers;

public interface IlookupTheStatus
{
    Task<GetStatusResponse> GetCurrentStatusAsync();
}