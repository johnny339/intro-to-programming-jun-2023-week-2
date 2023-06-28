using Microsoft.AspNetCore.Mvc;

namespace ShoppingAPi.Controllers;

//Two rules for controller classes
// 1. mush be public
// must be a controller based
public class StatusController : ControllerBase
{

    private readonly IlookupTheStatus _statusLookup;

    public StatusController(IlookupTheStatus statusLookup)
    {
        _statusLookup = statusLookup;
    }

    //GET /status

    //attribute (can also be 'HttpPost')
    [HttpGet("/status")]

    public async Task<ActionResult> GetTheStatus()
    {
        GetStatusResponse response = await _statusLookup.GetCurrentStatusAsync();
        return Ok(response); //200 Ok.
    }
}
