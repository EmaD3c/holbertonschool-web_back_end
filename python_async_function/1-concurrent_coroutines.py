#!/usr/bin/env python3
"""
mettre un delais aleatoire entre 0 et max delay
"""
import asyncio
from typing import List
wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    async
    """
    delays = []  # cree une list vide
    # liste de n coroutines wait_random, Chacune avec le même max_delay
    tasks = [wait_random(max_delay) for _ in range(n)]

    # execute tout les task en parallele
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
