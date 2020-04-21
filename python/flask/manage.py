#!/usr/bin/python3
# -*- coding: utf-8 -*-
from app import app

print(app)



if __name__ == '__main__':
    
    app.run(host="localhost",port=5500,debug=True)
# python manage.py
