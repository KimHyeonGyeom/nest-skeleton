import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

/**
 * 도메인 계층은 비즈니스 규칙을 담고 있는 핵심 영역입니다. 따라서 외부의 변경 사항에 대해 최대한 영향을 받지 않도록, 애플리케이션 계층의 가장 안쪽에 위치합니다.
  도메인 계층을 작성할 때 중요한 것은 특정 시나리오를 작성할 때 연관되어 있는 기술적 관심사나, 외부의 구현 세부사항에 대한 것을 배제하는 것입니다. 이 영역에는 오로지 순수한 비즈니스 규칙만이 위치할 수 있습니다.
  이러한 규칙들을 캡슐화하여 모델로 만듭니다.
 그러면 “사용자” 라는 개념에 대해서, 간단하게 모델링 해보도록 하겠습니다.

 사용자는 어떤 행위를 할 수있나요?
 - 로그인
 - 비밀번호 변경
 - 탈퇴
 이 행위들을 표현하기 위한 규칙들은 무엇이 있나요?
 - (로그인) 비밀번호가 일치해야 합니다.
 - (로그인) 시각이 기록되어야 합니다.
 - (인증) 유효기간 내에만 가능합니다.
 - (인증) 토큰 문자열이 일치해야 합니다.
 - (인증) 유효기간이 지나면, 유효기간을 갱신해야 합니다.
 - (비밀번호 변경) 기존과 일치하는 비밀번호를 입력해야 합니다.

 */

export class User extends AggregateRoot<number> {
  constructor(
    public readonly id: number | null,
    public readonly name: string,
    public readonly password: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
    deletedAt: Date | null | undefined,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: { name: string; password: string }): User {
    const { name, password } = param;

    return new User(null, name, password, new Date(), new Date(), null);
  }

  toString(): any {
    return { id: this.id, name: this.name, password: this.password };
  }
}
