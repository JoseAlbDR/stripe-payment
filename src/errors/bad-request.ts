import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-error";

class BadRequestError extends CustomAPIError {
  constructor(public message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export default BadRequestError;
