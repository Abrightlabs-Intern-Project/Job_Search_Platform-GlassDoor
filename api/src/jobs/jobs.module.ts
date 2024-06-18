import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [JobsService, JobsResolver]
})
export class JobsModule {}
