import {Entity, model, property} from '@loopback/repository';

@model()
export class Type extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Type>) {
    super(data);
  }
}
