import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function camelToSentenceCase(str: string) {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}
