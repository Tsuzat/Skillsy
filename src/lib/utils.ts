import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const getUserInitals = (userName?: string) => {
	if (userName === undefined) return '??';
	try {
		const words = userName.split(' ');
		if (words.length > 1) {
			return words[0][0] + words[1][0];
		} else if (words.length === 1 && words[0].length > 1) {
			return words[0][0] + words[0][1];
		} else {
			return words[0][0];
		}
	} catch {
		return '??';
	}
};
