// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {Filter, repository} from '@loopback/repository';

import {
    param,
    get,
    getFilterSchemaFor,
} from '@loopback/rest';
import {TournamentRepository} from "../repositories";
import {Tournament} from "../models";


export class TournamentController {
    constructor(
        @repository(TournamentRepository)
        public tournamentRepository: TournamentRepository,
    ) {
    }

    @get('/tournaments', /*{...}*/)
    async find(
        @param.query.object('filter', getFilterSchemaFor(Tournament)) filter?: Filter): Promise<Tournament[]> {
        return await this.tournamentRepository.find(filter);
    }
}
