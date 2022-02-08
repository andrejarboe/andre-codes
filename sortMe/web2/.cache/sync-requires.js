
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/andre/code/.business/clients/andre-codes/web2/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/andre/code/.business/clients/andre-codes/web2/src/pages/index.js"))
}

