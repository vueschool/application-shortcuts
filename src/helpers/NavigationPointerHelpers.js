export function incrementPointer (current, limit) {
  return current < limit ? current + 1 : 1
}

export function decrementPointer (current, limit) {
  return current > 1 ? current - 1 : limit
}
