const produtos = {
  'andamento': {
    'name': 'Em andamento',
    items: {}
  },
  'recebido': {
    'name': 'Recebido',
    items: {}
  }
}

const b = {
  ...produtos,
  'concluido': {
    items: {}
  }
}

const c = {
  ...b,
  'concluido': {
    ...b.items,
    items: [
      {
        name: 'Sabonete'
      },
      {
        name: 'Teste'
      }
    ]
  }
}

console.log(c.concluido)
