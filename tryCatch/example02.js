const test = () => {
  const user = null

  console.log(user)

  throw new Error('Este erro é interno!!')
}

module.exports = {
  test
}
