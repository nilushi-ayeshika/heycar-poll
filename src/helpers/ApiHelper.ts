class ApiHelper {
  createHeader = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  })
}

export default new ApiHelper()
