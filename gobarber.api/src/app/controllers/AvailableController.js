class AvailableController {
  async index(request, response) {
    return response.json('OK');
  }
}

export default new AvailableController();
