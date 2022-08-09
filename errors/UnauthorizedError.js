class UnauthorizedError extends Error {
  constructor({ message }) {
    super(message);
    this.statusCode = 401;
    this.message = message;
  }
}

module.exports = UnauthorizedError;
