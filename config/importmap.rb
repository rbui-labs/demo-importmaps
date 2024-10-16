# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "@hotwired--stimulus.js" # @3.2.2
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "tailwindcss/plugin", to: "tailwindcss--plugin.js" # @3.4.13
pin "tailwindcss-animate", to: "tailwindcss-animate.js", preload: true
pin_all_from "app/components/rbui", under: "rbui"
pin "rbui-js" # @1.0.0
pin "@babel/runtime/helpers/esm/assertThisInitialized", to: "@babel--runtime--helpers--esm--assertThisInitialized.js" # @7.25.6
pin "@babel/runtime/helpers/esm/classCallCheck", to: "@babel--runtime--helpers--esm--classCallCheck.js" # @7.25.6
pin "@babel/runtime/helpers/esm/createClass", to: "@babel--runtime--helpers--esm--createClass.js" # @7.25.6
pin "@babel/runtime/helpers/esm/createForOfIteratorHelper", to: "@babel--runtime--helpers--esm--createForOfIteratorHelper.js" # @7.25.6
pin "@babel/runtime/helpers/esm/createSuper", to: "@babel--runtime--helpers--esm--createSuper.js" # @7.25.6
pin "@babel/runtime/helpers/esm/defineProperty", to: "@babel--runtime--helpers--esm--defineProperty.js" # @7.25.6
pin "@babel/runtime/helpers/esm/inherits", to: "@babel--runtime--helpers--esm--inherits.js" # @7.25.6
pin "@babel/runtime/helpers/esm/typeof", to: "@babel--runtime--helpers--esm--typeof.js" # @7.25.6
pin "@floating-ui/core", to: "@floating-ui--core.js" # @1.6.8
pin "@floating-ui/dom", to: "@floating-ui--dom.js" # @1.6.11
pin "@floating-ui/utils", to: "@floating-ui--utils.js" # @0.2.8
pin "@floating-ui/utils/dom", to: "@floating-ui--utils--dom.js" # @0.2.8
pin "@kurkle/color", to: "@kurkle--color.js" # @0.3.2
pin "@motionone/animation", to: "@motionone--animation.js" # @10.18.0
pin "@motionone/dom", to: "@motionone--dom.js" # @10.18.0
pin "@motionone/easing", to: "@motionone--easing.js" # @10.18.0
pin "@motionone/generators", to: "@motionone--generators.js" # @10.18.0
pin "@motionone/types", to: "@motionone--types.js" # @10.17.1
pin "@motionone/utils", to: "@motionone--utils.js" # @10.18.0
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "chart.js/auto", to: "chart.js--auto.js" # @4.4.4
pin "date-fns", to: "https://ga.jspm.io/npm:date-fns@3.3.1/index.mjs"
pin "fuse.js" # @7.0.0
pin "hey-listen" # @1.0.8
pin "motion" # @10.18.0
pin "mustache" # @4.2.0
pin "tippy.js" # @6.3.7
pin "tslib" # @2.7.0
pin "@popperjs/core/+esm", to: "@popperjs--core--+esm.js" # @2.11.8
pin "@popperjs/core", to: "stupid-popper-lib-2024.js"