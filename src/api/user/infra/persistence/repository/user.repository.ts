// import { getManager, Repository } from 'typeorm';
//
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
//
// import { Order } from '@order/infra/persistence/entity/order.model';
// import {
//   BaseRepository,
//   getEntityManagerOrTransactionManager,
// } from 'typeorm-transactional-cls-hooked';
// import { getEntityManager } from '@typedorm/core';
//
// @Injectable()
// export class UserRepositoryWrapper {
//   constructor() {}
//
//   public async command(name: string, password: string): Promise<Order> {
//     const ss = getManager();
//     const sd = getEntityManagerOrTransactionManager(
//       '__typeOrm___cls_hooked_tx_namespace',
//       ss,
//     );
//     //sd.getRepository('users');
//     const order = new Order();
//     order.id = 1;
//     order.name = name;
//     order.password = password;
//     return sd.getRepository('Order').save(order);
//   }
//
//   // public async findByEmail(emailAddress: string): Promise<Order | null> {
//   //   const result = await this.repository.findOne({ where: { emailAddress } });
//   //   return result ? result : null;
//   // }
//   //
//   // public async findByEmailAuthToken(emailAuthToken: string): Promise<Order | null> {
//   //   const result = await this.repository.findOne({ where: { emailAuthToken } });
//   //   return result ? result : null;
//   // }
//
//   // public async findById(id: number): Promise<Order | null> {
//   //   const result = await this.repository.findOne({ where: { id } });
//   //   return result ? result : null;
//   // }
//   //
//   // public async updateEmailAuthTokenExpiryTime(id: number, emailAuthTokenExpiryTime: Date | null): Promise<void> {
//   //   await this.repository.update(id, { emailAuthTokenExpiryTime });
//   // }
// }
import { Inject, Injectable } from '@nestjs/common';
import { GenericTypeOrmRepo } from '../../../../../domain/typeorm/GenericTypeOrmRepo';
import { User } from '@user/domain/user/User';
//import { UserId } from '@order/domain/order/UserId';
import { UserRootEntity } from '@user/infra/UserRootEntity';
import { UserEntityMapper } from '@user/infra/UserEntityMapper';
import { UserRepositoryKey } from '@user/domain/user/UserRepository';

@Injectable()
@Reflect.metadata(UserRepositoryKey, 'User')
export class UserRepository extends GenericTypeOrmRepo<User, UserRootEntity> {
  constructor(@Inject(UserEntityMapper) mapper: UserEntityMapper) {
    super(mapper);
  }
}
