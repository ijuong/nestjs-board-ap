import { CustomRepository } from 'src/configs/typeorm-ex.decorator';
import { Board } from './board.entity';
import { Repository, EntityRepository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { CreateBaordDto } from './dto/create-board.dto';

//@EntityRepository(Board)
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBaordDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
