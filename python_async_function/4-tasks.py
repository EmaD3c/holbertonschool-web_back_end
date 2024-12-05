#!/usr/bin/env python3
"""
Tasks
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute task_wait_random n fois avec max_delay
    retourne les résultats triés
    """
    # cree la liste des tasks
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # list qui stock le result
    results = []

    # attendre la fin des tasks
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task  # results de la task
        results.append(delay)

    return sorted(results)
