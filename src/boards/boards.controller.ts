import { Board } from './boards.model';
import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllboards(): Board[] {
    return this.boardService.getAllboards();
  }
}
