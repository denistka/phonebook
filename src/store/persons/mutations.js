export function PERSONS_LIST_REQUEST (state) {
  state.isFetching = true
}
export function PERSONS_LIST_UPDATE (state, payload) {
  state.items = [ ...payload.items ]
  state.isFetching = false
}
export function PERSONS_SELECT_PERSON (state, payload) {
  state.selected = state.items.filter(item => item.id?.toString() === payload.id?.toString())[0]
}
export function PERSONS_EDIT_PERSON (state, payload) {
  const index = state.items.findIndex(item => item.id?.toString() === payload.person.id?.toString())
  state.items[index] = { ... payload.person }
  state.items = [ ...state.items ]
}
export function PERSONS_ADD_PERSON (state, payload) {
  state.items.push(payload.person)
  state.items = [ ...state.items ]
}
