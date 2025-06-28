using AutoMapper;
using BL.Interfaces;
using DAL.Models;
using Entities.DTO;

using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class PromptController : ControllerBase
{
    private readonly IPromptBL _promptBL;
    private readonly IMapper _mapper;

    public PromptController(IPromptBL promptBL, IMapper mapper)
    {
        _promptBL = promptBL;
        _mapper = mapper;
    }

    [HttpPost("prompt")]
    public async Task<ActionResult<string>> SendPrompt([FromBody] PromptGet request)
    {
        var prompt = _mapper.Map<Prompt>(request);
        var result = await _promptBL.GenerateLessonAsync(prompt);

        if (result == null)
            return NotFound("No response generated for the given prompt.");

        return Ok(result);
    }

    [HttpGet("history/{userId}")]
    public async Task<IActionResult> GetPromptHistory(int userId)
    {
        var history = await _promptBL.GetPromptHistoryByUserIdAsync(userId);
        if (history == null || history.Count == 0)
            return NotFound("No prompt history found for this user.");

        return Ok(history);
    }
}   