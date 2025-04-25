#!/usr/bin/env python3
"""
mesure le temps d'exécution moyen de plusieurs coroutines
asynchrones exécutées en parallèle
"""
import asyncio
wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    async
    """
    return asyncio.create_task(wait_random(max_delay))
