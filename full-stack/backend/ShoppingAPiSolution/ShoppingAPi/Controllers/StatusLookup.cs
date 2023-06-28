namespace ShoppingAPi.Controllers;

public class StatusLookup : IlookupTheStatus
{
    public Task<GetStatusResponse> GetCurrentStatusAsync()
    {
        var response = new GetStatusResponse
        {
            Message = "looks good here",
            LastChecked = DateTime.Now.AddMinutes(9),
        };
        return Task.FromResult(response);
    }
}
