import { Board } from './board.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
