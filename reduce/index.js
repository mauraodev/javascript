const buttons = [
  {
    name: 'Resposta Rápida',
    type: 'quick_reply'
  },
  {
    name: 'Chamada para ação',
    type: 'call_action'
  },
  {
    name: 'OTP',
    type: 'otp'
  }
]

const uniqueButton = buttons.reduce(function (currentButton, button) {
  return button.type
}, '')

console.log(uniqueButton)
