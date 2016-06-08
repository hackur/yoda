/* eslint no-console: 0 */
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackCfg from './webpack.config.development'

const PORT = 3000
const app = express()
const compiler = webpack(webpackCfg)

const wdm = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackCfg.output.publicPath
});
const whm = webpackHotMiddleware(compiler)

app.use(wdm)
app.use(whm)

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err)
    return
  }

  console.log(`Listening at http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.log('Stopping dev server')
  wdm.close()
  server.close(() => {
    process.exit(0)
  })
})
