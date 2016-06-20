import { observable, action } from 'mobx'
import ChannelStore from 'store/channel'
import DownloadStore from 'store/download'

class AppStore {
  @observable loading = true

  constructor() {
    this.channels = new ChannelStore()
    this.downloads = new DownloadStore()
  }

  @action load() {
    var _s = this
    setTimeout(function() {
      _s.loading = false
    }, 2000)
  }
}

export default AppStore
