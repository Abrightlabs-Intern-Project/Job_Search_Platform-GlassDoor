import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JobsModule } from './jobs/jobs.module';
import { CompanyModule } from './company/company.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),UsersModule , PrismaModule, JobsModule, CompanyModule, CommunityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
