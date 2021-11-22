import api from '../../api'

export function updatePersonsList ({ commit, state }) {
  if (!state.items.length) {
    commit('PERSONS_LIST_REQUEST')
    api.personsListRequest()
      .then(response => response.json())
      .then(json => commit('PERSONS_LIST_UPDATE', { items: json }))
  }
}

export function updatePerson ({ commit, state }, id) {
  if (!state.items.length) {
    commit('PERSONS_LIST_REQUEST')
    api.personsListRequest()
      .then(response => response.json())
      .then(json => {
        commit('PERSONS_LIST_UPDATE', { items: json })
        commit('PERSONS_SELECT_PERSON', { id })
      })
  } else {
    commit('PERSONS_SELECT_PERSON', { id })
  }
}

export function editPerson ({ commit, state }, person) {
  commit('PERSONS_EDIT_PERSON', { person })
}

export function addPerson ({ commit, state }, person) {
  commit('PERSONS_ADD_PERSON', { person })
}
