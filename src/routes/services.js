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

      /* console.log(typeof(novoServico.corteBarba))
      console.log(typeof(novoServico.barba))
      console.log(typeof(novoServico.corteCabelo))
      console.log(typeof(novoServico.sobrancelha))
      console.log(typeof(novoServico.corteSobrancelha))
      console.log(typeof(novoServico.corteBarbaSobrancelha))
      console.log(typeof(novoServico.pigmentacao))
      console.log(typeof(novoServico.undercutFem)) */

      //verifica se o id do serviço já está cadastrado ou não no sistema
      if(this.db.findById(novoServico.id) != undefined) return res.status(400).json({message: 'Este id já está cadastrado no sistema.'})
      //verifica se foi preenchido o id
      if(!novoServico.id) return res.status(400).json({ message: 'O id é obrigatório' })
      //verifica se foi colocado valor diferente de numero no id
      if(!Number(novoServico.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})
      //verifica se foi preenchido o id cliente
      if(!novoServico.idCliente) return res.status(400).json({ message: 'O campo idCliente é obrigatório' })
      //verifica se foi colocado valor diferente de numero no id cliente
      if(!Number(novoServico.idCliente)) return res.status(400).json({message: 'O idCliente é composto apenas de números.'})
      //verifica se todos os valores são false, se for, não foi solicitado nenhum serviço
      if(novoServico.corteCabelo !== true && novoServico.barba !== true &&  novoServico.sobrancelha !== true && novoServico.corteBarba !== true && novoServico.corteSobrancelha !== true &&  novoServico.corteBarbaSobrancelha !== true &&  novoServico.pigmentacao !== true &&  novoServico.undercutFem !== true) return res.status(400).json({ message: 'É necessário solicitar ao menos um serviço para continuar.' })
      //verifica se foi colocado valor diferente de verdadeiro ou falso
      if(typeof(novoServico.corteCabelo) !== 'boolean' || typeof(novoServico.barba) !== 'boolean' || typeof(novoServico.sobrancelha) !== 'boolean' || typeof(novoServico.corteBarba) !== 'boolean' || typeof(novoServico.corteSobrancelha) !== 'boolean'||(typeof novoServico.corteBarbaSobrancelha) !== 'boolean' || typeof(novoServico.pigmentacao) !== 'boolean' || typeof(novoServico.undercutFem) !== 'boolean') return res.status(400).json({ message: 'Os valores preenchidos só podem ser verdadeiro ou falso.' })

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

      if(novoServico.corteCabelo !== true && novoServico.barba !== true &&  novoServico.sobrancelha !== true && novoServico.corteBarba !== true && novoServico.corteSobrancelha !== true &&  novoServico.corteBarbaSobrancelha !== true &&  novoServico.pigmentacao !== true &&  novoServico.undercutFem !== true) return res.status(400).json({ message: 'É necessário solicitar ao menos um serviço para continuar.' })

      if(typeof(novoServico.corteCabelo) !== 'boolean' || typeof(novoServico.barba) !== 'boolean' || typeof(novoServico.sobrancelha) !== 'boolean' || typeof(novoServico.corteBarba) !== 'boolean' || typeof(novoServico.corteSobrancelha) !== 'boolean'||(typeof novoServico.corteBarbaSobrancelha) !== 'boolean' || typeof(novoServico.pigmentacao) !== 'boolean' || typeof(novoServico.undercutFem) !== 'boolean') return res.status(400).json({ message: 'Os valores preenchidos só podem ser verdadeiro ou falso.' })

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
