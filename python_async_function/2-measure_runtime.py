#!/usr/bin/env python3
"""
mesure le temps d'exécution moyen de plusieurs coroutines
asynchrones exécutées en parallèle
"""
import asyncio
from typing import List
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """
    async
    """
    start = time.perf_counter()  # Enregistre le temps de départ
    asyncio.run(wait_n(n, max_delay))  # exécute n coroutines w random delay
    elapsed = time.perf_counter() - start  # Calcule le temps total d'exécution
    return elapsed / n
