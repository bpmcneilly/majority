'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteralLoose')
)

var _react = _interopRequireDefault(require('react'))

var _commonTags = require('common-tags')

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2.default)([
    '\n            <iframe\n              src="https://www.googletagmanager.com/ns.html?id=',
    '',
    '"\n              height="0"\n              width="0"\n              style="display: none; visibility: hidden"\n            ></iframe>',
  ])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)([
    "\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl",
    ";f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer', '",
    "');",
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)([
    '\n      &gtm_auth=',
    '&gtm_preview=',
    '&gtm_cookies_win=x\n    ',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

exports.onRenderBody = function(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
    setPreBodyComponents = _ref.setPreBodyComponents

  if (
    process.env.NODE_ENV === 'production' ||
    pluginOptions.includeInDevelopment
  ) {
    var environmentParamStr =
      pluginOptions.gtmAuth && pluginOptions.gtmPreview
        ? (0, _commonTags.oneLine)(
            _templateObject(),
            pluginOptions.gtmAuth,
            pluginOptions.gtmPreview
          )
        : ''
    setHeadComponents([
      _react.default.createElement('script', {
        key: 'plugin-google-tagmanager',
        dangerouslySetInnerHTML: {
          __html: (0, _commonTags.stripIndent)(
            _templateObject2(),
            environmentParamStr,
            pluginOptions.id
          ),
        },
      }),
    ])
    setPreBodyComponents([
      _react.default.createElement('noscript', {
        key: 'plugin-google-tagmanager',
        dangerouslySetInnerHTML: {
          __html: (0, _commonTags.stripIndent)(
            _templateObject3(),
            pluginOptions.id,
            environmentParamStr
          ),
        },
      }),
    ])
  }
}
