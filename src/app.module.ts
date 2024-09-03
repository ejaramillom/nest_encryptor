import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';

@Module({
  imports: [
      UserModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        typePaths: ['./**/*.graphql'],
        transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),

      }),
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
