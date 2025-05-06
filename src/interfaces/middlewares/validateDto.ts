import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export function validateDto(factory: () => object) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(factory().constructor as any, req.body);

    const errors = await validate(dtoObj, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      res.status(400).json({
        message: "Erro de validação",
        errors: errors.map((e) => ({
          property: e.property,
          constraints: e.constraints,
        })),
      });
      return;
    }

    next();
  };
}
