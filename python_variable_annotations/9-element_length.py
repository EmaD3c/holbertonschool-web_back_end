#!/usr/bin/env python3
"""
to_kv
"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    to_kv
    """
    return k, v**2
