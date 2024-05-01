import { NextFunction, Request, Response } from 'express';
import { Prisma } from '../prisma';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = '服务器内部错误';

  if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 404;
    message = '初始化数据库失败';
  }
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    message = '输入字段格式不正确';
  }
  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = 403;
    message = '查询数据失败';
  }
  if (process.env.NODE_ENV === 'development') {
    res.status(statusCode).json({
      message,
      stack: err.stack
    });
  } else {
    res.status(statusCode).json({
      message
    });
  }
};

export { notFound, errorHandler };
