#!/usr/bin/env python3
"""
mesure le temps d'exécution moyen de plusieurs coroutines
asynchrones exécutées en parallèle
"""
import asyncio
from typing import List
task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    async
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    results = []

    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task

        results.append(delay)

    return sorted(results)
