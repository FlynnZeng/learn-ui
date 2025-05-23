export * from './install'
export * from './error'
export * from './style'

export const typeIconMap = new Map<string, string>([
  ['info', 'circle-info'],
  ['success', 'check-circle'],
  ['warning', 'circle-exclamation'],
  ['danger', 'circle-xmark'],
  ['error', 'circle-xmark'],
])
