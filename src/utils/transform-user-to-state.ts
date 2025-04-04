import { type TProtectUserData } from '@/services/auth/auth.types'

export type TUserDataState = {
	id: number
	isLoggedIn: boolean
	email: string
}

export const transformUserToState = (
	user: TProtectUserData
): TUserDataState | null => {
	return {
		...user,
		isLoggedIn: true,
	}
}
