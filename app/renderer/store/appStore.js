import { observable, asStructure } from 'mobx'

class AppStore {
  @observable appState = asStructure({
    loading: true
  })

  toggle() {
    this.appState.loading = !this.appState.loading
  }
}

export default AppStore
