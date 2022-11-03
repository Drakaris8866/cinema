import { NextPage } from 'next'
import { ReactNode } from 'react'

export interface IUser {
	_id: string
	email: string
	isAdmin: boolean
	createdAt: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IEmailPassword {
	email: string
	password: string
}

// export type NextPage<P,IP>

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles, children: ReactNode}
