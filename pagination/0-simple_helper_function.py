#!/usr/bin/env python3
"""
pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    calcul first and last element of the page
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
