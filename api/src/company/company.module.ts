import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyController } from './company.controller';

@Module({
  imports:[PrismaModule],
  providers: [CompanyService, CompanyResolver],
  controllers: [CompanyController]
})
export class CompanyModule {}
