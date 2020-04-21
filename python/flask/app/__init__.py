from flask import Flask

app = Flask(__name__)  # 实例化flask
app.debug = True  # 开启调试模式

from app.home import home as home_blueprint  # 导入
from app.admin import admin as admin_blueprint

app.register_blueprint(home_blueprint)
app.register_blueprint(admin_blueprint, url_prefix="/admin")