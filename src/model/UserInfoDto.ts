import { ApiModelProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiModelProperty()
  readonly email: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
  readonly firstname: string;
  @ApiModelProperty()
  readonly lastname: string;
  @ApiModelProperty()
  readonly age: string;
}
