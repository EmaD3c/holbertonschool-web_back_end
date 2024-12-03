#!/usr/bin/env python3
"""
Complex types - string and int/float to tuple
"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Converts a string and a number (int or float) into a tuple.

    Args:
        k (str): A string key.
        v (Union[int, float]): A number to be squared.

    Returns:
        Tuple[str, float]: tuple containing the string and the square number.
    """
    return k, (v ** 2)
