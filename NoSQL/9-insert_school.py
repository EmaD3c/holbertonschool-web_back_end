#!/usr/bin/env python3
"""
nosql
"""


def insert_school(mongo_collection, **kwargs):
    """
    insert new document based on kwargs
    """
    new_collection = mongo_collection.insert_one(kwargs)
    return new_collection.inserted_id
