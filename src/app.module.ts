import { ProductDbService } from './schemas/product.service';
import { ProductDbModule } from './schemas/productdb.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProductDbModule,
    ProductsModule, MongooseModule.forRoot('mongodb://localhost:27017/products'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'fe_src'),
      exclude: ['/api/(.*)']
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [
    ProductDbService, AppService],
})
export class AppModule { }
