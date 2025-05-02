#!/usr/bin/env python3
"""
nosql
"""


def list_all(mongo_collection):
    """
    list all document
    """
    return mongo_collection.find()
