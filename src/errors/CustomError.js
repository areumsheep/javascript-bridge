class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;