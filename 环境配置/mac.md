sudo -i 切换root用户和权限 
注意：和当前xx用户目录不同 xx用户ssh目录：～/.ssh
root用户ssh目录：/var/root/.ssh

# Homebrew国内镜像安装
https://blog.csdn.net/u010458765/article/details/104730037/

删除/usr/local/Homebrew文件夹，重新生成空文件夹
`sudo mkdir /usr/local/Homebrew`

下载homebrew国内源
```
sudo git clone https://mirrors.ustc.edu.cn/brew.git /usr/local/Homebrew
 或者 
sudo git clone https://mirrors.aliyun.com/homebrew/brew.git /usr/local/Homebrew
 或者 
sudo git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git /usr/local/Homebrew
```

软连接，如果提示File exists表示/usr/local/bin文件夹里面已经有brew，删除后再运行一次
`sudo ln -s /usr/local/Homebrew/bin/brew /usr/local/bin/brew`

创建core文件夹并下载
`sudo mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core`
```
sudo git clone https://mirrors.ustc.edu.cn/homebrew-core.git /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
 或者 
sudo git clone https://mirrors.aliyun.com/homebrew/homebrew-core.git /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
 或者 
sudo git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
```

获取权限 并 运行更新
`sudo chown -R $(whoami) /usr/local/Homebrew`
`brew update`

设置环境变量
```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc 
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
```
end



#### 安装官方homebrew后更换国内源
重置brew.git
`cd "$(brew --repo)"`
`git remote set-url origin https://mirrors.ustc.edu.cn/brew.git`
重置homebrew-core.git
`cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"`
`git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git`

#### 重置回默认的源
重置brew.git
`cd "$(brew --repo)"`
`git remote set-url origin https://github.com/Homebrew/brew.git`
重置homebrew-core.git
`cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"`
`git remote set-url origin https://github.com/Homebrew/homebrew-core.git`





# homebrew常用命令
`brew -v` 查看版本
`brew update` 更新Homebrew自己
`brew outdated` 查询可更新的包
`brew install 包名` 安装软件包
`brew upgrade` 更新所有包
`brew upgrade 包名` 更新指定包
`brew cleanup` 清理所有包的旧版本
`brew cleanup 包名` 清理指定包的旧版本
`brew cleanup -n` 查看可清理的旧版本包，不执行实际操作
`brew pin $FORMULA`   锁定某个不想更新的包
`brew unpin $FORMULA`  取消锁定
`brew uninstall 包名` 卸载安装包
`brew info 包名` 查看包信息
`brew list` 查看安装列表
`brew search 包名` 查询可用包
卸载Homebrew
```
cd `brew --prefix`
rm -rf Cellar
brew prune
rm `git ls-files`
rm -r Library/Homebrew Library/Aliases Library/Formula Library/Contributions
rm -rf .git
rm -rf ~/Library/Caches/Homebrew
```


#### brew install 包报错
Error: The following directories are not writable by your user: /usr/local/share/doc /usr/local/share/man /usr/local/share/man/man1 /usr/local/share/man/man5 /usr/local/share/man/man7  You should change the ownership of these directories to your user. 
解决办法：回收权限后即可使用brew install
`sudo chown -R `whoami`:admin /usr/local/bin`
`sudo chown -R `whoami`:admin /usr/local/share`

#### brew cleanup报错
Error: Permission denied @ apply2files - /usr/local/lib/node_modules/webpack/node_modules/extglob/lib/.DS_Store
`sudo chown -R $(whoami) /usr/local`
`brew cleanup`

# mac环境变量设置
～/.bash_profile：
需要使用source执行下，方可生效
～/.zshrc修改环境变量，保存修改重启终端即可