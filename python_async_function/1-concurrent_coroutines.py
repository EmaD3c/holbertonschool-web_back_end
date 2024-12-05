#!/usr/bin/env python3
"""
Let's execute multiple coroutines at the same time with async
"""
import asyncio
import random
from typing import List
# maintenir une liste triée sans avoir à la trier à chaque insertion
from bisect import insort
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute wait_random n fois avec max_delay
    et return la liste des délais triés
    """
    # cree une liste de taches
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # liste qui stock le resultat
    results = []

    # attendre la fin des taches
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task  # prendre le resultat
        insort(results, delay)  # insere a la bonne position avec bisect

    return results
