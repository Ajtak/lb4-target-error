import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Type} from "./type.model";

@model()
export class Tournament extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id?: number;

    @belongsTo(() => Type)
    person_id: number;


    @property({
        type: 'string',
        required: true,
    })
    title: string;


    constructor(data?: Partial<Tournament>) {
        super(data);
    }
}
