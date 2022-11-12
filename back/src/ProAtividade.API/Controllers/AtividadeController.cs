using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// usando os models
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
            new Atividade(1, "primeira"),
            new Atividade(2, "segunda"),
            new Atividade(3, "terceira")
        };

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id){
            return Atividades.FirstOrDefault(atv => atv.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade){
            return Atividades.Append<Atividade>(atividade);
        }

        [HttpPut]
        public string Put(){
            return "Meu primeiro método put";
        }

        [HttpDelete]
        public string Delete(){
            return "Meu primeiro método delete";
        }
    }
}