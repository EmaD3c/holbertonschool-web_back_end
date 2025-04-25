#!/usr/bin/env python3
"""
to_kv
"""
from typing import List, Union, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    to_kv
    """
    return [(i, len(i)) for i in lst]
