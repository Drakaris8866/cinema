import { IUser } from '@shared/auth.types'


export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}