import { Response } from "express";

export enum HttpStatus {
    OK = 200,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
    Ok(res: Response, data?: any): Response {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: "Success",
            data: data,
        });
    }

    Unauthorized(res: Response, data?: any): Response {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            statusMsg: "Unauthorized",
            error: data,
        });
    }

    Error(res: Response, data?: any): Response {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: "Internal server error",
            error: data,
        });
    }
}