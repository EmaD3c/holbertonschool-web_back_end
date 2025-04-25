#!/usr/bin/env python3
"""
mettre un delais aleatoire entre 0 et max delay
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    async
    """
    delay = random.uniform(0, max_delay)  # genere un delai aleatoire
    await asyncio.sleep(delay)
    return delay
