import { Router } from "express"
import ServiceModel from '../models/servicesModel.js'

export default class ServiceRoutes {
  constructor(db) {
    this.db = new ServiceModel(db)
  }

  routes() {
    const router = Router()
    router.get('/', (req, res) => {
      const servico = this.db.findAll()
      res.json(servico)
    })

    router.get('/:id', (req, res) => {
      const servico = this.db.findById(req.params.id)
      if (!servico) {
        res.status(404).json({ message: 'Serviço não encontrado' })
      } else {
        res.json(servico)
      }
    })

    router.post('/', (req, res) => {
      const novoServico = req.body

      console.log('novoServico.id:', novoServico.id);
      console.log('this.db.servico:', this.db.findById(novoServico.id));

      //verifica se o id do serviço já está cadastrado ou não no sistema
      if(this.db.findById(novoServico.id) != undefined) return res.status(400).json({message: 'Este id já está cadastrado no sistema.'})
      if(!novoServico.id) return res.status(400).json({ message: 'O id é obrigatório' })
      if(!Number(novoServico.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})
      if(!novoServico.idCliente) return res.status(400).json({ message: 'O campo idCliente é obrigatório' })
      if(!Number(novoServico.idCliente)) return res.status(400).json({message: 'O idCliente é composto apenas de números.'})
      if(novoServico.corteCabelo & novoServico.barba & novoServico.sobrancelha & novoServico.corteBarba & novoServico.corteSobrancelha & novoServico.corteBarbaSobrancelha & novoServico.pigmentacao & novoServico.undercutFem == false) return res.status(400).json({ message: 'É necessário solicitar ao menos um serviço para continuar.' })
      /* if(!Boolean(novoServico.corteCabelo & novoServico.barba & novoServico.sobrancelha & novoServico.corteBarba & novoServico.corteSobrancelha & novoServico.corteBarbaSobrancelha & novoServico.pigmentacao & novoServico.undercutFem)) return res.status(400).json({ message: 'Os valores preenchidos só podem ser verdadeiro ou falso.' }), console.log(novoServico) */
      //comentado pois ainda não está funcionando
      this.db.create(novoServico)
      res.json(novoServico)
    })

    router.put('/:id', (req, res) => {
      const { id } = req.params
      const servico = req.body

      if(!servico.id) return res.status(400).json({ message: 'O id é obrigatório' })
      if(!Number(servico.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})
      if(!servico.idCliente) return res.status(400).json({ message: 'O campo idCliente é obrigatório' })
      if(!Number(servico.idCliente)) return res.status(400).json({message: 'O idCliente é composto apenas de números.'})
      if(servico.corteCabelo & servico.barba & servico.sobrancelha & servico.corteBarba & servico.corteSobrancelha & servico.corteBarbaSobrancelha & servico.pigmentacao & servico.undercutFem == false) return res.status(400).json({ message: 'É necessário solicitar ao menos um serviço para continuar.' })
      /* if(!Boolean(servico.corteCabelo, servico.barba, servico.sobrancelha, servico.corteBarba, servico.corteSobrancelha, servico.corteBarbaSobrancelha, servico.pigmentacao, servico.undercutFem)) return res.status(400).json({ message: 'Os valores preenchidos só podem ser verdadeiro ou falso.' }), console.log(servico) */
      //comentado pois ainda não está funcionando
      this.db.update(id, servico)
      res.json(servico)

    })
    router.delete('/:id', (req, res) => {
      const { id } = req.params
      this.db.delete(id)
      res.json({ message: 'Serviço removido com sucesso' })

    })

    return router

  }
}
