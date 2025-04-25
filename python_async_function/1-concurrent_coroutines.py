#!/usr/bin/env python3
"""
mettre un delais aleatoire entre 0 et max delay
"""
import asyncio
import random
from typing import List
wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    async
    """

    if max_delay <= 0:
        max_delay = 1  # empech er que le delais soit 0
    delays = []  # cree une list vide

    for i in range(n):  # ajouter les resultat
        delay = await wait_random(max_delay)
        delays.append(delay)

    # trier les resultats
    delays.sort()
    return delays
