using Microsoft.AspNetCore.Mvc;
using SteamQueryNet;
using System.Threading.Tasks;

namespace SteamServerQueryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServersController : ControllerBase
    {
        private readonly IServerQuery _serverQuery;

        public ServersController(IServerQuery serverQuery)
        {
            _serverQuery = serverQuery;
        }

        [HttpGet("[action]")]
        public IActionResult ServerInfo([FromQuery]string ip, [FromQuery]int port)
        {
            _serverQuery.Connect(ip, port);
            return Ok(_serverQuery.GetServerInfo());
        }
    }
}