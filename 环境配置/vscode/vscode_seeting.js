{
  "workbench.colorCustomizations": {
    // 设置guide线高亮颜色
    "editorIndentGuide.activeBackground": "#a8a1a1"
  },
  "npm.enableScriptExplorer": true,
    "editor.renderIndentGuides": false,
      // html css supoort配置
      "editor.parameterHints": true,
        "editor.quickSuggestions": {
    "other": true,
      "comments": true,
        "strings": true
  },
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
    // 重新设定tabsize
    "editor.tabSize": 2,
      "editor.fontSize": 18,
        "editor.lineHeight": 23,
          // 格式化粘贴到文件内的内容
          "editor.formatOnPaste": true,
            // 是否开启eslint检测
            "eslint.enable": true,
              // #每次保存的时候将代码按eslint格式进行修复
              "eslint.autoFixOnSave": true,
                // 添加 vue 支持
                "eslint.validate": [
                  "javascript",
                  "javascriptreact",
                  "html",
                  {
                    "language": "vue",
                    "autoFix": true
                  }
                ],
                  //  #让prettier使用eslint的代码格式进行校验 
                  "prettier.eslintIntegration": true,
                    //  #去掉代码结尾的分号 
                    "prettier.semi": false,
                      //  #使用带引号替代双引号 
                      "prettier.singleQuote": true,
                        //  #让函数(名)和后面的括号之间加个空格
                        // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
                        // #这个按用户自身习惯选择 
                        "vetur.format.defaultFormatter.html": "js-beautify-html",
                          // #让vue中的js按编辑器自带的ts格式进行格式化 
                          "vetur.format.defaultFormatter.js": "vscode-typescript",
                            "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  // vetur插件
  // "emmet.syntaxProfiles": {
  //     "vue-html": "html",
  //     "vue": "html"
  // },
  "terminal.integrated.rendererType": "dom",
    "editor.wordWrap": "on",
      "workbench.iconTheme": "vscode-icons",
        "task.slowProviderWarning": [
          "npm"
        ],
          "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false
  },
  "leetcode.workspaceFolder": "d:\\projects\\self\\lcode",
    "leetcode.defaultLanguage": "javascript",
      "C_Cpp.updateChannel": "Insiders",
        "leetcode.hint.commentDescription": false,
          "leetcode.hint.configWebviewMarkdown": false,
            "explorer.confirmDelete": false,
              "http.proxySupport": "off",
                "leetcode.endpoint": "leetcode-cn",
                  "python.formatting.provider": "none",
                    "[javascript]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "workbench.colorTheme": "OneDark Dark+ Vivid",
    "liveServer.settings.host": "localhost",
      "liveServer.settings.fullReload": true,
        "liveServer.settings.AdvanceCustomBrowserCmdLine": "",
          "editor.fontLigatures": null,
            "editor.formatOnType": true,
              "html.format.contentUnformatted": "",
                "editor.formatOnSave": true
}