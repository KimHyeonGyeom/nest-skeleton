import { getManager, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@user/infra/persistence/entity/user.model';
import {
  BaseRepository,
  getEntityManagerOrTransactionManager,
} from 'typeorm-transactional-cls-hooked';
import { getEntityManager } from '@typedorm/core';

@Injectable()
export class UserRepositoryWrapper {
  constructor(
    @InjectRepository(User) private repository: BaseRepository<User>,
  ) {}

  public async createUser(name: string, password: string): Promise<User> {
    const ss = getManager();
    const sd = getEntityManagerOrTransactionManager(
      '__typeOrm___cls_hooked_tx_namespace',
      ss,
    );
    //sd.getRepository('users');
    const user = new User();
    user.id = 1;
    user.name = name;
    user.password = password;
    return sd.getRepository('User').save(user);
  }

  // public async findByEmail(emailAddress: string): Promise<User | null> {
  //   const result = await this.repository.findOne({ where: { emailAddress } });
  //   return result ? result : null;
  // }
  //
  // public async findByEmailAuthToken(emailAuthToken: string): Promise<User | null> {
  //   const result = await this.repository.findOne({ where: { emailAuthToken } });
  //   return result ? result : null;
  // }

  public async findById(id: number): Promise<User | null> {
    const result = await this.repository.findOne({ where: { id } });
    return result ? result : null;
  }
  //
  // public async updateEmailAuthTokenExpiryTime(id: number, emailAuthTokenExpiryTime: Date | null): Promise<void> {
  //   await this.repository.update(id, { emailAuthTokenExpiryTime });
  // }
}
