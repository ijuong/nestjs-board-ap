import { Board } from './boards.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBaordDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllboards(): Board[] {
    return this.boardService.getAllboards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBaordDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }
}
