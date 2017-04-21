#! /shared/bower_components/brython/www/src/brython.js

from browser import *

class pyQuery:
    def __init__(self, selector):
        console.log(selector)

Q = pyQuery

Q('#responsive-dom-input').on('change', changed)
