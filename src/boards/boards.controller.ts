import { BoardStatus } from './board-status.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBaordDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth.credentail.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBaordDto: CreateBaordDto): Promise<Board> {
    return this.boardService.createBoard(createBaordDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardService.updateBoardStatus(id, status);
  }

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllboards();
  }

  //   @Get('/')
  //   getAllboards(): Board[] {
  //     return this.boardService.getAllboards();
  //   }

  //   @Post('/')
  //   @UsePipes(ValidationPipe)
  //   createBoard(@Body() createBoardDto: CreateBaordDto): Board {
  //     return this.boardService.createBoard(createBoardDto);
  //   }

  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     return this.boardService.getBoardById(id);
  //   }

  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.boardService.deleteBoard(id);
  //   }

  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  //   ) {
  //     return this.boardService.updateBoardStatus(id, status);
  //   }
}
