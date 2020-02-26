;(function() {
  if (!global.window) return
  let lastTime = 0
  const vendors = ['ms', 'moz', 'webkit', 'o']
  for (let x = 0; x < vendors.length && !global.window.requestAnimationFrame; ++x) {
    global.window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    global.window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame']
  }
  if (!global.window.requestAnimationFrame)
    global.window.requestAnimationFrame = function(callback, element) {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = global.window.setTimeout(function() {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  if (!global.window.cancelAnimationFrame)
    global.window.cancelAnimationFrame = function(id) {
      clearTimeout(id)
    }
})(global)
;(function(scope) {
  if (!global.window) return
  const startOffset = Date.now ? Date.now() : +new Date(),
    performance = scope.performance || {},
    _entries = [],
    _marksIndex = {},
    _filterEntries = function(key, value) {
      let i = 0,
        n = _entries.length,
        result = []
      for (; i < n; i++) {
        if (_entries[i][key] == value) {
          result.push(_entries[i])
        }
      }
      return result
    },
    _clearEntries = function(type, name) {
      let i = _entries.length,
        entry
      while (i--) {
        entry = _entries[i]
        if (entry.entryType == type && (name === void 0 || entry.name == name)) {
          _entries.splice(i, 1)
        }
      }
    }
  if (!performance.now) {
    performance.now =
      performance.webkitNow ||
      performance.mozNow ||
      performance.msNow ||
      function() {
        return (Date.now ? Date.now() : +new Date()) - startOffset
      }
  }

  if (!performance.mark) {
    performance.mark =
      performance.webkitMark ||
      function(name) {
        const mark = {
          name: name,
          entryType: 'mark',
          startTime: performance.now(),
          duration: 0
        }
        _entries.push(mark)
        _marksIndex[name] = mark
      }
  }

  if (!performance.measure) {
    performance.measure =
      performance.webkitMeasure ||
      function(name, startMark, endMark) {
        let startTime
        let endTime

        if (endMark !== undefined && _marksIndex[endMark] === undefined) {
          throw new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" +
              endMark +
              "' does not exist."
          )
        }

        if (startMark !== undefined && _marksIndex[startMark] === undefined) {
          throw new SyntaxError(
            "Failed to execute 'measure' on 'Performance': The mark '" +
              startMark +
              "' does not exist."
          )
        }

        if (_marksIndex[startMark]) {
          startTime = _marksIndex[startMark].startTime
        } else {
          startTime = 0
        }

        if (_marksIndex[endMark]) {
          endTime = _marksIndex[endMark].startTime
        } else {
          endTime = performance.now()
        }

        _entries.push({
          name: name,
          entryType: 'measure',
          startTime: startTime,
          duration: endTime - startTime
        })
      }
  }

  if (!performance.getEntriesByType) {
    performance.getEntriesByType =
      performance.webkitGetEntriesByType ||
      function(type) {
        return _filterEntries('entryType', type)
      }
  }

  if (!performance.getEntriesByName) {
    performance.getEntriesByName =
      performance.webkitGetEntriesByName ||
      function(name) {
        return _filterEntries('name', name)
      }
  }

  if (!performance.clearMarks) {
    performance.clearMarks =
      performance.webkitClearMarks ||
      function(name) {
        _clearEntries('mark', name)
      }
  }

  if (!performance.clearMeasures) {
    performance.clearMeasures =
      performance.webkitClearMeasures ||
      function(name) {
        _clearEntries('measure', name)
      }
  }

  // exports
  scope.performance = performance

  if (typeof define === 'function' && (define.amd || define.ajs)) {
    define('performance', [], function() {
      return performance
    })
  }
})(global)
;(function() {
  if (!global.window) return
  const HTMLParser = require('../node_modules/happy-dom/lib/html-parser/HTMLParser').default
  global.DOMParser = function() {
    this.parseFromString = function() {
      const parsed = HTMLParser.parse(document, ...arguments)

      return {
        head: { children: [] },
        body: parsed
      }
    }
  }
  const nodeAppendChild = global.Node.prototype.appendChild
  global.HTMLElement.prototype.setCustomValidity = function(){}
  global.Node.prototype.appendChild = function(node) {
    if (node.parentNode && node.parentNode.childNodes) {
      if (!Array.isArray(node.parentNode.childNodes)) {
        node.parentNode.childNodes = Object.values(node.parentNode.childNodes)
      }
    }
    return nodeAppendChild.call(this, node)
  }
  global.window.HTMLIFrameElement = class {}
  global.window.navigator.language = 'en'

  const oldCreateElement = global.document.createElement

  global.document.createElement = (...args) => {
    const elem = oldCreateElement.apply(global.document, args)
    elem.dataset = elem.dataset || {}
    return elem
  }
})()
