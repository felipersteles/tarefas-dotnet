using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// usando os namespaces model e datacontext
using ProAtividade.API.Models;
using ProAtividade.API.Data;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            this._context = context;

        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return this._context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return this._context.Atividades.FirstOrDefault(atv => atv.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            this._context.Atividades.Add(atividade);
            if (this._context.SaveChanges() > 0)
                return _context.Atividades;
            else
                throw new Exception("Erro ao adicionar atividade");

        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) throw new Exception("Atividade inválida");

            this._context.Update(atividade);
            if (this._context.SaveChanges() > 0)
                return this._context.Atividades.FirstOrDefault(atv => atv.Id == id);
            else
                return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var atividade = this._context.Atividades.FirstOrDefault(atv => atv.Id == id);
            if (atividade == null)
                throw new Exception("Esta atividade não existe");

            this._context.Remove(atividade);
            
            return this._context.SaveChanges() > 0;
        }
    }
}