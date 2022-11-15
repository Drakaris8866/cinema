import { IUser } from '@shared/auth.types'

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}