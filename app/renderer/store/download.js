import { observable, action } from 'mobx'

class DownloadStore {

  @observable progress = 0

  @action start() {
    var _s = this
    setInterval(function() {
      _s.progress += 1
    }, 1000)
  }

}

export default DownloadStore
