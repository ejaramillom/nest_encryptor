import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';

@Module({
  imports: [
      UserModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        // typePaths: ['./**/*.graphql'],
        playground: true,
        autoSchemaFile: 'schema.gql',
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
