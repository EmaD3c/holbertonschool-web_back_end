#!/usr/bin/env python3
"""
Collecte 10 nombres aléatoires en utilisant
un générateur async
"""
from typing import List
async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """
    async
    """
    return ([x async for x in async_generator()])
