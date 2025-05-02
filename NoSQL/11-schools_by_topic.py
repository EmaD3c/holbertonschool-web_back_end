#!/usr/bin/env python3
"""
nosql
"""


def update_topics(mongo_collection, name, topics):
    """
    change all in school based on name
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
