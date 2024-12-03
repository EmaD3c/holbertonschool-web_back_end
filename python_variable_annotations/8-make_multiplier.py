#!/usr/bin/env python3
"""
Complex types - functions
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    return multiplier_value fonction
    """
    def multiplier_value(value: float) -> float:
        """
        multiplier_value that multiplie value with multiplier
        """
        return value * multiplier
    return multiplier_value
